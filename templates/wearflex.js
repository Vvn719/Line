export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'image',
        url: 'https://ppt.cc/fGNJSx@.png',
        size: 'full',
        aspectMode: 'cover',
        aspectRatio: '2:3',
        gravity: 'top'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: "Cony's T-shirts",
                size: 'xl',
                color: '#ffffff',
                weight: 'bold'
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'text',
                text: '¥35,800',
                color: '#ebebeb',
                size: 'sm',
                flex: 0,
                contents: [
                  {
                    type: 'span',
                    text: 'hello, world'
                  }
                ],
                wrap: true
              }
            ],
            spacing: 'lg'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'filler'
              },
              {
                type: 'box',
                layout: 'baseline',
                contents: [
                  {
                    type: 'filler'
                  },
                  {
                    type: 'text',
                    text: 'Add to cart',
                    color: '#ffffff',
                    offsetTop: '-2px'
                  },
                  {
                    type: 'filler'
                  }
                ],
                spacing: 'sm'
              },
              {
                type: 'filler'
              }
            ],
            borderWidth: '1px',
            cornerRadius: '4px',
            spacing: 'sm',
            borderColor: '#ffffff',
            margin: 'xxl',
            height: '40px'
          }
        ],
        position: 'absolute',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px',
        backgroundColor: '#9C8E7Ecc',
        paddingAll: '20px',
        paddingTop: '18px'
      }
    ],
    paddingAll: '0px'
  }
}
