<template>
    <div id="service">
        <h1> Our Services</h1>
            <v-col>
                <v-row  v-for="index in column" :key="index" align="center" justify="center">
                    <v-card v-for="item in itemInEachRow(index)" :key="item.title" flat tile width="450" class="ma-3 pa-3" color="#f8f8f8">
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
    </div>
</template>

<script>

export default {
    name: "Service",
    data: function(){
        return{
            column: 6,
            services: [
                {
                    title: "Web Development",
                    text: "This template is fully responsive and Retina-ready, " + 
                    "which means its ability to be displayed on any modern gadgets, from computers and " +
                    "laptops to smartphones and tablets. It is also perfectly optimized for high-resolution " +
                    "displays and other devices."
                },
                {
                    title: "Digital Demodulation",
                    text: "This template is fully responsive and Retina-ready, " + 
                    "which means its ability to be displayed on any modern gadgets, from computers and " +
                    "laptops to smartphones and tablets. It is also perfectly optimized for high-resolution " +
                    "displays and other devices."
                },                
                {
                    title: "Data Computing",
                    text: "This template is fully responsive and Retina-ready, " + 
                    "which means its ability to be displayed on any modern gadgets, from computers and " +
                    "laptops to smartphones and tablets. It is also perfectly optimized for high-resolution " +
                    "displays and other devices."
                },                
                {
                    title: "Enterprise Application",
                    text: "This template is fully responsive and Retina-ready, " + 
                    "which means its ability to be displayed on any modern gadgets, from computers and " +
                    "laptops to smartphones and tablets. It is also perfectly optimized for high-resolution " +
                    "displays and other devices."
                },                
                {
                    title: "Reverse Engineering",
                    text: "This template is fully responsive and Retina-ready, " + 
                    "which means its ability to be displayed on any modern gadgets, from computers and " +
                    "laptops to smartphones and tablets. It is also perfectly optimized for high-resolution " +
                    "displays and other devices."
                },
                {
                    title: "Software Design and Development",
                    text: "This template is fully responsive and Retina-ready, " + 
                    "which means its ability to be displayed on any modern gadgets, from computers and " +
                    "laptops to smartphones and tablets. It is also perfectly optimized for high-resolution " +
                    "displays and other devices."
                },            
        ]}
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
        font-weight: 300;
        padding: 40px 0 20px 60px; /* top right bottom left*/
    }

    h2 {   
        font-weight: 300;
    }

    p {
        color: #888;
    }

    #service {
        background-color: #f8f8f8;
    }

</style>