import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import DashBoard from '@/page/DashBoard'
import Edior from '@/page/Edior'
import Markdown from '@/page/Markdown'
import TodoList from '@/page/TodoList'
import BasicTables from '@/page/BasicTables'
import BasicCharts from '@/page/BasicCharts'
import FormLayouts from '@/page/FormLayouts'
import FormInputs from '@/page/FormInputs'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          component: DashBoard
        },
        {
          path: '/DashBoard',
          name: 'DashBoard',
          component: DashBoard
        },
        {
          path: '/Edior',
          name: 'Edior',
          component: Edior
        },
        {
          path: '/Markdown',
          name: 'Markdown',
          component: Markdown
        },
        {
          path: '/TodoList',
          name: 'TodoList',
          component: TodoList
        },
        {
          path: '/BasicTables',
          name: 'BasicTables',
          component: BasicTables
        },
        {
          path: '/BasicCharts',
          name: 'BasicCharts',
          component: BasicCharts
        },
        {
          path: '/FormInputs',
          name: 'FormInputs',
          component: FormInputs
        },
        {
          path: '/FormLayouts',
          name: 'FormLayouts',
          component: FormLayouts
        }

      ]
    }
  ]
})
