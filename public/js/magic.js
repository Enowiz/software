$(document).ready(function() {
    $('#login-form').submit((event) => {
        $('.help-block').remove();
        var formData = {
            'username': $('input[name=username]').val(),
            'password': $('input[name=password').val()
        };
        $.ajax({
            type : 'POST',
            url : '/user/login',
            data: formData,
            dataType: 'json',
            encode: true
        })

        .done((data) => {
            console.log(data);
            if(data.status == 400){
                $('#email-group').addClass('has-error');
                $('#email-group').append('<p></p>');
                $('#email-group').append('<div style="color: red" class="help-block"><b>' + data.message + '</b></div>');
            } else {
                window.location = '/';
            }

        });
        event.preventDefault();

    });
    $('#register-form').submit((event) => {
        $('.help-block').remove();
        var formData = {
            'username': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'phone': $('input[name=phone]').val(),
            'password': $('input[name=password').val()
        };
        $.ajax({
            type : 'POST',
            url : '/user/signup',
            data: formData,
            dataType: 'json',
            encode: true
        })

        .done((data) => {
            console.log(data);
            if(data.status == 400){
                $('#email-group').addClass('has-error');
                $('#email-group').append('<p></p>');
                $('#email-group').append('<div style="color: red" class="help-block"><b>' + data.message + '</b></div>');
            } else {
                window.location = '/login';
            }

        });
        event.preventDefault();

    })
})