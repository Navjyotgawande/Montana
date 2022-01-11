//owl carausal start
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            320:{
                items:1
            },
            768:{
                items:3
            },
            994:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });
      

});
//owl carausal end

//aos start
AOS.init();
//aos end

//navigation start
// $(document).ready(function(){
//     $("#icon").click(function(){
//     $("ul").toggleClass("show");
    
    
    
//     });
    
//     });


var a=1;
$(document).ready(function(){
$("#abt").click(function(){
$("#links").hide();
a=1;
});
$("#hom").click(function(){
    $("#links").hide();
    a=1;
    });
    $("#room").click(function(){
        $("#links").hide();
        a=1;
        });
        $("#cont").click(function(){
            $("#links").hide();
            a=1;
            });  
            $("#feat").click(function(){
                $("#links").hide();
                a=1;
                });  
                $("#fud").click(function(){
                    $("#links").hide();
                    a=1;
                    });   

$("#icon").click(function(){
            $("#links").slideToggle();
// if (a==1){
//          $("#links").animate({"right":"0"});
//          a=2;
// }
// else{
//          $("#links").animate({"right":"-100%"});
// } 
});
});
//navigation




