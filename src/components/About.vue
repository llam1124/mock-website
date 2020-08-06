<template>
  <div id="about">
    <v-img src="../assets/view5.jpg" height="300"> </v-img>
  
    <h1> About Us </h1>
    <v-container>
  
      <h2> Women-owned Small Business </h2>
      <p id="text"> {{ about }}  </p>
      <p id="text"> {{ history }} </p>

    </v-container>
  </div>
</template>

<script>
export default {
    name: "About",
    data: () => ({
      about:"Nissint became a reality in 2006. But, didn't start recruiting until 2012. " +
        "Now, we have over 20 employees working across 12 different defense contracts and many more contracts and opportunites " +
        "in the horizon. ",
      history: "The company was created by Nissa and John Ellinwood who, after long careers in the Intelligence Community " +
        "decided it was time to take their skills and experience and build a company that realized their vision of an ideal place to work" +
        "That vision was simple, to surround themselves with the best developers in their fields, and to work on the most challenging and rewarding projects around.",
    })
}
</script>

<style scoped>
  h1 {
    padding: 10px;
    margin: 40px 0px 20px 60px;
  }

  #text {
    font-size: 20px;
  }
</style>