export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'image',
        url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg',
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
                text: "Brown's T-shirts",
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
                position: 'relative',
                align: 'start'
              },
              {
                type: 'text',
                text: '¥75,000',
                color: '#ffffffcc',
                gravity: 'bottom',
                flex: 0,
                size: 'sm'
              }
            ],
            spacing: 'lg',
            justifyContent: 'space-between'
          }
        ],
        position: 'absolute',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px',
        backgroundColor: '#8F9D86cc',
        paddingAll: '20px',
        paddingTop: '18px'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'SALE',
            color: '#ffffff',
            align: 'center',
            size: 'xs',
            offsetTop: '3px'
          }
        ],
        position: 'absolute',
        cornerRadius: '20px',
        offsetTop: '18px',
        backgroundColor: '#ff334b',
        offsetStart: '18px',
        height: '25px',
        width: '53px'
      }
    ],
    paddingAll: '0px'
  }
}
