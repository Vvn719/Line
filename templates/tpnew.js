export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://ppt.cc/feIvex@.jpg',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover'
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Brown Cafe',
        weight: 'bold',
        size: 'xl'
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'Miraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 ShinjukMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, Tokyou, TokyoMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, TokyoMiraina Tower, 4-1-6 Shinjuku, Tokyo',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5
              }
            ],
            maxHeight: '190px'
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: 'Time',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                text: '10:00 - 23:00',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5
              }
            ]
          },
          {
            type: 'text',
            text: 'hello, world',
            color: '#aaaaaa',
            size: 'xs'
          }
        ],
        maxHeight: '250px'
      }
    ],
    backgroundColor: '#F8F4F1',
    maxHeight: '300px'
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    contents: [
      {
        type: 'button',
        style: 'link',
        height: 'sm',
        action: {
          type: 'uri',
          label: '關於這個市集 ➟',
          uri: 'https://linecorp.com'
        },
        color: '#ffffff'
      }
    ],
    flex: 0
  },
  styles: {
    footer: {
      backgroundColor: '#F5B29F'
    }
  }
}
