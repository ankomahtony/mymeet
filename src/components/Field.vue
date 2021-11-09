<template>
    <div class="flex -mx-3">
        <input type="number" :value="field.id" hidden>
        <div class="w-full px-3 mb-5">
            <label class="text-xs font-semibold px-1 ">{{field.name}} </label><span v-if="field.required" class="text-red-400 font-bold">*</span> 
            <div class="flex" v-if="field.type == 'select'">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                    <select name="" v-model="answer.resp" @change="changeAnswer()"  id="" class="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 bg-white" :required="field.required">
                        <option v-for="option in field.selections.split(',')" :key="option" :option="option" >{{option}}</option>
                    </select>
            </div>
            <div class="flex" v-else>
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                    <input v-model="answer.resp" @focus="changeAnswer()" :type="field.type"  class="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" :placeholder="field.name" autocomplete="off">
                    <!-- <button @click="changeAnswer()">display</button> -->
            </div>
            <!-- {{answer}} -->
        </div>
        
    </div>
    
</template>


<script>
export default {
    props:{
        field:{
            required:true,
            type: Object
        },
    },
    data(){
        return { answer: {resp:'', id:this.field.id}}
    },
    methods:{
        changeAnswer(){
            this.$emit('changeAnswer', this.answer)
        },
    }
}
</script>