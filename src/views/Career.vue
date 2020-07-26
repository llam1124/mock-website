<template>
    <div>
        <div id="img_box" >
            <v-img src="../assets/view7.jpg" center height="300">
                <v-row id="img_content" align="center"> {{ text }} </v-row>
            </v-img>
        </div>
        <v-container>
            <v-expansion-panels>
                <v-expansion-panel v-for="item in openings" :key="item.title">
                    <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        {{ item.description }}
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
    </div>
</template>

<script>


export default {
    name: "Career",

    data(){
      return{
        text: "All of our work falls under three main areas: Digital Signal Processing and Collection Systems, " + 
            "Distributed Computing and Machine Learning, and Cyber Capabilities Development" +
            "No matter which job you choose here at Nissint, you get industry leading benefits. " +
            "We pride ourselves in our flexibility. You can pick and choose your benefits." +
            "We do provide a basic package, but you can change and alter any or all of the components to your liking.",
        openings: [
            { title: 'Junior Web Developer', description: 'something to enter in here', location:'Hanover, MD'},
            { title: 'Cloud Developer', description: 'something to enter in here', location:'Hanover, MD'},
            { title: 'Reverse Engineer', description: 'something to enter in here', location:'Hanover, MD'},
            { title: 'Business Manager', description: 'something to enter in here', location:'Hanover, MD'},
            { title: 'System Administrator', description: 'something to enter in here', location:'Hanover, MD'},
        ]
      }
    }
}
</script>

<style scoped>
    #img_box{
        position: relative;
    }

    #img_content {
        font-size: 20px;
        position: absolute; /* Position the background text */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgb(0, 0, 0); /* Fallback color */
        background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
        color: white;
        width: 100%; /* Full width */
        height: 100%;
        padding: 20px; /* Some padding */
    }


</style>