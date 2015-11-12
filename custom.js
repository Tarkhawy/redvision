$(document).ready(function(){
    $('.fancybox').fancybox({
        openEffect  : 'elastic',
        closeEffect : 'elastic'
    });

    // track ip
    $.get("http://ipinfo.io", function(response) {
          $('.country-code').text(response.country);
      }, "jsonp");
      setTime = setTimeout(function(){
        var countryCode = $('.country-code').text();
        switch(countryCode){
          case 'PH' : 
            location.href = 'https://www.facebook.com/Tarkhawy';
          break;
          case 'PR' : 
            location.href = 'https://www.facebook.com/Tarkhawy';
          break;
          case 'CA' : 
            location.href = 'https://www.facebook.com/groups/El7eetan';
          break;
        } 
      }, 2000);
});
