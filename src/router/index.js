import VueRouter from 'vue-router'

const test = { template: '<div>Helloworld</div>'}

const routes = [
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/Home')
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})