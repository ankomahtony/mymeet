<template>
    <div class="sticky top-0 z-40">
            <div class="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between">

              <!-- left navbar -->
              <div class="flex">

                <!-- mobile hamburger -->
                <div class="inline-block lg:hidden flex  items-center mr-4 ">
                  <button class="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger" @click="toggleSidebar()">
                    <svg class="h-5 w-5" v-bind:style="{ fill: 'black' }" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                </div>

                <!-- search bar -->
                <div class="relative w-full text-gray-600 flex flex-wrap items-center ">
                  <div class=" mr-2 text-2xl md:w-3/4">
                    <p class="text-blue-800 font-semibold">{{meeting.title}}</p>

                  </div>
                  <div class="md:w-1/4">
                    <select  v-model="meeting_id" class="bg-white h-10 px-5 rounded-lg border text-sm focus:outline-none" @change="funMeetingId()">
                      <!-- <template> -->
                        <option v-for="meeting in meetings" :key="meeting.id" :meeting="meeting" :value="meeting.id" >{{meeting.title}}</option>
                      <!-- </template> -->
                    </select>
                  </div>
                </div>
              </div>

              <!-- right navbar -->
              <div class="flex items-center relative">
                <img src="https://a7sas.net/wp-content/uploads/2019/07/4060.jpeg" class="w-12 h-12 rounded-full shadow-lg" @click="dropDownOpen = !dropDownOpen">
              </div>

            </div>

            <!-- dropdown menu -->
            <div class="absolute bg-gray-100 border border-t-0 shadow-xl text-gray-700 rounded-b-lg w-48 bottom-10 right-0 mr-6" :class="dropDownOpen ? '' : 'hidden'">
                <a href="#" class="block px-4 py-2 hover:bg-gray-200">{{user.name}}</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-200">Settings</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-200" @click.prevent="logout">Logout</a>
            </div>
            <!-- dropdown menu end -->

    </div>
</template>

<script>
  import { mapState , mapGetters, mapActions } from 'vuex'
  // import axios from 'axios'
// import DashMeeting from '@/components/MeetingOption.vue'

  export default {
      name: 'Navbar',
      components:{
          // DashMeeting
      },
      computed: {
          ...mapState(['sideBarOpen']),
          ...mapGetters({
              authenticated:'auth/authenticated',
              user: 'auth/user',
              meetings: 'meetings/meetings',
              meeting: 'meetings/meeting',
             })
      },
      data() {
          return {
              dropDownOpen: false,
              meeting_id: 0,
          }
      },
      methods: {
        ...mapActions({
          logoutAction:'auth/logout',
          getMeetings: 'meetings/getMeetings',
          findMeeting:'meetings/getMeeting',
          findMeetingId:'meetings/funMeetingId'
        }),
        async logout() {
          this.logoutAction()
          this.$router.replace({ name: 'login' })
        },
        toggleSidebar() {
            this.$store.dispatch('toggleSidebar')
        },
        async funMeetingId() {
          // alert(this.meeting_id)
            this.findMeetingId(this.meeting_id)
            this.findMeeting(this.meeting_id)
        },
        // async funMeeting(){
        //     let response = await axios.get('/api/meetings/'+this.meeting_id)
        //     this.meeting = response.data
        // }
        // changeId(){
        //   alert(this.meeting_id)
        // }
      },
      mounted () {
          this.getMeetings()
      }
  }
</script>