$(document).ready(function(){
    $(".lang-flag, .dropdown-arrow").click(function(){
      $(".language-dropdown").toggleClass("open");
    });
    $("ul.lang-list li").click(function(){
      $("ul.lang-list li").removeClass("selected");
      $(this).addClass("selected");
      if($(this).hasClass('lang-en')){
        $(".language-dropdown").find(".lang-flag").addClass("lang-en").removeClass("lang-es").removeClass("lang-pt");
        $("#lang_selected").html("<p>EN</p>")
      }else if($(this).hasClass('lang-pt')){
        $(".language-dropdown").find(".lang-flag").addClass("lang-pt").removeClass("lang-es").removeClass("lang-en");
      $("#lang_selected").html("<p>PT</p>")
      }else{
        $(".language-dropdown").find(".lang-flag").addClass("lang-es").removeClass("lang-en").removeClass("lang-pt");
        $("#lang_selected").html("<p>ES</p>")
      }
      $(".language-dropdown").removeClass("open");
    });
  })