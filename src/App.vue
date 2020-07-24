<template>
  <v-app>
    <Navigation />
    <v-main>
      <Home/>
      <Service />
      <About/>
      <Contact />
    </v-main>
   <Footer />
  </v-app>
</template>

<script>
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Home,
    Service,
    About,
    Contact,
    Navigation,
    Footer
  }
};
</script>

<style>

  html body {
    font-family: 'Open Sans';
  }

</style>
