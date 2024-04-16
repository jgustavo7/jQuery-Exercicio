$(document).ready(function(){

    $('#input').change(function(){
        var input = $(this).val();
        $('ul').append('<li>' + input + ` <i class="fa-check"></i> <i class="fa-trash"></i> </li>`);
        $(this).val();
    });
    $('ul').on('click','.fa-trash',function(){
        $(this).parent('li').fadeOut(200);
    });

    $('ul').on('click','.fa-check',function(){
        $(this).parent('li').toggleClass(200);
    });
});