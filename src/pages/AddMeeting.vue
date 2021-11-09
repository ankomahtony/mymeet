<template>
    <div class=" mx-auto">
        <h1 class=" text-4xl text-blue-800">Add New Meeting</h1>
        <form @submit.prevent="store" class="w-full ">
            <h4 class="py-5 font-bold">Meeting Details</h4>

            <div class="flex flex-wrap mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Title
                    </label>
                    <input v-model="inputs.title" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="title" type="text" placeholder="Title of the meeting">
                </div>
            </div>
            <div class="flex flex-wrap mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Link
                    </label>
                    <input v-model="inputs.link" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="link" type="text" placeholder="The Link">
                </div>
            </div>
            <div class="flex flex-wrap mb-6">
                <div class="w-full px-3 md:w-1/3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Start Time
                    </label>
                    <input v-model="inputs.start_time" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="start-time" type="time">
                </div>
                <div class="w-full px-3 md:w-1/3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        End Time
                    </label>
                    <input v-model="inputs.end_time" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="end-time" type="time">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Occurence
                    </label>
                    <div class="relative">
                        <select v-model="inputs.occurrence" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="occurrence">
                            <option>-- Select --</option>
                            <option>One Time</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap mb-6">
                <div class="w-full px-3 md:w-1/3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Start Date
                    </label>
                    <input v-model="inputs.start_date" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="start-date" type="date">
                </div>
                <div class="w-full px-3 md:w-1/3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        End Date
                    </label>
                    <input v-model="inputs.end_date" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="end-date" type="date">
                </div>
                <div class="w-full px-3 md:w-1/3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Cost for Participation
                    </label>
                    <input v-model="inputs.cost" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="cost" type="number" step=".01">
                </div>
            </div>

            <p> Name, Email and Mobile numbers will be required automatically for any payable meeting.</p> 
            <p class="text-red-700"> You can untick them if the meeting is free and does not require any sending of message or text.</p>   
            <div class="flex mb-5">
                <div class="w-full md:w-1/3 px-3 md:pt-10">
                    <label class="md:w-2/3 block text-gray-700 font-bold">
                    <input class="mr-2 leading-tight" type="checkbox" v-model="inputs.name_required">
                    <span class="text-xs font-bold">
                        Name
                    </span>
                    </label>
                </div>
                <div class="w-full md:w-1/3 px-3 md:pt-10">
                    <label class="md:w-2/3 block text-gray-700 font-bold">
                    <input class="mr-2 leading-tight" type="checkbox" v-model="inputs.phone_required">
                    <span class="text-xs font-bold">
                        Phone Number
                    </span>
                    </label>
                </div>
                <div class="w-full md:w-1/3 px-3 md:pt-10">
                    <label class="md:w-2/3 block text-gray-700 font-bold">
                    <input class="mr-2 leading-tight" type="checkbox" v-model="inputs.email_required">
                    <span class="text-xs font-bold">
                        Email Address
                    </span>
                    </label>
                </div>

            </div>
            <h4 class="py-5 font-bold">Add Fields</h4>       

            <hr>
            <div id="fields">

                <div class="flex flex-wrap mb-2"  v-for="(input, k) in inputs.field_inputs" :key="k">
                    <div class="w-full md:w-1/3 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Field Name
                        </label>
                        <input v-model="input.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name">
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            Type of Field
                        </label>
                        <div class="relative">
                            <select v-model="input.type" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option readonly>-- Select --</option>
                                <option value="text">Text </option>
                                <option value="number">Integer </option>
                                <option value="textarea">Address</option>
                                <option value="number">Real Number</option>
                                <option value="password">Password</option>
                                <option value="date">Date</option>
                                <option value="text">Currency</option>
                                <option value="select">Select Option</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>

                            </div>

                        <div v-if="input.type=='select'" class="w-full">
                            <input v-model="input.selections" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-options" type="text" placeholder="Enter List of Item Here">
                            <p class="text-xs text-red-800">eg. option A, option B</p>
                        </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 md:pt-5">
                        <label class="md:w-2/3 block text-gray-700 font-bold">
                        <input class="mr-2 leading-tight" type="checkbox" v-model="input.required">
                        <span class="text-xs font-bold">
                            Required
                        </span>
                        </label>
                    </div>

                    <button class="font-medium text-red-500 underline hover:text-blue-700 mb-2 mr-5"  @click.prevent="remove(k)" v-show="k || ( !k && inputs.field_inputs.length > 1)">- Remove Field</button>
                    <br>
                    <button class="font-medium text-green-500 underline hover:text-blue-700 mb-2"  @click.prevent="add(k)" v-show="k == inputs.field_inputs.length-1">+ Add More</button>

                </div>
            </div>


            <br>
            <button type="submit" class="bg-blue-800 text-white px-4 py-3 mt-5 leading-none rounded-lg font-medium" >Create Meeting</button>
        </form>

    </div>
</template>



<script>
import axios from 'axios'
export default {
  data () {
    return {
      inputs: {
        title: '',
        link: '',
        cost: '',
        start_time: '',
        end_time: '',
        occurrence: '',
        start_date: '',
        end_date: '',
        name_required: 1,
        email_required: 1,
        phone_required: 1,
        field_inputs:[{
            name: '',
            type: '',
            required: '',
            selections:''
        }]
      },
        processing:false
    }
  },

  methods: {
    add () {
      this.inputs.field_inputs.push({
        name: '',
        type: '',
        required:'',
        selections:'',
      })
    },

    remove (index) {
      this.inputs.field_inputs.splice(index, 1)
    },
    async store(){
        this.processing = true
        await axios.post('/api/meetings',this.inputs).then(response=>{
            this.$router.replace({ name: 'DashboardMeetings' })
            console.log(response);
        }).catch(({response:{data}})=>{
            alert(data.message)
        }).finally(()=>{
            this.processing = false
        })
    }
    
  }
}
</script>

