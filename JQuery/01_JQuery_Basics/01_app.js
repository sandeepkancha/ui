// Button click
$('#red-btn').click(function() {
    let theText = $(this).text();
    if(theText === 'HIDE'){
        $(this).text('SHOW');
    }
    else{
        $(this).text('HIDE');
    }
    $('#red-card').toggle(1000);
});