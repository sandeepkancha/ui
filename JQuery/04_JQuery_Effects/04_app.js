// Hide , Show
$('#btn-1').click(function() {
    if($(this).text() === 'HIDE'){
        $(this).text('SHOW');
        $('#card-1').hide(500);
    }
    else{
        $(this).text('HIDE');
        $('#card-1').show(500);
    }
});

// Toggle
$('#btn-2').click(function() {
    $('#card-2').toggle(500);
    ($(this).text() === 'HIDE') ? $(this).text('SHOW') : $(this).text('HIDE');
});

// FadeIn , FadeOut
$('#btn-3').click(function() {
    if($(this).text() === 'FADEOUT'){
        $(this).text('FADEIN');
        $('#card-3').fadeOut(500);
    }
    else{
        $(this).text('FADEOUT');
        $('#card-3').fadeIn(500);
    }
});


// FadeToggle
$('#btn-4').click(function() {
    $('#card-4').fadeToggle(500);
    ($(this).text() === 'FADEOUT') ? $(this).text('FADEIN') : $(this).text('FADEOUT');
});


// SlideUp , SlideDown
$('#btn-5').click(function() {
    if($(this).text() === 'SLIDEUP'){
        $(this).text('SLIDEDOWN');
        $('#card-5').slideUp(500);
    }
    else{
        $(this).text('SLIDEUP');
        $('#card-5').slideDown(500);
    }
});

// SlideToggle
$('#btn-6').click(function() {
    $('#card-6').slideToggle(500);
    ($(this).text() === 'SLIDEUP') ? $(this).text('SLIDEDOWN') : $(this).text('SLIDEUP');
});
