<template>
    <div id="contact-block">
        <h1> Contact Us </h1>
        <v-container>
            <v-row>
            <v-col id="contact_info">
                <p><v-icon> mdi-phone</v-icon> Phone: 410-919-9662</p>
                <p><v-icon> mdi-email</v-icon> Email: example@gmail.com </p>
                <p><v-icon> mdi-map-marker</v-icon> Location: Some Far Far Away Place </p>
            </v-col>
            <v-col id="contact_form">
                <v-form ref="form"  align="right">
                    <p> Want to learn more about Nissint? Do you have a comment or suggestion?</p>
                    <p>We would love to hear from you!</p>
                    <div style="width: 60%">
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
                    </div>
                    <v-btn>Submit</v-btn>
                </v-form>
            </v-col>
            </v-row>
        </v-container>
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
        margin: 40px 0px 20px 60px;
    }
    p {
        margin: 20px 0px 20px 0px; /* top right bottom left*/
        font-size: 20px;
    }

    #contact-block {
        margin: 20px;
       
    }

    #contact_form {
        width: 50%;
    }

    #contact_info {
        width: 50%;
        margin-top: 20px;
    }

    #image_block {
        height: 200px;
    }
</style>