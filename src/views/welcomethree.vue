<template>
<main class="w-main-flex">
    <h1>Hi, i'm James O'Connor!</h1>
    <h2>This is my personal website, made in VueJS</h2>
    <a href="https://github.com/jamesoconnr"><img src="../assets/github-mark.svg"></a>
    <canvas id="bg" class="animated-bg"/>
</main>

</template>
<script setup>

import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'
import { onMounted, ref } from 'vue';
const scene = new Scene()
const camera = new PerspectiveCamera( 75,  window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 5
scene.add(camera)

onMounted(() => {
    const renderer = new WebGLRenderer({
        canvas: document.querySelector('#bg'),
        antialias: true
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render(scene, camera)
})

</script>
<style src="../assets/welcome.css" scoped></style>