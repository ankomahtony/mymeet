<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table v-if="infos.length" class="min-w-full divide-y divide-gray-200 table-auto">
          <thead class="bg-gray-50">
            <tr>
              <th v-for="field in fields" :key="field.id" :field="field"  scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {{field}}
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200 p-4 w-full">
              <tr v-for="info in infos" :key="info.id" :info="info">
                <td v-for="field in fields" :key="field.id" :field="field"  class="text-gray-500">
                  <div class=" text-gray-900 ml-4">{{info[field]}}</div>
                </td>
              </tr>
          </tbody>
        </table>
        <p v-else> No Registered Participants Yet</p>
      </div>
    </div>
  </div>
</div>

</template>


<script>
// import DashMeeting from '@/components/DashMeeting.vue'
import axios from 'axios'
// import moment from 'moment';

export default {
    name: 'ViewMeeting',
    components:{
    },
    data() {
        return {
          infos:null,
          fields:null,
        }
    },
  mounted () {
    let uuid = this.$route.params.uuid
    axios.get('/api/responses/'+uuid)
      .then(response => (
        this.infos = response.data.data,
        this.fields = response.data.fields 
        ))
      .catch(()=>{
            console.log('error kyaw')
        }).finally(()=>{
            this.processing = false
        })
  },
}
</script>