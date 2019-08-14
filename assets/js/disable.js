$(function () {
    $("img").on("contextmenu",function(){
        return false;
     }); 
     window.oncontextmenu = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
   };
});