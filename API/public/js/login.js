window.onload = (event) =>{
    jQuery.validator.addMethod("noSpace", function(value, element) {
        return value.indexOf(" ") < 0 && value != "";
    }, "No space please and don't leave it empty");

    $("#basic-form").validate({
        // Specify validation rules
        rules: {
            fName: {
                required: true,
                minlength: 1,
                noSpace: true
            },

            lName: {
                required: true,
                minlength: 1,
                noSpace: true
            },
            email: {
                required: true,
                email: true,
                noSpace: true
            },
            pwd: {
                required: true,
                minlength: 5,
                noSpace: true
            }
        },
        // Specify validation error messages
        messages: {
            firstname: {
                required: "Please enter your FirstName",
                minlength: "Please enter at least 1 character"
            },
            lastname: {
                required: "Please enter your FirstName",
                minlength: "Please enter at least 1 character"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

    // $("#heading0").click(function(){
    //     $("#collapse0").addClass("show");
    // });
};