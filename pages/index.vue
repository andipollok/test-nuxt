<script setup lang="ts">
import { useMotion, useMotions, useMotionProperties } from '@vueuse/motion';

var posx = 0;
var posy = 0;

definePageMeta({
    pageTransition: {
        name: 'fade',
        mode: 'out-in'
    }
})

function clicked(el: MouseEvent) {
    const clickedElement = el.target as HTMLElement;
    if (!clickedElement) return;

    // get the position of the clicked element
    const rect = clickedElement.getBoundingClientRect();

    // clone the element
    var clonedElement = clickedElement.cloneNode(true) as HTMLElement;
    clonedElement.id = "clonedElement";
    document.body.appendChild(clonedElement);
    // hide the original (clicked) element
    clickedElement.style.visibility = "hidden";

    // animate element to new position
    //    const target = ref<HTMLElement>()

    const motionInstance = useMotion(clonedElement, {
        initial: {
            x: rect.left,
            y: rect.top
        },
        enter: {
            y: 50,
            transition: {
                delay: 100,
                type: 'spring',
                stiffness: 500,
                damping: 50,
                mass: 1,
            }
        }
    });

    // const { newEl } = useMotions();
    // newEl.apply({
    //     x: rect.left,
    //     y: rect.top,
    //     transition: {
    //         type: 'keyframes',
    //         duration: 0,
    //     }
    // });

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

#clonedElement {
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    z-index: 1000;
    color: black;
}
</style>