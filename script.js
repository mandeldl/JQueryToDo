$(document).ready(function(){
    //Function 1 - Put stuff in input, click button, it gets added as div with class item to bottom of the div with class list.
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<li class="item">'+toAdd+'</li>');
        });
    // Function 2 - Whenever you click on something with a class of item, remove this.
    $(document).on('click','.item', function(){
        $(this).remove();
        });

    $('.list').sortable();
});