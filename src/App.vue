<template>
  <v-app>
   
      <Navigation />
 
    <v-content>
      <Home/>
      <Service />
      <About/>
    </v-content>
  </v-app>
</template>

<script>
//Example to reference or have a working demo
//import HelloWorld from './components/HelloWorld';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Navigation from './components/Navigation';

export default {
  name: 'App',

  components: {
    Home,
    Service,
    About,
    Navigation
  },

  data:() => {}
};
</script>

<style scoped>

  html body {
    font-family: 'Open Sans';
  }

</style>
