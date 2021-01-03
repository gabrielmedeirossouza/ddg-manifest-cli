import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'
import inquirer from 'inquirer'

export default async function commandLineInterface() {

  const folderName = process.cwd().split('\\').pop() || process.cwd().split('/').pop()

  let output = {}

  function initRender() {
    clear()

    console.log(
      chalk.yellowBright(
        figlet.textSync('Manifest CLI', {
          horizontalLayout: 'Standard',
          font: 'Standard',
        })
      )
    )
  }
  initRender()

  const htmlFiles = fs.readdirSync('./').filter(archive => path.extname(archive) === '.html')

  const results = {
    dialog: () => {
      const questions = [
        {
          name: 'scormStructure',
          type: 'list',
          message: 'Selecione o tipo de estrutura do Scorm:',
          choices: [
            'Simples, contendo apenas um arquivo index.html',
            'Múltiplos, contendo vários arquivos sco-01, sco-02, etc...',
            'Complexo, scos encadeados em formato de árvore'
          ],
          default: 'Simples, contendo apenas um arquivo index.html'
        },
        {
          name: 'preRequisite',
          type: 'list',
          message: 'O curso vai conter pré requisitos?',
          choices: [
            'Não',
            'Sim'
          ],
          default: 'Não'
        },
      ]
      return inquirer.prompt(questions)
    },
    simple: () => {
      const questions = [
        {
          name: 'index',
          type: 'input',
          message: 'Defina um título para o SCO index.html:',
          default: folderName,
          validate: value => {
            if (value.length) {
              return true
            }

            return 'Você precisa inserir um título...'
          }
        },
        {
          name: 'zipName',
          type: 'input',
          message: 'Qual nome da pasta zip a ser criada?',
          default: folderName,
          validate: value => {
            if (value.length) {
              return true
            }

            return 'Você precisa inserir um nome para a pasta zip...'
          }
        },
      ]
      return inquirer.prompt(questions)
    },
    mult: () => {
      console.log('   ' + chalk.magenta.bold('==== SCO ===='))
      htmlFiles.map(file => console.log(
        '    ' + chalk.magenta(file)
      ))
      const questions = htmlFiles.map(file => {
        return {
          name: file.split('.')[0],
          type: 'input',
          message: `Defina um título para o SCO ${file}:`,
          default: folderName,
          validate: value => {
            if (value.length) {
              return true
            }

            return 'Você precisa inserir um título...'
          }
        }
      })

      questions.push({
        name: 'zipName',
        type: 'input',
        message: 'Qual nome da pasta zip a ser criada?',
        default: folderName,
        validate: value => {
          if (value.length) {
            return true
          }

          return 'Você precisa inserir um nome para a pasta zip...'
        }
      })

      return inquirer.prompt(questions)
    }
  }

  async function init() {
    const dialogData = await results.dialog()

    if (dialogData.scormStructure === 'Simples, contendo apenas um arquivo index.html') {
      return await simple()
    }

    if (dialogData.scormStructure === 'Múltiplos, contendo vários arquivos sco-01, sco-02, etc...') {
      return await mult()
    }
  }
  return await init()

  async function simple() {
    const simpleData = await results.simple()

    output.type = 'simple'
    output.zipName = simpleData.zipName,
    output.list = {
      'index': [
        {
          fileName: 'index.html',
          title: simpleData.index
        }
      ]
    }

    return output
  }

  async function mult() {
    const multData = await results.mult()
    const items = {}

    htmlFiles.map(file => {
      items[file.split('.')[0]] = [
        {
          fileName: file,
          title: multData[file.split('.')[0]]
        }
      ]
    })

    output.type = 'mult'
    output.zipName = multData.zipName
    output.list = items

    return output
  }
}
