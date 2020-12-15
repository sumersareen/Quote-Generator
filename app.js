$(window).keypress(function(e) {
    if (e.which === 32) {
      $("#quote").addClass("reset");
      $("#quote").removeClass("executed");
      $("#writer").toggleClass("fade");

      setTimeout(function(){
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://type.fit/api/quotes",
            "method": "GET"
          }
          
          $.ajax(settings).done(function (response) {
            const data = JSON.parse(response);
            console.log(data);
            var quote = data[Math.floor(Math.random() * 499)];
            $("#quote").html(quote.text);
            $("#writer").html(quote.author);
            $("#quote").addClass("executed");
            $("#quote").removeClass("reset");
    $       ("#writer").toggleClass("fade");
          });
          
      }, 1000);
    }
});