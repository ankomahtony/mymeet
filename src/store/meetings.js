import axios from 'axios'

export default {
    namespaced: true,

    state: {
        meetings:[],
        responses:[],
        meeting_id:0,
        meeting:[],
        meeting_start_date:0,
    },

    getters: {
        meetings (state){
            return state.meetings
        },
        responses (state){
            return state.responses
        },
        meeting_id (state){
            return state.meeting_id
        },
        meeting (state){
            return state.meeting
        },
        meeting_start_date (state){
            return state.meeting_start_date
        },
    },
    
    mutations: {
        SET_MEETINGS (state, meetings) {
            state.meetings = meetings
        },
        SET_RESPONSES (state, responses) {
            state.responses = responses
        },
        SET_MEETING_ID (state, value) {
            state.meeting_id = value
        },
        SET_MEETING (state, meeting) {
            state.meeting = meeting
        },
        SET_START_TIME (state, meeting_start_date) {
            state.meeting_start_date = meeting_start_date
        },

    },

    actions: {
        async getMeetings ({ commit }){
            let response = await axios.get('/api/meetings')
            commit('SET_MEETINGS', response.data)
            // console.log(response.data)
        },
        async funMeetingId ({ commit }, a){
            commit('SET_MEETING_ID', a)
        },
        async getMeeting ({ commit }, id){
            let response = await axios.get('/api/meetings/'+id)
            commit('SET_MEETING', response.data.meeting)
            commit('SET_RESPONSES', response.data.responses)
            commit('SET_START_TIME', response.data.meeting_start_date)
        },
    }
}