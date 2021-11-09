<template>
  <option :value="meeting.title" @click="alertMe()"></option>
</template>

<script>
  import { mapActions } from 'vuex'
export default {
    data (){
        return {meeting_id:10}
    },
    props:{
        meeting:{
            required:true,
            type: Object
        }
    },
    methods: {
        ...mapActions({
            findMeetingId:'meetings/funMeetingId'
        }),
        async funMeetingId() {
            alert('nice')
            // this.findMeetingId(this.meeting_id)
        },
        alertMe(){
            alert('neww')
        }
    }
}
</script>