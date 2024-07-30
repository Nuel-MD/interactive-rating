$(".rating").click(function() {
    $(this).css("background-color", "white");
    var number = $(this).text();
    
    if ($(this).css("background-color") === "rgb(255, 255, 255)") { // Use rgb value for white
        $(".submit").click(function() {
            $(".Thank").addClass("container");
      $(".second").removeClass("container").addClass("invisible");
      $(".Thank").removeClass("invisible");


      

      $('.caption').html('You selected '+ number + ' out of 5');


    })
    } else {
      $(".Thank").removeClass("container").addClass("invisible");
      $(".second").addClass("container").removeClass("invisible");
    }
    
  });
  