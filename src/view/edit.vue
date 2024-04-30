<template>
    <div>
        <h1>Ini Halaman Edit</h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// reactive state
const posts = ref([])

// mounted
onMounted(() => {
    // get API from Laravel Backend
    axios.get('http://localhost:8000/api/post')
        .then(response => {
            // assign state posts with response data
            posts.value = response.data.data
        }).catch(error => {
            console.log(error.response.data)
        })
})
</script>


<style lang="scss" scoped>

</style>