export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://ppt.cc/fTNyMx@.png',
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
                text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5
              }
            ]
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
                flex: 5,
                align: 'end'
              }
            ]
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'Time',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1,
                wrap: true,
                position: 'absolute'
              },
              {
                type: 'text',
                text: '10:00 - 23:00',
                wrap: true,
                color: '#666666',
                size: 'sm',
                flex: 5,
                align: 'end',
                position: 'relative'
              }
            ]
          }
        ]
      }
    ],
    borderColor: '#F8F4F1',
    backgroundColor: '#F8F4F1'
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
          label: '點我看更多',
          uri: 'https://linecorp.com'
        },
        color: '#ffffff'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [],
        margin: 'sm'
      }
    ],
    flex: 0,
    backgroundColor: '#E7B768'
  }
}
