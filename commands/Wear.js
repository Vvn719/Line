import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/wearflex.js'
// import fs from 'fs'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.look-in.com.tw/tag/%E7%A9%BF%E6%90%AD')
    const $ = cheerio.load(data)
    const Wear = []
    $('#article-list .list-article').each(function () {
      const bubble = JSON.parse(JSON.stringify(template))
      bubble.body.contents[1].contents[0].contents[0].text = $(this).find('.title a').text()
        .replaceAll('\n', '').replaceAll(' ', '').trim()
      console.log(bubble.body.contents[1].contents[0].contents[0].text)

      Wear.push(bubble)
      if (Wear.length >= 12) {
        return false
      }
    })
    const reply = {
      type: 'flex',
      altText: '今天穿什麼看這裡',
      contents: {
        type: 'carousel',
        contents: Wear
      }
    }
    // console.log(Wear)
    // fs.writeFileSync('./dump/wear.json', JSON.stringify(reply, null, 2))
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
