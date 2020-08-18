<template>
<div>
    <!-- For Desktop View -->
    <v-app-bar app flat class="hidden-sm-and-down" height="90">
    <img class="mr-3" :src="require('../assets/logo-without-name.png')" height="50"/>
    <v-toolbar-title><a href="/">Nissint</a></v-toolbar-title>
    <v-spacer />
        <v-toolbar-items>
          <v-btn depressed text link
          v-for="item in menu"
          :key="item.id"
        >
            <router-link :to="item.path" >{{ item.title }}</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <!-- For Mobile View -->

    <v-app-bar app flat class="hidden-md-and-up" height="70">
        <a href="/" ><img class="mr-3" :src="require('../assets/logo-without-name.png')" height="40"></a>
        <v-spacer />
        <v-menu offset-y close-on-content-click tile max-width="100%">
            <template v-slot:activator="{ on, attrs }">
                <v-app-bar-nav-icon v-on="on" v-bind="attrs"></v-app-bar-nav-icon>
            </template>
            <v-list color="grey darken-3">
                <v-list-item
                v-for="(item, index) in menu"
                :key="index"
                >
                    <router-link :to="item.path" style="color: white;">{{ item.title }}</router-link>
                </v-list-item>
            </v-list>
        </v-menu>
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
        {id: 'service', title: 'Services', path: '/#service'},
        {id: 'about', title: 'About Us', path: '/#about'},
        {id: 'career', title: 'Careers', path: 'career'},
        {id: 'contact', title: 'Contact', path: '/#contact'},
      ]
    }
  },
  mounted() {
      
  },
  methods: {
        isSection: function(path) {
            return (path.includes("#"));
        },
  }
}
</script>


<style>
    a {
        font-size: 16px;
        font-family: 'Open Sans';
    }
    a:link {
        text-decoration: none;
    }
    a:hover {
        text-decoration: none;
    }

    .v-menu__content {
        top: 50px;
        left: 0;
        width: 100%;
    }
    .v-toolbar__title a {
        font-size: 20px;
        font-family: 'Open Sans';
    }

</style>
    


    