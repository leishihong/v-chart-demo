export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home'),
    meta: {
      title: '首页'
    }
  }
]
