<script setup>
const route = useRoute();
const id = parseInt(route.params.id[0]) || 1;
var next = id + 1;
if (next == 4) {
    next = 1;
}
var link = "./" + next;


</script>

<template>
    <div>
        <h1>Project {{ id }}</h1>
        <div>Content {{ id }}</div>
        <NuxtLink :href="link">
            <!-- <div id="nextProject" v-motion="'next'" :initial="initial" :enter="enter" :tapped="tapped"> -->
            <div>
                <h2 class=" nextProject">Project {{ next }}</h2>
            </div>
        </NuxtLink>
    </div>
</template> 


<style scoped></style>