<script setup>
import { useMotion, useMotions, useMotionProperties } from '@vueuse/motion';


function clicked() {
    console.log("clicked");
    const posx = Math.random() * window.innerWidth;
    const posy = Math.random() * window.innerHeight;
    const { boxmotion, boxmotionmove } = useMotions();
    boxmotionmove.apply({
        x: posx,
        y: posy,
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 50,
            mass: 1,
        }
    });
    boxmotion.apply({
        x: posx,
        y: posy,
        transition: {
            type: 'keyframes',
            duration: 0
        }
    });
}

</script>

<style scoped>
.box {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    color: white;
    background-color: black;
}
</style>

<template>
    <div class="box" v-motion="'boxmotion'" :initial="{ x: 0, y: 100 }">Here</div>
    <div class="box" v-motion="'boxmotionmove'" :initial="{ x: 0, y: 100 }">There</div>

    <button @click="clicked()">Random</button>
</template>