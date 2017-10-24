$("#0, #1, #2, #3, #4, #5, #6, #7, #8, #9, #point")
  .mousedown(function() {
    $(this).removeClass("shadow").addClass("shadow-pushed").addClass("font-pushed");
  })
  .mouseup(function() {
    $(this).addClass("shadow").removeClass("shadow-pushed").removeClass("font-pushed");
  });

$("#divide, #multiply, #plus, #minus")
  .mousedown(function() {
    $(this).removeClass("shadow").addClass("shadow-pushed");
  })
  .mouseup(function() {
    $(this).addClass("shadow").removeClass("shadow-pushed");
  });

$("#equals")
  .mousedown(function() {
    $(this).removeClass("shadow").addClass("equals-pushed");
  })
  .mouseup(function() {
    $(this).addClass("shadow").removeClass("equals-pushed");
  });

$("#clear")
  .mousedown(function() {
    $(this).removeClass("shadow").addClass("shadow-pushed");
  })
  .mouseup(function() {
    $(this).addClass("shadow").removeClass("shadow-pushed");
  });
