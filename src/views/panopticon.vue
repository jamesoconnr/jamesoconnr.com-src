<script setup>
import { ref } from 'vue';
import { Grid2 } from '../assets/GridImages';
const GridImages = Grid2
let CurrentImg = ref( 
{
    src: 'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    alt: 'Michael Angelo\'s painting on top of the Palace of Versailles',
    h2: 'Versailles',
    p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus reprehenderit ipsam, sequi aliquid quod dolorum quisquam tempore aspernatur soluta. Illum alias odit delectus cum placeat inventore expedita a accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolores quaerat laboriosam exercitationem quod hic officia reiciendis error fuga esse tempora itaque eos, nulla vitae dolore ipsa ea labore quis?'
});
const SetCurrentImg = (ImgNum) => {
    CurrentImg.value = GridImages[ImgNum]
}
const scrollUp = () => {
    
}
</script>
<template>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <body>
       <main class="p-main-grid">
            <div class="p-title-block bottom right"><h1>jamesoconnr</h1></div>
            <div class="right bottom two-col">
                <!-- <span @click="scrollUp" class="material-symbols-sharp">expand_less</span> -->
            </div>
            <div class="bottom"></div>
            <div class="p-focus three-col two-row right bottom">
                <div class="p-focus-flex">
                    <img :src=CurrentImg.src :alt=CurrentImg.alt >
                    <div class="p-focus-text">
                        <h2>{{ CurrentImg.h2 }}</h2>
                        <p>{{ CurrentImg.p }}</p>
                    </div>
                </div>
            </div>
            <div class="bottom right two-col two-row">
                <swiper
                :loop = true
                >
                    <swiper-slide>
                        <div class="p-content-grid">    
                            <img v-for="img in GridImages" @click="SetCurrentImg(GridImages.indexOf(img))" :src=img.src :alt=img.alt class="p-grid-img focused-img">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="bottom two-row"></div>
            <div class="right three-col"></div>
            <div class="two-col right"></div>
        </main> 
    </body>
</template>
<style src="../assets/panopticon.css" scoped></style>