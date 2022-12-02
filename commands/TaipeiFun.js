import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/tpfunflex.js'
// import fs from 'fs'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.funtime.com.tw/localtour/topic/index.php?theme=taiwan-exhibition&target=taipei')
    const $ = cheerio.load(data)
    const TaipeiFun = []
    $('#content_box .block').each(function () {
      const bubble = JSON.parse(JSON.stringify(template))
      bubble.hero.url = $(this).find('.carousel_caption img').attr('src')
      bubble.body.contents[0].text = $(this).find('.type_c_subtitle span').text().replaceAll('\n', '').replaceAll('\t', '').trim()
      // console.log(bubble.body.contents[0].text)
      bubble.body.contents[1].contents[0].contents[0].text = $(this).find('.type_c_sub_description').text().replaceAll('\n', '').replaceAll('\t', '').replaceAll('■', '\n■').replaceAll('展覽', '').trim()
      bubble.body.contents[1].contents[1].contents[0].text = ('有料')
      bubble.body.contents[1].contents[1].contents[1].text = $(this).find('.type_c_goods_title').text().split('【').pop().split('】').shift().trim()
      bubble.body.contents[1].contents[2].contents[0].text = ('票價')
      bubble.body.contents[1].contents[2].contents[1].text = $(this).find('.type_c_goods_price').text().replaceAll('\n', '').replaceAll('\t', '').trim()
      bubble.footer.contents[0].action.uri = $(this).find('.block_content a').attr('href')
      TaipeiFun.push(bubble)
      if (TaipeiFun.length >= 12) {
        TaipeiFun.splice(0, 1)
        return false
      }
    })
    const reply = {
      type: 'flex',
      altText: '最吸眼球展覽底加─=≡Σ((( つ•̀ω•́)つ',
      contents: {
        type: 'carousel',
        contents: TaipeiFun
      }
    }
    event.reply(reply)
    // fs.writeFileSync('./dump/taipeifun.json', JSON.stringify(reply, null, 2))
    // console.log(JSON.stringify(reply, null, 2))
  } catch (error) {
    console.error('發生錯誤', error)
  }
}
