// Tag , Class , Id Selector
$('.orange-1').click(function() {
    $(this).css({
        'background-color' : 'orange',
        'color' : 'white',
        'padding' : '10px',
        'box-shadow' : '0 0 10px black'
    });
});

// Attribute Selection for Text Box
$('input[type="text"]').focus(function() {
    $(this).css({
        'background-color':'lightblue'
    });
}).blur(function() {
    $(this).css({
        'background-color':'white'
    });
});

// Attribute Selection of Password
$('input[type="password"]').focus(function() {
    $(this).css({
        'background-color':'lightgreen'
    });
}).blur(function() {
    $(this).css({
        'background-color':'white'
    });
});



