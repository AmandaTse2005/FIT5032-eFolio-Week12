//Week 5 Activity 5.3: Now it is time to setup the router.
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import LoginView from '../views/LoginView.vue'
import AccessDeniedView from '../views/AccessDeniedView.vue'

import { isAuthenticated } from '../authentication'

//Week 7 Activity 7.2.1: Setting up the VueJs
import FirebaseSigninView from '../views/FirebaseSigninView.vue'

import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'

import FirebaseLogoutView from '../views/FirebaseLogoutView.vue'

import { getAuth } from 'firebase/auth'

//Week 8 Activity 8.4.2: Modify the existing page to incorporate added page
import AddBookView from '../views/AddBookView.vue'

//Week 9 Activity 9.3.1: Start Vue.js project
import GetBookCountView from '../views/GetBookCountView.vue'

//Week 10 Activity 10.2.1: Page setup
import WeatherView from '../views/WeatherView.vue'

//Week 10 Activity 10.3.1: Page setup
import CountBookAPI from '../views/CountBookAPI.vue'


import GetAllBookAPI from '../views/GetAllBookAPI.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    
    //Restrict access to certain routes (e.g., About page) to authenticated users only.
    meta: {
      requiresAuth: true
    }
  },
  
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDeniedView
  },

  //Week 7 Activity 7.2.1: Setting up the VueJs
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },

  //Week 7 Activity 7.3.1: Create Firebase Registration page
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },

  {
    path: '/FireLogout',
    name: 'FireLogout',
    component: FirebaseLogoutView,

    meta: {
      requiresAuth: true
    }
  },
  
  //Week 8 Activity 8.4.2: Modify the existing page to incorporate added page
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },

  //Week 9 Activity 9.3.1: Start Vue.js project
  {
    path: '/getbookcount',
    name: 'GetBookCount',
    component: GetBookCountView
  },

  //Week 10 Activity 10.2.1: Page setup
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },

  //Week 10 Activity 10.3.1: Page setup
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },


  {
    path: '/GetAllBookAPI',
    name: 'GetAllBookAPI',
    component: GetAllBookAPI
  }
]

const router = createRouter({
  // history: createWebHistory(),
  // routes
  
  //Week 12 Activity 12.2.2: Steps for setting up CI & CD
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

//Redirect unauthenticated users to the login page when they try to access restricted routes.
router.beforeEach((to, from, next) => {
  const auth = getAuth()

  if (!to.meta.requiresAuth) {
    next()
    return
  }

  const isFirebaseAuthenticated = !!auth.currentUser

  if (isAuthenticated.value || isFirebaseAuthenticated) {
    next()
  } else {
    if (to.path !== '/FireLogin') {
      next('/FireLogin')
    } else {
      next()
    }
  }
})

export default router