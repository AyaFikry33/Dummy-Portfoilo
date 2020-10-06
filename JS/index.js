$( function() {
  $(".job-data").tabs();

  $('.job-data >ul li ').click( function() {
     $(this).addClass('active').siblings().removeClass('active');
  }); 
})