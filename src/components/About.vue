<template>
  <div id="about">
    <v-img src="../assets/view5.jpg" height="300"> </v-img>
    <h1> About Us </h1> 
    <h2> Women-owned Small Business </h2>
    <div class="content">
      <h3> {{ about }}  </h3>
      <h3> {{ history }} </h3>
    </div>
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

  h1, h2 {
    font-weight: 300;
    padding: 40px 0 0 60px; /* top right bottom left*/
  }

  h3 {
    font-weight: 300;
    padding: 10px 20px 20px 0; /* top right bottom left*/
  }

  #about {
    background-color: #f8f8f8;
    padding-bottom: 80px;
  }

  .content{
    display: flex;
    flex-wrap: wrap;
    margin-left: 12px;
    margin-right: 12px;
    padding: 40px 0 20px 50px; /* top right bottom left*/
  }
</style>