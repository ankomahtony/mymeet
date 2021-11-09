import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import meetings from './meetings'
// import home from './home'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sideBarOpen: false
    },
    getters: {
        sideBarOpen: state => {
            return state.sideBarOpen
        }
    },
    mutations: {
        toggleSidebar (state) {
            state.sideBarOpen = !state.sideBarOpen
        },
        hideSidebar (state) {
            state.sideBarOpen = false
        }

    },
    actions: {
        toggleSidebar(context) {
            context.commit('toggleSidebar')
        },

        hideSidebar(context) {
            context.commit('hideSidebar')
        }
    },
    modules:{
        auth,
        meetings
    }
})
