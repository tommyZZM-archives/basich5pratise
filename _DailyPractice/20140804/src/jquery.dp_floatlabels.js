/**
 * Created by tommyZZM on 14-8-4.
 */
$(function(){
    var _i=1;
    var labels = $('.pan-flp label');
    labels.each(function(){
        var sop = '<span class="ch">';
        var scl = '</span>';

        $(this).html(sop+$(this).html().split("").join(scl+sop)+scl);

        //$(".ch:contains('')").html('&nbsp;');
    }).click(function(event){
        $('.pan-flp input').trigger('focus');
        event.stopPropagation(event);
    });


    var d;
    var inputs = $('.pan-flp div').find('input');
    inputs.focus(function(event){
        var tm = $(this).outerHeight()/2*(-1)+'px';
        $(this).next().addClass('focussed').children().stop(true).each(function(i){
            d=i*50;
            $(this).delay(d).animate({top:tm},200,'easeOutBack');
        });
        event.stopPropagation(event);
    }).blur(function(event){
        if($(this).val()===""){
            $(this).next().removeClass('focussed').children().stop(true).each(function(i){
                d=i*50;
                $(this).delay(d).animate({top:0},200,'easeOutBack');
            });
        }
        event.stopPropagation();
    });

});


