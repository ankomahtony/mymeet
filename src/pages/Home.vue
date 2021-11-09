<template>
    <div id="home">

            <!-- breadcrumb -->
            <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
              <ol class="list-none p-0 inline-flex">
                <li class="flex items-center text-blue-500">
                  <a href="#" class="text-gray-700">Home</a>
                  <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
                </li>
                <li class="flex items-center">
                  <a href="#" class="text-gray-600">Dashboard</a>
                </li>
              </ol>
            </nav>
            <!-- breadcrumb end -->

            <div class="lg:flex justify-between items-center mb-6" >
              <input disabled class="text-2xl font-semibold mb-2 lg:mb-0 w-full" v-model="greetings">
              <a v-if="meetings.length" :href="link_url" @click.prevent="copyURL()" target="_blank" rel="noopener noreferrer" ref="mylink" class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow">
                  Copy Link
              </a>
            </div>

            <div class="flex flex-wrap -mx-3 mb-20">

              <router-link :to="{name:'DashboardMeetings'}" class="w-1/2 xl:w-1/4 px-3 ">
                <div class="w-full bg-white bg-yellow-100 border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
                  <svg class="w-16 h-16 mr-4 fill-current" viewBox="0 0 20 20">
                    <path d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
                  </svg>

                  <div class="text-gray-700">
                    <p class="font-semibold text-3xl">{{meetings.length}}</p>
                    <p>Pending Meetings</p>
                  </div>

                </div>
              </router-link>

              <div class="w-1/2 xl:w-1/4 px-3">
                <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>

                  <div class="text-gray-700">
                    <p class="font-semibold text-3xl">{{responses.length}}</p>
                    <p>Participants</p>
                  </div>
                </div>
              </div>

              <div class="w-1/2 xl:w-1/4 px-3">
                <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16  mr-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  <div class="text-gray-700">
                    <p class="font-semibold text-xl">{{starting_time | formatDate}}</p>
                  </div>
                </div>
              </div>

              <div class="w-1/2 xl:w-1/4 px-3">
                <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6">
                  <svg class="w-16 h-16 fill-current mr-4" viewBox="0 0 20 20">
                    <path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path>
                  </svg>

                  <div class="text-gray-700">
                    <p class="font-semibold text-3xl">$1,653</p>
                    <p>Received</p>
                  </div>

                </div>
              </div>

            </div>

            <div class="flex flex-wrap -mx-3">

              <div class="w-full xl:w-1/2 px-3">
                <p class="text-xl font-semibold mb-4">Upcoming Meetings</p>

                <div class="w-full bg-white border rounded-lg p-4 mb-8 xl:mb-0">
                  <!-- <canvas id="buyers-chart" width="600" height="400"></canvas> -->
                  <template>
                    <dash-meeting v-for="meeting in meetings" :key="meeting.id" :meeting="meeting" />
                  </template>
                </div>
              </div>

              <!-- <div class="w-full xl:w-1/2 px-3">
                <p class="text-xl font-semibold mb-4">Recent Reviews</p>

                <div class="w-full bg-white border rounded-lg p-4 mb-8 xl:mb-0">
                  <canvas id="reviews-chart" width="600" height="400"></canvas>
                </div>
              </div> -->

              <div class="w-full xl:w-1/2 px-3">
                <p class="text-xl font-semibold mb-4">Recent Transactions</p>
                <div class="w-full bg-white border rounded-lg p-4">
                  <div class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2 mb-4">
                      <div>
                          <p class="font-semibold text-xl">Trent Murphy</p>
                          <p>Product 1</p>
                      </div>
                      <span class="text-green-500 font-semibold text-lg">$25.00</span>
                  </div>

                  <div class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2 mb-4">
                      <div>
                          <p class="font-semibold text-xl">Joseph Brent</p>
                          <p>Product 34</p>
                      </div>
                      <span class="text-red-500 font-semibold text-lg">$74.99</span>
                  </div>

                  <div class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2 mb-4">
                      <div>
                          <p class="font-semibold text-xl">Jacob Bator</p>
                          <p>Product 23</p>
                      </div>
                      <span class="text-green-500 font-semibold text-lg">$14.95</span>
                  </div>

                  <div class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2">
                      <div>
                          <p class="font-semibold text-xl">Alex Mason</p>
                          <p>Product 66</p>
                      </div>
                      <span class="text-green-500 font-semibold text-lg">$44.99</span>
                  </div>
                </div>
              </div>

            </div>

    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import DashMeeting from '@/components/DashMeeting.vue'
// import axios from 'axios'
// import moment from 'moment';

export default {
    name: 'DashboardHome',
    components:{
        DashMeeting
    },
    data() {
        return {
          greetings:'Hello, Dear!',

        }
    },
    computed: {
        ...mapGetters({
            meetings: 'meetings/meetings',
            responses: 'meetings/responses',
            meeting: 'meetings/meeting',
            starting_time: 'meetings/meeting_start_date',
            meeting_id:'meetings/meeting_id',
            authenticated:'auth/authenticated', user: 'auth/user'
        })
    }, 
    methods: {
        ...mapActions({
            getMeetings: 'meetings/getMeetings',
            getMeeting: 'meetings/getMeeting'
        }),

        copyURL() {
          var Url = this.$refs.mylink;
          Url.innerHTML = 'http://localhost:8080/form/'+this.meeting.uuid;
          console.log(Url.innerHTML)
          // Url.select();
          navigator.clipboard.writeText(Url.innerHTML).then(
            function(){
              alert('copied');
            }
          );
        },
        changeGreeting(){
           var today = new Date();
           const time = today.getHours();
          //  this.greetings = time;
           if(time > 16){
             this.greetings = "Good Evening 🌝, "+ this.user.name +'!' 
           }else if(time > 12){
             this.greetings = "Good Afternoon 🌞, "+ this.user.name +'!'
           }else if(time > 5){
             this.greetings = "Good Morning 🌼, "+ this.user.name +'!'
           }
        }
        
    },
    mounted () {
        this.getMeetings()
        this.getMeeting(this.meeting_id)
        this.changeGreeting()
    }
}
</script>