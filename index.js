#!/usr/bin/env node

import fs from 'fs'
import archiver from 'archiver'
import CLI from 'clui'
import chalk from 'chalk'
import figlet from 'figlet'

import adlcp_rootv1p2 from './static/adlcp_rootv1p2.js'
import ims_xml from './static/ims_xml.js'
import imscp_rootv1p1p2 from './static/imscp_rootv1p1p2.js'
import imsmd_rootv1p2p1 from './static/imsmd_rootv1p2p1.js'
import imsmanifest from './imsmanifest.js'
import clear from 'clear'

(async () => {
  const data = await imsmanifest()

  const status = new CLI.Spinner('Zipando arquivos e excluindo desnecessários. Aguarde...')
  status.start()


  fs.writeFileSync('./adlcp_rootv1p2.xsd', adlcp_rootv1p2)
  fs.writeFileSync('./ims_xml.xsd', ims_xml)
  fs.writeFileSync('./imscp_rootv1p1p2.xsd', imscp_rootv1p1p2)
  fs.writeFileSync('./imsmd_rootv1p2p1.xsd', imsmd_rootv1p2p1)
  fs.writeFileSync('./imsmanifest.xml', data.xml)

  const output = fs.createWriteStream(data.zipName + '.zip')
  const archive = archiver('zip')

  clear()
  output.on('close', () => {
      console.log(
        chalk.greenBright(
          figlet.textSync('  Finish !', {
            horizontalLayout: 'full',
            font: 'speed',
          })
        )
      )
      console.log(
        chalk.green(`Zip total bytes: ${archive.pointer()}\n`)
      )
      console.log(
        chalk.yellow(
          '   Todos arquivos listados abaixo foram excluídos da pasta ZIP. (Se existiam):\n',
          '     qualquer arquivo ZIP;\n',
          '     node_modules;\n',
          '     pastas src em styles e scripts;\n',
          '     gulpfile.js;\n',
          '     package.json;\n',
          '     package-lock.json.\n',
        )
      )

      status.stop()
  })

  archive.on('error', (err) => {
      throw err
  })

  archive.pipe(output)

  archive.glob('**/*', {
    ignore: [
      '*.zip',
      'node_modules/**',
      'assets/styles/src/**',
      'assets/scripts/src/**',
      'gulpfile.js',
      'package.json',
      'package-lock.json'
    ]
  })


  archive.finalize()
  status.stop()
})()

