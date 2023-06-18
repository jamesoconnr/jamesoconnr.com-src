<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
let pushed = ref(false)
const drop = () => {
  pushed.value = !pushed.value
}
const HideDrop = () => {
  pushed.value = false
}

if (window.innerWidth < 500) {
  document.addEventListener('DOMContentLoaded', function() {
  const subHeading = document.getElementById('subHeading')
  subHeading.innerHTML = ''
  })}
</script>

<template>

<main class="app-main-grid">
  <div class="vertical-nav">
    <div class="name-container">
      <h1><RouterLink to="/">james<br>oconnr<h1 class="blinking-cursor">_</h1></RouterLink></h1>
      <span id="subHeading">vue.js web desinger</span>
    </div>
    <h2><RouterLink to="/about">about</RouterLink></h2>
    <h2><RouterLink to="/contact">contact</RouterLink></h2>
    <h2><RouterLink to="/blog">blog</RouterLink></h2>
    <div>
    <h2 @click="drop()" class="samples-dropdown">samples<svg fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 386.257 386.257" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="0,96.879 193.129,289.379 386.257,96.879 "></polygon> </g></svg></h2>
    <div class="dropdown-options" v-if="pushed">
      <h2 @click="HideDrop()"><RouterLink to="/magazine">magazine</RouterLink></h2>
      <h2 @click="HideDrop()"><RouterLink to="/panopticon">panopticon</RouterLink></h2>
    </div>
    </div>
  </div>
  <div id="routerView" class="router-view-container">
    <RouterView/>
  </div>
</main>

</template>

<style scoped>
@import url(./assets/app.css);
</style>
