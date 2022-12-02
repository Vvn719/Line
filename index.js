import 'dotenv/config'
import linebot from 'linebot'
import express from 'express'
import Taipei from './commands/Taipei.js'
import TaipeiFun from './commands/TaipeiFun.js'
import NewTaipei from './commands/NewTaipei.js'

const app = express()

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type !== 'text') return

  if (event.message.text === '台北市集') {
    Taipei(event)
  } else if (event.message.text === '台北展覽') {
    TaipeiFun(event)
  } else if (event.message.text === '新北市集') {
    NewTaipei(event)
  }
})

const linebotParser = bot.parser()

app.post('/', linebotParser)

app.get('/', (req, res) => {
  res.status(200).send('ok')
})

app.listen(process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
