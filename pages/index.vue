<script setup lang="ts">
import { useMotions, useMotionProperties } from '@vueuse/motion';

var posx = 0;
var posy = 0;

definePageMeta({
    pageTransition: {
        name: 'fade',
        mode: 'out-in'
    }
})

function clicked(el) {
    const clickedElement = el.target;

    const rect = clickedElement.getBoundingClientRect();

    var clonedElement = clickedElement.cloneNode(true);
    clonedElement.id = "clonedElement";
    clonedElement.style.margin = "0px";

    var newElement = document.getElementById("newElement");
    if (newElement) {
        newElement.innerHTML = '';
        //newElement.style.left = rect.left + "px";
        // newElement.style.top = rect.top + "px";
        // newElement.style.transform = "translate(" + rect.left + "px, " + rect.top + "px";
        newElement.appendChild(clonedElement);
        clickedElement.style.visibility = "hidden";

        const { newEl } = useMotions();
        newEl.apply({
            x: rect.left,
            y: rect.top,
            transition: {
                type: 'keyframes',
                duration: 0,
            }
        });

    }
}


</script>

<template>
    <div>
        <h3>Home</h3>

        <NuxtLink href="/work/1">
            <a @click="clicked">
                <h1>Project 1</h1>
            </a>
        </NuxtLink>
        <NuxtLink href="/work/2">
            <a @click="clicked">
                <h1>Project 2</h1>
            </a>
        </NuxtLink>
        <NuxtLink href="/work/3">
            <a @click="clicked">
                <h1>Project 3</h1>
            </a>
        </NuxtLink>

    </div>
</template>

<style scoped>
/* #work2.fade-leave-to {
    opacity: 0;
    transform: translate(200px, 0px);
} */
</style>