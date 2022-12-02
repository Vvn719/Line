export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://ppt.cc/fhhTqx@.jpg',
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
        size: 'lg',
        color: '#4A565F'
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
                size: 'sm',
                flex: 5,
                color: '#4A565F'
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
                color: '#999999',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                text: '10:00 - 23:00',
                wrap: true,
                color: '#4A565F',
                size: 'sm',
                flex: 5
              }
            ]
          }
        ]
      },
      {
        type: 'text',
        text: 'hello, world',
        size: 'xs',
        color: '#999999',
        margin: 'lg'
      }
    ]
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
    hero: {
      backgroundColor: '#F8F4F1'
    },
    body: {
      backgroundColor: '#F8F4F1'
    },
    footer: {
      backgroundColor: '#F5B29F'
    }
  }
}
