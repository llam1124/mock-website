<template>
    <div id="career">
        <div id="img-box" >
            <v-img src="../assets/view7.jpg" center height="300">
                <div id="img-content"> {{ text }} </div>
            </v-img>
        </div>
    <div class="benefits">
        <v-row>
            <v-col>
                <v-row  v-for="index in column" :key="index" align="center" justify="center">
                    <v-card v-for="item in itemInEachRow(index)" :key="item.text" flat tile height="100" width="400" class="ma-3 pa-3" color="#f8f8f8">
                        <v-icon large>{{ item.icon }} </v-icon>
                        <h3>
                            {{ item.text }}
                        </h3>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </div>
        <div id="search-box">
                <v-text-field 
                    v-model="search" 
                    append-icon="mdi-magnify" 
                    label="Search" 
                    outlined
                    class="shrink 1 ma-2">
                </v-text-field>
                <v-text-field 
                    v-model="location" 
                    append-icon="mdi-map-marker" 
                    label="Location" 
                    outlined
                    class="shrink 2 ma-2">
                </v-text-field>
        </div>
        <div id="job-results">
            <v-expansion-panels>
                <v-expansion-panel v-for="item in openings" :key="item.title" focusable>
                    <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-card flat>
                            <v-card-text>
                                <p> Location: {{ item.location }} </p>
                                <p> {{ item.description }} </p>
                            </v-card-text>
                            <v-card-actions >
                                <v-btn text color="blue darken-3">Apply</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </div>
</template>

<script>


export default {
    name: "Career",

    data(){
      return{
        column: 3,
        text: "Join Our Team",
        search: '',
        location: '',
        openings: [
            { 
                title: 'Junior Web Developer', 
                description: 'something to enter in here', 
                location:'Fort Meade, MD',
                job:[]
            },
            { title: 'Cloud Developer', description: 'something to enter in here', location:'Hanover, MD'},
            { title: 'Reverse Engineer', description: 'something to enter in here', location:'Hanover, MD'},
            { title: 'Business Manager', description: 'something to enter in here', location:'Columbia, MD'},
            { title: 'System Administrator', description: 'something to enter in here', location:'Hanover, MD'},
            { title: 'System Developer', description: 'something to enter in here', location:'Hanover, MD'},
            { title: 'DevOps Developer', description: 'something to enter in here', location:'Annapolis, MD'},
        ],
        benefits: [
            { text: "Company Contributes 10% to 401K", icon:"mdi-piggy-bank"},
            { text: "CareFirst BluePreferred PPO Silver Health Plan with the option of HSA and/or FSA", icon:"mdi-medical-bag"},
            { text: "Training Benefit of up to $5,250 per year", icon:"mdi-school"},
            { text: "One-Time Hardware and/or Software Stipend of up to $2,500", icon:"mdi-laptop"},
            { text: "Short-Term and Long-Term Disability", icon:"mdi-human-wheelchair"},
            { text: "Life Insurance & ADD", icon:"mdi-hand-heart"}
        ]
      }
    },
    computed: {
        rowCreate: function(){
            return Math.ceil(this.benefits.length / this.column);
        }
    },
    methods: {
        itemInEachRow: function(index){
            return this.benefits.slice((index - 1) * this.column, index * this.column);
        }
    }
}
</script>

<style scoped>
    h3 {
        font-weight: 300;
    }

    #career {
        height: 100%;
        margin-bottom: 30px;
    }
    #img-box{
        position: relative;
    }

    #img-content {
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(0, 0, 0); /* Fallback color */
        background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
        color: white;
        width: 100%; /* Full width */
        height: 100%;        
    }

    #job-results{
        padding-left: 80px;
        padding-right: 80px;
    }

    #search-box {
        margin-top: 10px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .benefits {
        background-color: #f8f8f8;
        padding-top: 60px;
        padding-bottom: 50px;
    }

    .v-expansion-panel-header{
        font-size: 20px;
        min-height: 60px;
        color: cornflowerblue;
    }
    @media screen and (max-width: 600px){
        #job-results{
            padding-left: 40px;
            padding-right: 40px;
        }
    }
</style>