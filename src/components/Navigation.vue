<template>
<div>
    <!-- For Desktop View -->
    <v-toolbar app class="hidden-sm-and-down">
    <img class="mr-3" :src="require('../assets/logo-without-name.png')" height="40"/>
    <v-toolbar-title><a href="/mock-website">Nissint</a></v-toolbar-title>
    <v-spacer />
        <v-toolbar-items>
         <v-btn depressed text 
          v-for="item in menu"
          :key="item.icon"
          :to="item.link"
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- For Mobile View -->

    <v-toolbar app dark color="blue-grey darken-3" class="hidden-md-and-up">
        <img class="mr-3" :src="require('../assets/logo-without-name.png')" height="40"/>
        <v-spacer />
        <!--<v-app-bar-nav-icon dark @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
            <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-app-bar-nav-icon dark v-on="on" v-bind="attrs"></v-app-bar-nav-icon>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in menu"
                :key="index"
                width="100"
                >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
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
    </v-toolbar>
       
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
        {icon: 'home', title: 'Home'},
        {icon: 'services', title: 'Services'},
        {icon: 'about', title: 'About Us'},
        {icon: 'careers', title: 'Careers'},
        {icon: 'contact', title: 'Contact'},
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
    


    