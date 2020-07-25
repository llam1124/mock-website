<template>
  <div id="home">
    <v-carousel cycle hide-delimiters :show-arrows="false" >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fase-transition"
      >

      </v-carousel-item>
    </v-carousel>
      <Service />
    <About />
    <Contact />
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Service from '@/components/Service.vue';
import Contact from '@/components/Contact.vue';

export default {
    name: "Home",
    components: {
      About,
      Service,
      Contact
    },
    data(){
      return{
        items: [
          {src: require("../assets/view1.jpg")},
          {src: require("../assets/view3.jpg")},
          {src: require("../assets/view4.jpg")},
        ]
      }
    }
}
</script>

<style scoped>
    #home_block {
        padding: 20px;
    }

    h1 {
      text-align: center;
    }
</style>