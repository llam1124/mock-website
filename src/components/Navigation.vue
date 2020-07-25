<template>
<div>
    <!-- For Desktop View -->
    <v-app-bar app fixed class="hidden-sm-and-down" height="70">
    <img class="mr-3" :src="require('../assets/logo-without-name.png')" height="50"/>
    <v-toolbar-title><a href="#home-block">Nissint</a></v-toolbar-title>
    <v-spacer />
        <v-toolbar-items>
         <v-btn depressed text link
          v-for="item in menu"
          :key="item.id"
        >
            <router-link :to="item.path">
            {{ item.title }}
            </router-link>
            </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <!-- For Mobile View -->

    <v-app-bar app fixed class="hidden-md-and-up">
        <img class="mr-3" :src="require('../assets/logo-without-name.png')" height="50"/>
        <v-spacer />
        <!--<v-app-bar-nav-icon dark @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
            <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-app-bar-nav-icon v-on="on" v-bind="attrs"></v-app-bar-nav-icon>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in menu"
                :key="index"
                width="100"
                >
                <router-link :to="{ path: '/' , hash: item.path}">
                {{ item.title }}
                </router-link>
                </v-list-item>
            </v-list>
            </v-menu>

        <!--
        <v-navigation-drawer app clipped bottom v-model="drawer">
            <v-list dense>
                <v-list-item-group v-model="item">
                <v-list-item v-for="(item, i) in menu" :key="i" @click="() => {}" >
                    <v-list-item-title> {{ item.title }} </v-list-item-title>
                </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer> -->
    </v-app-bar>
       
</div>
</template>

<script>
export default {
  name: 'Navigation',

  data() {
    return{
      drawer: false,
      item: 1,
      menu: [
        {id: 'home', title: 'Home', path: '/'},
        {id: 'services', title: 'Services', path: '/#service-block'},
        {id: 'about', title: 'About Us', path: '/#about-block'},
        {id: 'careers', title: 'Careers', path: '/career'},
        {id: 'contact', title: 'Contact', path: '/#contact-block'},
      ]
    }
  },
  mounted() {
      
  },
  computed: {

  }
}
</script>


<style scoped>
    a:link {
        text-decoration: none;
    }
    a:hover {
        text-decoration: none;
    }
    div {
        color: #257bd7;
        font-size: 20px;
    }
</style>
    


    