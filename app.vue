<template>
  <div>
    <div id="newElement" v-motion="'newEl'" :initial="{ x: 0, y: 0 }"></div>
    <TheNav />
    <NuxtPage />
  </div>
</template>


<style>
#newElement {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  color: black;
}

.fade-initial {}

.fade-leave-active {
  transition: all 0.4s;
  transition-timing-function: ease-in;
}

.fade-enter-active {
  transition: all 0.6s;
  transition-timing-function: ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  opacity: 0;
}
</style>