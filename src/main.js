import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import store from './store'
import Flutterwave from  'flutterwave-vue-v3'

import axios from 'axios'
import moment from 'moment';

Vue.use(Flutterwave, { publicKey: 'FLWPUBK-aa71ed9273bac2d6c90fe70faeb1ae17-X' } )

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(value).fromNow()
    }
});

axios.defaults.baseURL = 'http://localhost:8000'

axios.defaults.withCredentials = true

import '@/assets/css/tailwind.css'

import Dashboard from '@/components/Dashboard'
import DashboardHome from '@/pages/Home'
import DashboardMeetings from '@/pages/Meetings'
import ViewMeeting from '@/pages/Meeting'
import DashboardAnalytics from '@/pages/Analytics'
import DashboardCalendar from '@/pages/Calendar'
import DashboardEnquires from '@/pages/Enquires'
import AddMeeting from '@/pages/AddMeeting'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Form from '@/pages/Form'
import P404 from '@/pages/404'
import Congratulation from '@/pages/Congratulations'


Vue.config.productionTip = false

Vue.use(Router)

const routes = [
  { path: '/', redirect: { name: 'DashboardHome' } },
  { path: '/login', name:'login', component:Login, meta:{ middleware:"guest", title:`login`} },
  { path: '/register', name:'register', component:Register, meta:{ middleware:"guest", title:`register`} },
  { path: '/form/:uuid', component:Form,name:'MeetingForm', meta:{ middleware:"no need", title:`Form input`}},
  { path: '/page-not-found', component:P404, name:'404', meta:{ middleware:"no need", title:`404`}},
  { path: '/congratulations', component:Congratulation, name:'Congratulation', meta:{ middleware:"no need", title:`Congratulation`}},
  { path: '/dashboard/', component: Dashboard, meta:{ middleware:"auth"}, children: [
      { path: 'home', name: 'DashboardHome', component: DashboardHome },
      { path: 'meetings/', name: 'DashboardMeetings', component: DashboardMeetings },
      { path: 'meetings/:uuid', name: 'ViewMeeting', component: ViewMeeting },
      { path: 'analytics', name: 'DashboardAnalytics', component: DashboardAnalytics },
      { path: 'calendar', name: 'DashboardCalendar', component: DashboardCalendar },
      { path: 'enquires', name: 'DashboardEnquires', component: DashboardEnquires },
      { path: 'meeting/add', name: 'AddMeeting', component: AddMeeting }
    ]
  },
]

const router = new Router({
  mode: 'history',
  routes,
  linkActiveClass:'active',
  linkExactActiveClass:'exact-active',
})

router.beforeEach((to, from, next) => {
  if(to.meta.middleware=="guest"){
      if(store.state.auth.authenticated){
          next({name:"DashboardHome"})
      }
      next()
  }else if(to.meta.middleware=="no need"){
    next()
  }else{
      if(store.state.auth.authenticated){
          next()
      }else{
          next({name:"login"})
      }
  }
})

store.dispatch('auth/me').then(() => {
  new Vue({
    render: h => h(App),
    router,
    store
  }).$mount('#app')
})
