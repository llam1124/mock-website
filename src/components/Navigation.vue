<template>
<div>
    <v-toolbar app height="100" class="hidden-sm-and-down">
    <v-toolbar-title>Nissint</v-toolbar-title>
    <v-spacer />
        <v-toolbar-items class="visible-md">
         <v-btn depressed text 
          v-for="item in menu"
          :key="item.icon"
          :to="item.link"
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
      
    </v-toolbar>
<v-toolbar app dark color="blue-grey darken-3" class="hidden-sm-and-up">
        <v-toolbar-title>Mobile Menu</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-app-bar-nav-icon dark slot="activator"></v-app-bar-nav-icon>
          <v-card>
            <v-toolbar flat color="blue-grey darken-2">
              <v-toolbar-title>Mobile Menu</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click.native="dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
            </v-toolbar>

            <v-list>
              <v-list-tile
                v-for="(item, index) in menu"
                :key="index"
                to="#"
              >
                <v-list-tile-action>
                  <v-icon v-if="item.icon">{{item.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title :title="item.title">{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-dialog>

      </v-toolbar>
</div>
</template>

<script>
export default {
  name: 'Navigation',

  data() {
    return{
      menu: [
        {icon: 'about', title: 'About'},
        {icon: 'careers', title: 'Openings'},
        {icon: 'contact', title: 'Contact Us'},
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
  
    div {
        color: #257bd7;
        font-size: 20px;
    }
</style>
    