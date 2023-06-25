<template>
    <div class="collapsed-header" @click="togglePost()">
        <span>{{ title }}</span>
        <span class="date">{{ date }}</span>
        <span class="dropdown-arrow"><svg fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 386.257 386.257" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="0,96.879 193.129,289.379 386.257,96.879 "></polygon> </g></svg></span>
    </div>
    <div class="content-container" v-if="postVis">
        <div class="" v-html="HTMLcontent"></div> 
    </div>
</template>
<script setup>
import { marked } from 'marked'
import { ref } from 'vue';
const props = defineProps(['title', 'date', 'content'])
const HTMLcontent = marked.parse(props.content)
let postVis = ref(false)
const togglePost = () =>{
    console.log(postVis)
    postVis.value = !postVis.value
}
</script>
<style scoped lang="scss">
.collapsed-header{
    gap: 1em;
    display: flex;
    align-items: baseline;
    border-bottom: 1px solid black;
    .date{
        color: grey;
        font-style: italic;
        font-size: .5em;
    }
    .dropdown-arrow{
        margin-left: auto;
    }
}
.content-container{
    div{
        font-size: .75em;
    }    
}
</style>