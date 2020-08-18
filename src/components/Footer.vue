<template>
  <v-footer  app absolute height="100">
    <v-col class="text-center" cols="12">
        <v-row align="center" justify="center">
            <a href="https://www.facebook.com/nissinttech" target="_blank">
              <v-icon color='#3B5998'>mdi-facebook</v-icon>
            </a>
            <a href="https://www.linkedin.com/company/nissint-technologies-llc" target="_blank">
              <v-icon color='#0077B5'> mdi-linkedin</v-icon>
            </a>
            <a href="https://twitter.com/nissinttech" target="_blank">
              <v-icon color='#4099FF'> mdi-twitter </v-icon>
            </a>
            <a href="https://www.instagram.com/nissinttech/" target="_blank">
              <v-icon> mdi-instagram </v-icon>
            </a>
            <a href="mailto:managers@nissint.com">
              <v-icon> mdi-email </v-icon>
            </a>
        </v-row>
        <span>
            {{ new Date().getFullYear() }} — <strong>Nissint Technologies, LLC</strong>
        </span>
    </v-col>
  </v-footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>

</style>