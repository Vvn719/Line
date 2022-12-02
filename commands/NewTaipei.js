import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/tpnew.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.twmarket.tw/?cat=61')
    const $ = cheerio.load(data)
    const NewTaipei = []
    $('#site-content article').each(function () {
      const bubble = JSON.parse(JSON.stringify(template))
      // bubble.hero.url = $(this).find('.postie-post img').attr('src')
      bubble.body.contents[0].text = $(this).find('.entry-title a').text().split('新北市集-').pop().split('-2').shift().trim()
      // console.log(bubble.body.contents[0].text)
      bubble.body.contents[1].contents[0].contents[0].text = $(this).find('.entry-content').text().replaceAll('\t', '').replaceAll('\n', '').replaceAll('台北市集：', '').split('市集內容：').pop().trim()

      bubble.body.contents[1].contents[1].contents[1].text = $(this).find('.entry-title').text().replaceAll('\t', '').replaceAll('\n', '').replaceAll('台北市集：', '').split('市集內容：').pop().split('-').pop().trim()

      bubble.body.contents[1].contents[2].text = $(this).find('.post-tags').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll('標籤', '').replaceAll('@', '').trim()
      bubble.footer.contents[0].action.uri = $(this).find('.entry-title a').attr('href')
      NewTaipei.push(bubble)
      if (NewTaipei.length >= 12) {
        return false
      }
    })
    const reply = {
      type: 'flex',
      altText: '有料新北市集等你來(♡˙︶˙♡)',
      contents: {
        type: 'carousel',
        contents: NewTaipei
      }
    }
    // console.log(Taipei)
    event.reply(reply)
  } catch (error) {
    console.error('發生錯誤', error)
  }
}

// entry - title heading - size - 1
// entry - content
// meta - icon
// meta - text

// $('#post-43110 .entry-title').text()

// $('#post-43110 .entry-content').text().replaceAll('\t', '').replaceAll('\n', '').trim()
// $('#post-43110 .entry-content').each(function () {
//   console.log($(this).text().replaceAll('\t', '').replaceAll('\n', '').trim())
// })

// $('#post-43110 .post-tags').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll('標籤', '').trim()
// $('#post-43110 .post-tags').each(function () {
//   console.log($(this).text().replaceAll('\n', '').replaceAll('\t', '').replaceAll('標籤', '').trim())
// })
