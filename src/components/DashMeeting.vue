<template>
  <div class="w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2 mb-4">
        <div>
            <p class="font-semibold text-xl">{{meeting.title}}</p>
            <p>{{meeting.link}}</p>
        </div>
        <span class="text-green-500 font-semibold text-lg">${{meeting.cost}}</span>
    </div>
</template>

<script>
export default {
    props:{
        meeting:{
            required:true,
            type: Object
        }
    }
}
</script>