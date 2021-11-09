<template>
   <div>
     Right Side Bar
   </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Sidebar',
    computed: {
        ...mapState(['sideBarOpen'])
    }
}

</script>

