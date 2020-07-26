<template>
  <v-footer  height="100" outlined absolute>
          <v-col
      class="text-center"
      cols="12"
    >
        <v-row align="center" justify="center">
            <v-icon > mdi-facebook </v-icon>
            <v-icon > mdi-linkedin </v-icon>
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