<template>
  <v-app id="app">
  <Navigation />
  <v-main>
    <router-view />
  </v-main>
  <Footer />
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="scss">
  html body {
    font-family: 'Open Sans';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }
</style>
