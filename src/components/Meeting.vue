<template>
     <tr>
        <td class="px-6 py-4 whitespace">
        <div class="flex items-center">
            
            <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">
                {{meeting.title}}
            </div>
            <div class="text-sm text-gray-500">
                {{meeting.link}}
            </div>
            </div>
        </div>
        </td>
        <td class="px-6 py-4">
        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {{meeting.cost}}
        </span>
        </td>
        <td class="text-sm text-gray-500">
            <div class="text-sm text-gray-900">{{meeting.start_time}}-</div>
            <div class="text-sm text-gray-500">{{meeting.end_time}}</div>
        </td>
        <td class="text-sm text-gray-500">
            <div class="text-sm text-gray-900">{{meeting.start_time}}-</div>
            <div class="text-sm text-gray-500">{{meeting.end_time}}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <router-link :to="{name:'ViewMeeting',params:{uuid:meeting.uuid}}" class="text-indigo-600 hover:text-indigo-900">view</router-link>
        </td>
    </tr>
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