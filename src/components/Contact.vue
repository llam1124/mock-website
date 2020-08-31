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
                <v-form ref="form">
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
                    <!--CAPTCHA HERE-->
                    <div class="captcha">
                        <vue-recaptcha
                            ref="recaptcha"
                            @expired="onCaptchaExpired"
                            sitekey="6Ldq28UZAAAAAKcYtg2X9NNnDrdkSm9NVpLqIwKB" 
                            :loadRecaptchaScript="true"
                        >
                        </vue-recaptcha>
                        <v-btn class="mt-4" dark>Submit</v-btn>
                    </div>
                </v-form>
            </div> 
        </div> 
    </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
export default {
    name: "Contact",
    components: {
        'vue-recaptcha': VueRecaptcha
    },
    data: () => ({
        name: '',
        email: '',
        message: '',
    }),
    methods: {
        submit: function () {
            // this.status = "submitting";
            this.$refs.recaptcha.execute();
        },
        /*
        onCaptchaVerified: function (recaptchaToken) {
            const self = this;
            self.status = "submitting";
            self.$refs.recaptcha.reset();
            axios.post("https://vue-recaptcha-demo.herokuapp.com/signup", {
                email: self.email,
                password: self.password,
                recaptchaToken: recaptchaToken
            }).then((response) => {
                self.sucessfulServerResponse = response.data.message;
            }).catch((err) => {
                self.serverError = getErrorMessage(err);


                //helper to get a displayable message to the user
                function getErrorMessage(err) {
                let responseBody;
                responseBody = err.response;
                if (!responseBody) {
                    responseBody = err;
                }
                else {
                    responseBody = err.response.data || responseBody;
                }
                return responseBody.message || JSON.stringify(responseBody);
                }

            }).then(() => {
                self.status = "";
            });


        },
         */
        onCaptchaExpired: function () {
            this.$refs.recaptcha.reset();
        }
    }
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
    .captcha {
        margin-left: 15px;
        margin-bottom: 10px;
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
            width: 100%;
            flex-direction: column;
            margin-top: 20px;   
        }
    }
</style>