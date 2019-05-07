$(document).ready(function() {
    $('#login-form').submit((event) => {
        $('.help-block').remove();
        var formData = {
            'username': $('input[name=username]').val(),
            'password': $('input[name=password').val()
        };
        $.ajax({
            type : 'POST',
            url : '/login',
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done((data) => {
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

    $('#change-name').submit((event) => {
        $('.help-block').remove();
        var formData = {
            'name': $('input[name=name]').val(),
        }; 
        $.ajax({
            type : 'PUT',
            url : '/edit-name',
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done((data) => {
            // console.log(data);
            if(data.status == 400){
                $('#email-group').addClass('has-error');
                $('#email-group').append('<p></p>');
                $('#email-group').append('<div style="color: red" class="help-block"><b>' + data.message + '</b></div>');
            } else {
                window.location = '/profile';
            }
    })
    event.preventDefault();
})

$('#change-quote').submit((event) => {
    $('.help-block').remove();
    var formData = {
        'quote': $('input[name=quote]').val(),
    }; 
    $.ajax({
        type : 'PUT',
        url : '/edit-quote',
        data: formData,
        dataType: 'json',
        encode: true
    })
    .done((data) => {
        // console.log(data);
        if(data.status == 400){
            $('#email-group').addClass('has-error');
            $('#email-group').append('<p></p>');
            $('#email-group').append('<div style="color: red" class="help-block"><b>' + data.message + '</b></div>');
        } else {
            window.location = '/profile';
        }
    })
    event.preventDefault();
})

$('#query-contact').submit((event) => {
    $('.help-block').remove();
    var formData = {
        'email': $('input[name=email]').val(),
        'title': $('input[name=title]').val(),
        'query': $('textarea[name=query]').val()
    };
    if(formData.email.length == 0 || formData.title.lenght == 0 || formData.query.lenght == 0) {
        $('#email-group').addClass('has-error');
        $('#email-group').append('<p></p>');
        $('#email-group').append('<div style="color: red" class="help-block"><b>Node of the above fileds can be blank</b></div>');
    } else {
        console.log("Hello world");
        $.ajax({
            type : 'POST',
            url : '/add-query',
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done((data) => {
            if(data.status == 400){
                $('#email-group').addClass('has-error');
                $('#email-group').append('<p></p>');
                $('#email-group').append('<div style="color: red" class="help-block"><b>' + data.message + '</b></div>');
            } else {
                window.location = '/';
            }
        });
    }
    event.preventDefault();
    
});

$('#change-mobile').submit((event) => {
    $('.help-block').remove();
    var formData = {
        'mobile': $('input[name=mobile]').val(),
        'repeat': $('input[name=repeat-mobile]').val()
    };
    if(formData.mobile != formData.repeat) {
        $('#email-group').addClass('has-error');
        $('#email-group').append('<p></p>');
        $('#email-group').append('<div style="color: red" class="help-block"><b> Both values should be same</b></div>');
    }

        else if(isNaN(formData.mobile)) {
        $('#email-group').addClass('has-error');
        $('#email-group').append('<p></p>');
        $('#email-group').append('<div style="color: red" class="help-block"><b>Onlu Numbers allowed allowed </b></div>');
    } else {

        $.ajax({
            type : 'PUT',
            url : '/edit-mail',
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done((data) => {
            // console.log(data);
            if(data.status == 400){
                $('#email-group').addClass('has-error');
                $('#email-group').append('<p></p>');
                $('#email-group').append('<div style="color: red" class="help-block"><b>' + data.message + '</b></div>');
            } else {
                window.location = '/profile';
            }
        });
    }
    event.preventDefault();
})

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
        url : '/signup',
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

$('#show-phone').on('click', function () {
    $('.centr-phone').show();
    $(this).hide();
    event.preventDefault();
})

$('#cloose-phone').on('click', function () {
    $('.centr-phone').hide();
    $('#show-phone').show();
    event.preventDefault();
})

$('#show-name').on('click', function () {
    $('.centr-name').show();
    $(this).hide();
    event.preventDefault();
})

$('#cloose-name').on('click', function () {
    $('.centr-name').hide();
    $('#show-name').show();
    event.preventDefault();
})

$('#show-quote').on('click', function () {
    $('.centr-quote').show();
    $(this).hide();
    event.preventDefault();
})

$('#cloose-quote').on('click', function () {
    $('.centr-quote').hide();
    $('#show-quote').show();
    event.preventDefault();
})

})