$(document).ready(function() {
  $('#tweet_button').on("click", function(e){
    e.preventDefault();
    $.ajax({
      url: '/submit_tweet',
      method: 'post',
      data: {text: $('input[name=status]').val()}
    }).done(function(data){
      console.log(data);
      var timer = setInterval(function(){
        $.ajax({
          url: '/status/' + data,
          method: 'get'
        }).done(function(stuff){
          clearInterval(timer);
          console.log(stuff);
          $('input[name=status]').val("");
          $('.container').append(stuff);
        });
      }, 1000);

    }
    );
  });
});








