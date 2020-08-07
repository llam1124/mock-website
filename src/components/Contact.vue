<template>
    <div id="contact" style="margin-bottom: 20px;">
        <h1> Contact Us </h1>
        <div id="contact_content">
            <v-col id="contact_info">
                <p><v-icon> mdi-phone</v-icon> Phone: 410-919-9662</p>
                <p><v-icon> mdi-email</v-icon> Email: example@gmail.com </p>
                <p><v-icon> mdi-map-marker</v-icon> Location: Some Far Far Away Place </p>
            </v-col>
            <div id="contact_form">
                <p style="padding-top: 10px;"> Want to learn more about Nissint? Do you have a comment or suggestion?</p>
                <p>We would love to hear from you!</p>
                <v-form ref="form"  align="right">
                    <v-col>
                        <v-text-field 
                            v-model="name" 
                            label="name"
                            prepend-icon="mdi-account" 
                            required> </v-text-field>
                        <v-text-field 
                            v-model="email" 
                            label="email" 
                            prepend-icon="mdi-email"
                            required></v-text-field>
                        <v-textarea 
                            v-model="message" 
                            label="message" 
                            outlined ></v-textarea>
                    </v-col>
                    <v-btn dark>Submit</v-btn>
                </v-form>
            </div> 
        </div> 
    </div>
</template>

<script>
export default {
    name: "Contact",
    data: () => ({
        name: '',
        email: '',
        message: '',
    })
}
</script>

<style scoped>
    h1 {
        font-weight: 300;
        padding: 40px 0 20px 60px; /* top right bottom left*/
    }
    p {
        margin: 20px 0px 20px 0px; /* top right bottom left*/
        font-size: 20px;
        color: #888;
    }
    #contact_content {
        display: flex;
        flex-wrap: wrap;
    }
    #contact_form {
       width: 50%;
       margin-right: 40px;
    }

    #contact_info {
        width: 50%;
        flex-direction: column;
        
        margin-left: 40px;
    }

    #image_block {
        height: 200px;
    }
    @media screen and (max-width: 600px){
        #contact_content {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
        }
        #contact_form {
            margin-left: 40px;
            width: 80%;
        }

        #contact_info {
            flex-direction: column;
            margin-top: 20px;   
        }
    }
</style>