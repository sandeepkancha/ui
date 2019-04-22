// Click Event
$('#green-btn').click(function() {
    $(this).removeClass('btn-success').addClass('btn-danger');
});

// DBL CLick
$('#red-btn').dblclick(function() {
    $(this).removeClass('btn-danger').addClass('btn-success');
});

// Toggle Button
let count = 0;
$('#blue-btn').click(function() {
    if(count % 2 === 0){
        $(this).removeClass('btn-primary').addClass('btn-warning');
        count++;
    }
    else{
        $(this).removeClass('btn-warning').addClass('btn-primary');
        count++;
    }
});

// JQuery Likes App
let likes = 0;
let dislikes = 0;
let total = 0;
$('#likes-btn').click(function() {
    likes++;
    total++;
    $('#likes').text(likes);
    $('#total').text(total);
});
$('#dislikes-btn').click(function() {
    dislikes++;
    total++;
    $('#dislikes').text(dislikes);
    $('#total').text(total);
});
