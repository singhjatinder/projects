<template>
    <main>
        <section class="col">
            <h1>{{heading}}</h1>
        </section>
        <section class="row">
            <aside>
                <img v-bind:src="contactImg.link" v-bind:alt="contactImg.alternate">
            </aside>
            <section class="contactform col">
                <h2>{{subHeading}}</h2>
                <form name="sendEmailForm" id="sendEmailForm" method="post" v-bind:action="emailURL" novalidate="true" @submit="validate">
                    <span class="error" id="errorFirstName">First Name requires atleast 2 characters and Alpha characters ONLY</span>
                    <label>
                        First Name (required):
                        <input :class="[ fNameValid ? 'valid': 'invalid']" v-model="fName" type="text" name="firstName" id="firstName" placeholder="First Name" required autofocus>
                    </label>
                    <span class="error" id="errorLastName">Last Name requires atleast 2 characters and Alpha characters ONLY</span>
                    <label>
                        Last Name (required):
                        <input :class="[ lNameValid ? 'valid': 'invalid']" v-model="lName" type="text" name="lastName" id="lastName" placeholder="Last Name" required>
                    </label>
                    <span class="error" id="errorEmail">A Valid email address is required</span>
                    <label>
                        Email (required):
                        <input :class="[ emailValid ? 'valid': 'invalid']" v-model="email" type="text" name="email" id="email" placeholder="Email" required>
                    </label>
                    <span class="error" id="errorSubject">Subject requires more than 2 characters and less than 15 characters</span>
                    <label>
                        Subject (required):
                        <input :class="[ subjectValid ? 'valid': 'invalid']" v-model="subject" type="text" name="subject" id="subject" placeholder="Subject" required>
                    </label>
                    <span class="error" id="errorMessagevbn">Message requires more than 2 characters and less than 250 characters</span>
                    <label>
                        Message (required): <br>
                        <textarea :class="[ messageValid ? 'valid': 'invalid']" v-model="message" name="message" id="message" placeholder="Enter your message HERE" cols="50" rows="10" required></textarea>
                    </label>
                    <label>
                        <input class="btn" id="btn" type="submit" name="submit" value="Submit">
                    </label>
                </form>
            </section>
        </section>
    </main>
</template>

<script>

    export default {
        data () {
            return {
                fName:'',
                fNameValid: false,
                lName:'',
                lNameValid: false,
                email:'',
                emailValid: false,
                subject:'',
                subjectValid: false,
                message:'',
                messageValid: false,
                lettersOnly: /^[a-zA-Z\s]+$/,
                correctEmailFormat: /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/,
                heading:'Contact ME',
                subHeading: 'Send an Email',
                emailURL: 'https://jaysingh.info/sendemail.php',
                contactImg: {link: require('../assets/images/jaysingh_contact.jpg'),alternate: 'Jay Singh Friends - Contact'},
                footer: '2020 Jay Singh',
                print: 'Printed from jaysingh.net'
            };
        },
        watch: {
            fName(value){
                this.fname = value;
                this.validatefName(value);
            },
            lName(value){
                this.lName = value;
                this.validatelName(value);
            },
            email(value){
                this.email = value;
                this.validateEmail(value);
            },
            subject(value){
                this.subject = value;
                this.validateSubject(value);
            },
            message(value){
                this.message = value;
                this.validateMessage(value);
            }
        },
        methods:{
            validatefName: function(value){
                this.fNameValid = value.length > 1 && (this.lettersOnly.test(value));
            },
            validatelName: function(value){
                this.lNameValid = value.length > 1 && (this.lettersOnly.test(value));
            },
            validateEmail: function(value){
                this.emailValid = this.correctEmailFormat.test(value);
            },
            validateSubject: function(value){
                this.subjectValid = value.length > 2 && value.length <= 15;
            },
            validateMessage: function(value){
                this.messageValid = value.length > 2 && value.length <= 250;
            },

            validate: function (e) {
                document.getElementById("errorFirstName").classList.add("error");
                document.getElementById("errorFirstName").classList.remove("error_show");

                document.getElementById("errorLastName").classList.add("error");
                document.getElementById("errorLastName").classList.remove("error_show");

                document.getElementById("errorEmail").classList.add("error");
                document.getElementById("errorEmail").classList.remove("error_show");

                document.getElementById("errorSubject").classList.add("error");
                document.getElementById("errorSubject").classList.remove("error_show");

                document.getElementById("errorMessage").classList.add("error");
                document.getElementById("errorMessage").classList.remove("error_show");

                //get all the input to be verified
                let firstName = document.getElementById("firstName");
                let lastName = document.getElementById("lastName");
                let email = document.getElementById("email");
                let subject = document.getElementById("subject");
                let message = document.getElementById("message");

                let numOfErrors = 0;
                let lettersOnly = /^[a-zA-Z\s]+$/;
                let correctEmailFormat = /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/;

                if(firstName.value.length < 2 || !(lettersOnly.test(firstName.value))){
                    console.log("Entered Invalid First Name:"+firstName.value);
                    document.getElementById("errorFirstName").classList.remove("error");
                    document.getElementById("errorFirstName").classList.add("error_show");
                    //Clearing value so the user can re-enter the value right away
                    firstName.value="";
                    // firstName.focus();
                    numOfErrors++;
                }
                if(lastName.value.length < 2 || !(lettersOnly.test(lastName.value))) {
                    console.log("Entered Invalid last Name:"+lastName.value);
                    document.getElementById("errorLastName").classList.remove("error");
                    document.getElementById("errorLastName").classList.add("error_show");
                    //Clearing value so the user can re-enter the value right away
                    lastName.value = "";
                    // lastName.focus();
                    numOfErrors++;
                }
                if(!(correctEmailFormat.test(email.value))) {
                    console.log("Entered Invalid email:"+email.value);
                    document.getElementById("errorEmail").classList.remove("error");
                    document.getElementById("errorEmail").classList.add("error_show");
                    //Clearing value so the user can re-enter the value right away
                    email.value = "";
                    // email.focus();
                    numOfErrors++;
                }
                if(subject.value.length < 2 || subject.value.length > 15) {
                    console.log("Entered Invalid subject:"+subject.value);
                    document.getElementById("errorSubject").classList.remove("error");
                    document.getElementById("errorSubject").classList.add("error_show");
                    //Clearing value so the user can re-enter the value right away
                    subject.value = "";
                    // subject.focus();
                    numOfErrors++;
                }
                if(message.value.length < 2 || subject.value.length > 250) {
                    console.log("Entered Invalid message:"+message.value);
                    document.getElementById("errorMessage").classList.remove("error");
                    document.getElementById("errorMessage").classList.add("error_show");
                    //Clearing value so the user can re-enter the value right away
                    message.value = "";
                    // message.focus();
                    numOfErrors++;
                }
                if(numOfErrors>0) {
                    e.preventDefault();
                } else{
                    console.log(new Date()+ "Email has been submitted");
                    return true;
                }
            }
        }
    }
</script>

<style src="../css/main.css"></style>
