import axios from 'axios'
import * as cheerio from 'cheerio'

const main = async () => {
  try {
    const { data } = await axios.get('https://www.funtime.com.tw/localtour/topic/index.php?theme=taiwan-exhibition&target=taipei')
    const $ = cheerio.load(data)
    const TaipeiExhibition = []
    $('.block_content .carousel_caption img').each(function () {
      TaipeiExhibition.push($(this).text().trim())
    })
    console.log(TaipeiExhibition)
  } catch (error) {
    console.log(error)
  }
}
main()

// .split('台北市集-').pop()
