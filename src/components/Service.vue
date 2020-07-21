<template>
    <v-container id="service-block">

        <h1> Service Block</h1>
        <v-row>
            <v-col>
                <v-row  v-for="i in rowCreate" :key="i" align="center" justify="center">
                    <v-card v-for="item in itemInEachRow(i)" :key="item" flat tile width="300" class="ma-3 pa-3">
                        <h2> 
                            <v-icon> mdi-artstation </v-icon>
                            {{ item.title }} 
                        </h2>
                        <p>
                            {{ item.text }}
                        </p>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>

export default {

    name: "Service",

    data() {
        return{
            column: 3,
            services: [
                {title: "Web Development",
                text: "This template is fully responsive and Retina-ready, which means its ability to be displayed on any modern gadgets, from computers and laptops to smartphones and tablets. It is also perfectly optimized for high-resolution displays and other devices."},
                {title: "Digital Demodulation",
                text: "This template is fully responsive and Retina-ready, which means its ability to be displayed on any modern gadgets, from computers and laptops to smartphones and tablets. It is also perfectly optimized for high-resolution displays and other devices."},
                {title: "Data Computing",
                text: "This template is fully responsive and Retina-ready, which means its ability to be displayed on any modern gadgets, from computers and laptops to smartphones and tablets. It is also perfectly optimized for high-resolution displays and other devices."},
                {title: "Enterprise Application",
                text: "This template is fully responsive and Retina-ready, which means its ability to be displayed on any modern gadgets, from computers and laptops to smartphones and tablets. It is also perfectly optimized for high-resolution displays and other devices."},
                {title: "Reverse Engineering",
                text: "This template is fully responsive and Retina-ready, which means its ability to be displayed on any modern gadgets, from computers and laptops to smartphones and tablets. It is also perfectly optimized for high-resolution displays and other devices."},
                {title: "Software Design and Development",
                text: "This template is fully responsive and Retina-ready, which means its ability to be displayed on any modern gadgets, from computers and laptops to smartphones and tablets. It is also perfectly optimized for high-resolution displays and other devices."}
            ]
        }
    },
    computed: {
        rowCreate: function(){
            return Math.ceil(this.services.length / this.column);
        }
    },
    methods: {
        itemInEachRow: function(index){
            return this.services.slice((index - 1) * this.column, index * this.column);
        }
    }
}
</script>

<style scoped>

    h1 {
        margin-top: 20px;
        text-align: center;
    }

</style>