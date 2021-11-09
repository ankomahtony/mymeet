import axios from 'axios'

export default {
    namespaced: true,

    state: {
        meeting:null,
        responses:[],
    },

    getters: {
        meeting (state){
            return state.meetings
        },
        responses (state){
            return state.responses
        }
    },
    
    mutations: {
        SET_MEETINGS (state, meeting) {
            state.meeting = meeting
        },
        SET_RESPONSES (state, responses) {
            state.responses = responses
        },
    },

    actions: {
        async getMeetings ({ commit }){
            let response = await axios.get('/api/meeting')
            commit('SET_MEETINGS', response.data)
        },
        async getResponses ({ commit }){
            let response = await axios.get('/api/responses')
            commit('SET_MEETINGS', response.data)
            // console.log(response.data)
        }
    }
}