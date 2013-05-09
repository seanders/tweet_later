$(document).ready(function() {
  $('#tweet_button').on("click", function(e){
    e.preventDefault();
    $.ajax({
      url: '/submit_tweet',
      method: 'post',
      data: {text: $('input[name=status]').val(), time: $('select option:selected').val()}
    }).done(function(data){
      console.log(data);
      var timer = setInterval(function(){
        $.ajax({
          url: '/status/' + data,
          method: 'get'
        }).done(function(stuff){
          if (stuff === "Your tweet worked mofo")
          {clearInterval(timer);}
          console.log(stuff);
          $('input[name=status]').val("");
          $('#tweet_status').text(stuff);
        });
      }, 1000);

    }
    );
  });
});








