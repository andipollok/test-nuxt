<template>
  <div>
    <Nav />
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
  </div>
</template>


<style>
.fade-leave-active {
  transition: all 0.2s;
  transition-timing-function: ease-in;
}

.fade-enter-active {
  transition: all 0.2s;
  transition-timing-function: ease-out;
}

.fade-leave-from {}

.fade-leave-to {
  opacity: 0;
  transform: translate(0, 100px);
}

.fade-enter-from {
  opacity: 0;
  transform: translate(0, -20px);
}
</style>