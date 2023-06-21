<script setup>
let transform = 'transform 1s ease-in-out'
let rotation = 0
let validPage = true
/*terrible solution here, but it works*/
console.log()

if (window.innerWidth > 800) {
    window.addEventListener("load", (event) => {
        console.log(document.querySelector("#bg"));
    });
    document.addEventListener("mousemove", (e) => {
        rotateBG(e, document.querySelector("#bg"))
    })
    const rotateBG = (event, element) => {
        let x = event.clientX
        let y = event.clientY
        let middleX = (window.innerWidth * 1.1)/ 2
        let middleY = window.innerHeight / 2
        let offsetX = (x- middleX)
        let offsetY = (y- middleY)
        let angle = Math.atan2(offsetY, offsetX)
        let rotation = angle * (180 / Math.PI)
        element.style.setProperty('--svg-rotate', rotation + 'deg')
}}
const rotateBGClick = () => {
    if (window.innerWidth < 800){
    let element = document.querySelector("#bg")
    rotation = rotation + 180
    element.style.setProperty('--svg-rotate', rotation + 'deg')
    element.style.setProperty('--svg-transition', transform)
    }
}
const routerView = document.getElementById('routerView')
routerView.addEventListener('click', rotateBGClick)
</script>

<template>
<div class="svg-bg" id="bg">
    <slot/>
</div>
</template>
<style>
.svg-bg{
    position: absolute;
    z-index: 0;
    transform: rotate(var(--svg-rotate));
    transition: var(--svg-transition);
}
.svg-bg svg g path{
    fill: #e9f2ff;
}
</style>