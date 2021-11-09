<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table v-if="meetings.length" class="min-w-full divide-y divide-gray-200 table-auto">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <template >
              <meeting v-for="meeting in meetings" :key="meeting.id" :meeting="meeting" />
            </template>
            <!-- More people... -->
          </tbody>
        </table>
        <p v-else > No Meeting</p>
        <!-- {{meetings}} -->
      </div>
    </div>
  </div>
</div>

</template>


<script>
import {mapActions, mapGetters} from 'vuex'
import Meeting from '@/components/Meeting.vue'

export default {
    components:{
        Meeting
    },
    computed: {
        ...mapGetters({
            meetings: 'meetings/meetings'
        })
    }, 
    methods: {
        ...mapActions({
            getMeetings: 'meetings/getMeetings'
        })
    },
    mounted () {
        this.getMeetings()
    }
}
</script>