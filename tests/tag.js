import axios from 'axios'
import * as cheerio from 'cheerio'

const main = async () => {
  try {
    const { data } = await axios.get('https://www.twmarket.tw/?s=%E5%8F%B0%E5%8C%97%E5%B8%82%E9%9B%86')
    const $ = cheerio.load(data)
    const TaipeiTag = []
    $('#site-content .post-tags').each(function () {
      TaipeiTag.push($(this).text().replaceAll('\n', '').replaceAll('\t', '').replaceAll('標籤', '').replaceAll('@', '').trim())
    })
    console.log(TaipeiTag)
  } catch (error) {
    console.log(error)
  }
}
main()

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
// $('#site-content .post-tags').each(function () {
//   console.log($(this).text().replaceAll('\n', '').replaceAll('\t', '').replaceAll('標籤', '').trim())
// })
