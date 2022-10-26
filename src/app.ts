import { createApp } from 'vue'
import { Button, Toast,Tabbar, TabbarItem, Icon,Swiper,SwiperItem,Card,Tag,Price,Cell, CellGroup,ConfigProvider,Category, CategoryPane,SearchBar,NoticeBar  } from '@nutui/nutui-taro';

import "@nutui/nutui/dist/style.css";


import { createPinia } from 'pinia'

import './app.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
// App.use(NutUI).mount("#app");
App.use(Button).use(Toast)
App.use(Tabbar).use(Toast)
App.use(TabbarItem).use(Toast)
App.use(Icon).use(Toast)
App.use(Swiper)
App.use(Card)
App.use(Tag)
App.use(Cell)
App.use(ConfigProvider)
App.use(CellGroup)
App.use(Price)
App.use(SwiperItem)
App.use(Category)
App.use(CategoryPane)
App.use(SearchBar)
App.use(NoticeBar)

App.use(createPinia())


export default App
