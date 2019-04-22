$.validator.setDefaults( {
    submitHandler: function () {
        alert( "submitted!" );
    }
});

// Custom Validation
$.validator.methods.range = function( value, element ) {
    return /^[a-zA-Z0-9]+$/ .test( value );
};

// Form Submission
$('#register-form').validate({
    rules : {
        firstname : {
            required : true,
            minlength : 5
        },
        lastname : {
            required : true,
            minlength : 5
        },
        username : {
            required : true,
            minlength : 5
        },
        email : {
            required : true,
            email: true
        },
        password : {
            required : true,
            range : true,
            minlength : 5
        },
        c_password : {
            required : true,
            range : true,
            minlength : 5,
            equalTo: "#password"
        },
        terms : {
            required : true
        }
    },
    messages : {
        firstname : {
            required : 'Please Enter the First Name',
            minlength : 'Enter at least 5 letters for First Name'
        },
        lastname : {
            required : 'Please Enter the Last Name',
            minlength : 'Enter at least 5 letters for Last Name'
        },
        username : {
            required : 'Please Enter the User Name',
            minlength : 'Enter at least 5 letters for User Name'
        },
        email : {
            required : 'Please Enter an Email',
            email: 'Enter a Proper Email'
        },
        password : {
            required : 'Please Enter the Password',
            range : 'Special Characters are Not Allowed',
            minlength : 'Enter at least 5 letters for Password'
        },
        c_password : {
            required : 'Please Enter the Confirm Password',
            range : 'Special Characters are Not Allowed',
            minlength : 'Enter at least 5 letters for Confirm Password',
            equalTo: "Both the Passwords are not Matched"
        },
        terms : {
            required : 'Please accept the Terms And Conditions'
        }
    },
    errorPlacement: function ( error, element ) {
        // Add the `invalid-feedback` class to the error element
        error.addClass( "invalid-feedback" );

        if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.next( "label" ) );
        } else {
            error.insertAfter( element );
        }
    },
    highlight: function ( element, errorClass, validClass ) {
        $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
    }
});