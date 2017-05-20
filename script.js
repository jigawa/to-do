$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();//takes input of the form with the css identifier 'checkListItem' using .val()
        $('.list').append('<div class="item">' + toAdd + '</div>');//appends the input value from the form into the div with class list
        });
    $(document).on('click', '.item', function() {
        $(this).remove();
        });
    });
