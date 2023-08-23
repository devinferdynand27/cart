import { createRouter, createWebHistory } from 'vue-router'

function cektoken(to,from,next){
  var isAuthenticated = false
  if(localStorage.getItem('token')){
    isAuthenticated = true
    next()
  }else{
    isAuthenticated = false
    next('/login')
  }
}
beforeEnter:cektoken

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Produk',
      component: () => import('../views/Product/ProduksComponent.vue')
    },
     {
      path: '/profil',
      name: 'Profil',
      component: () => import('../views/profil/indexComponent.vue'),
      beforeEnter:cektoken,

    },
    {
      path: '/product/detailproduct/:slug',
      name: 'Detailproduct',
      component: () => import('../views/Product/DetailComponent.vue'),
      props: true
    },
    {
      path: '/brans',
      name: 'Brans',
      component: () => import('../views/brance/indexComponent.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/auth/RegisterComponent.vue')
    },
    {
      path: '/kategori',
      name: 'Kategori',
      component: () => import('../views/kategori/indexComponent.vue')
    },
    {
      path: '/checkout',
      name: 'Ceckout',
      component: () => import('../views/Checkout/indexComponent.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/cart/indexComponent.vue')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('../components/DetailComponent.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../components/CheckoutComponent.vue')
    },
    {
      path: '/login',
      component: () => import('../components/LoginComponent.vue'),
      meta: {requiresGuest: true}
    },
  ]
})

export default router
