import fs from 'fs'
import path from 'path'
import commandLineInterface from './commandLineInterface.js'
import chalk from 'chalk'
import figlet from 'figlet'

export default async function imsmanifest() {

  const data = await commandLineInterface()

  function generateKey(length) {
      let result = ''
      const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < length; i++) {
         result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
      }
      return result.toUpperCase()
  }

  const ORGANIZATIONS = `ORG-${generateKey(32)}`

  function mountResourceAssets({ location, type }) {
      if (!fs.existsSync(location)) {
        console.log(
          chalk.yellow(`<!-- Nenhum arquivo do tipo ${type} encontrado em: ${location} -->`)
          )
        return `<!-- Nenhum arquivo do tipo ${type} encontrado em: ${location} -->`
      }

      let xml = `    <resource identifier="${type}" type="webcontent">\n`
      fs.readdirSync(location).map(archive => {
          xml += `      <file href="${location}/${archive}" />\n`
      })

      xml += '    </resource>'

      return xml
  }

  const FONTS = mountResourceAssets({ location: './assets/fonts', type: 'fonts' })
  const STYLES = mountResourceAssets({ location: './assets/scripts/dist', type: 'scripts' })
  const SCRIPTS = mountResourceAssets({ location: './assets/styles/dist', type: 'styles' })

  let date;
  {
    const date_ob = new Date();
    const day = ('0' + date_ob.getDate()).slice(-2)
    const month = ('0' + (date_ob.getMonth() + 1)).slice(-2)
    const year = date_ob.getFullYear()
    const hours = ('0' + date_ob.getHours()).slice(-2)
    const minutes = ('0' + date_ob.getMinutes()).slice(-2)
    date = `${day}/${month}/${year} - ${hours}:${minutes}`
  }

  function itemHtmlGenerator() {
    const xml = []
    fs.readdirSync('./').map(archive => {
      if (path.extname(archive) === '.html') {
        if (data.type === 'simple' && archive !== 'index.html') {
          console.log(
            chalk.red(
              figlet.textSync('ERRO', {
                horizontalLayout: 'full',
                font: 'Standard',
              })
            )
          )
          throw chalk.red('VOCÊ ESTÁ TENTANDO GERAR MANIFESTO SIMPLES NO LUGAR DOS MÚLTIPLOS (sco-1, sco-2, sco-3) OU A PASTA CONTÉM OUTROS ARQUIVOS COM EXTENSÃO .html !!!')
        }
        const identifierrefToken = generateKey(32)
        const title = data.list[archive.split('.')[0]][0].title
        const item =
          `
      <item identifier="ITEM-${generateKey(32)}" identifierref="RES-${identifierrefToken}" isvisible="true">
        <title>${title}</title>
      </item>
          `

        const resource =
        `
      <resource identifier="RES-${identifierrefToken}" type="webcontent" href="${archive}" adlcp:scormtype="sco">
        <file href="${archive}" />
      </resource>`

        xml.push({ item, resource })
      }
    })

    if (xml.length === 0) {
      console.log(
        chalk.red('<!-- Nenhum arquivo do tipo .html encontrado em: ./ -->')
      )
      xml.push({
        item: '<!-- Nenhum arquivo do tipo .html encontrado em: ./ -->',
        resource:'<!-- Nenhum arquivo do tipo .html encontrado em: ./ -->'
      })
    }

    return xml
  }

  if (data.type === 'simple' || data.type === 'mult') {
    const ITEM_HTML = itemHtmlGenerator()

    const manifest =
`
<?xml version="1.0" encoding="UTF-8"?>
<manifest
  xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
  xmlns:imsmd="http://www.imsglobal.org/xsd/imsmd_rootv1p2p1"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
  identifier="MANIFEST-0F27AAF15AED35C5AFCC9E62C6117936"
  xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd http://www.imsglobal.org/xsd/imsmd_rootv1p2p1 imsmd_rootv1p2p1.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd"
>
  <metadata>
    <schema>ADL SCORM</schema>
    <schemaversion>1.2</schemaversion>
    <adlcp:location />
  </metadata>
  <organizations default="${ORGANIZATIONS}">
    <organization identifier="${ORGANIZATIONS}" structure="hierarchical">
      <title>${data.zipName}</title>
${ITEM_HTML.map(obj => obj.item).join('')}
    </organization>
  </organizations>
  <resources>
  ${FONTS}
  ${SCRIPTS}
  ${STYLES}
  ${ITEM_HTML.map(obj => obj.resource).join('')}
  </resources>
</manifest>
`

    return {
      zipName: data.zipName,
      xml: manifest
    }
  }
}
