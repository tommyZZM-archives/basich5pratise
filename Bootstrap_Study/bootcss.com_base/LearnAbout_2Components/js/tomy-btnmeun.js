$(function(){
    var dropmeun = [
        $(".dropdown"),
        $(".dropup")
    ];

    $(dropmeun).each(function (){
        $(this).children(".dropdown-toggle").click(function(){
            var chicked = $(this).parent();
            $(dropmeun).each(function(){$(this).not(chicked).removeClass("open");});
            chicked.toggleClass("open");
        });
    });

    $("a.dropdown-toggle").click(function(event){
        event.preventDefault();
    });
});