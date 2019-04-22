// SMS App
$('#text-area').keyup(function() {
    $('#char-count').text(100 - $(this).val().length);
});

// Hobbies Selection App
$('#eating').change(function() {
    let eatCard = $('#eat-card');
    (eatCard.hasClass('d-none')) ? eatCard.removeClass('d-none') : eatCard.addClass('d-none');
});

$('#coding').change(function() {
    let codeCard = $('#code-card');
    (codeCard.hasClass('d-none')) ? codeCard.removeClass('d-none') : codeCard.addClass('d-none');
});

$('#sleeping').change(function() {
    let sleepCard = $('#sleep-card');
    (sleepCard.hasClass('d-none')) ? sleepCard.removeClass('d-none') : sleepCard.addClass('d-none');
});
