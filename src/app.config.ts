export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/home/home',
    'pages/commodity/commodity',

  ],
  "subpackages": [
    {
      "root": "subpages", // 分包根目录
      "pages": [          // 分包下的页面路径，相对与分包根目录
        "index/index",
        "home/home",
        "commodity/commodity",
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "color": "#2f2f2f",
    "selectedColor": "#216d8d",
    "backgroundColor": "#ffffff",
    "borderStyle": "black",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "assets/images/home.png",
        "selectedIconPath": "assets/images/home.png"
      },
      {
        "pagePath": "pages/commodity/commodity",
        "text": "分类",
        "iconPath": "assets/images/shop.png",
        "selectedIconPath": "assets/images/shop.png"
      },
      {
        "pagePath": "pages/home/home",
        "text": "我的",

        "iconPath": "assets/images/my_light.png",
        "selectedIconPath": "assets/images/my_light.png"
      }
    ],
    "position":"bottom"
  }
})
