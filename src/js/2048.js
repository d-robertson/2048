$(document).ready(function() {
  console.log('ready');

  //Set array to an array of objects with a key of value and number?

  var board = [
    $('#a'),
    $('#b'),
    $('#c'),
    $('#d'),
    $('#e'),
    $('#f'),
    $('#g'),
    $('#h'),
    $('#i'),
    $('#j'),
    $('#k'),
    $('#l'),
    $('#m'),
    $('#n'),
    $('#o'),
    $('#p'),
    ];

/**/  for (var i = 0; i < board.length; i++) {
    console.log(board[i].text());
  }

/**/  board[1].text(2);
  console.log(board[3].text());


  //background color
  function color(){
    for (var c = 0; c < board.length; c++){
      if(board[c].text() === '2') {
        $(board[c]).addClass('two');
        $(board[c]).removeClass('default');
      }
      if(board[c].text() === '4') {
        $(board[c]).addClass('four');
        $(board[c]).removeClass('two');
      }
      if(board[c].text() === '8') {
        $(board[c]).addClass('eight');
        $(board[c]).removeClass('four');
      }
      if(board[c].text() === '16') {
        $(board[c]).addClass('sixteen');
        $(board[c]).removeClass('eight');
      }
      if(board[c].text() === '32') {
        $(board[c]).addClass('thirty-two');
        $(board[c]).removeClass('sixteen');
      }
      if(board[c].text() === '64') {
        $(board[c]).addClass('sixty-four');
        $(board[c]).removeClass('thirty-two');
      }
      if(board[c].text() === '128') {
        $(board[c]).addClass('one-twenty-eight');
        $(board[c]).removeClass('sixty-four');
      }
      if(board[c].text() === '256') {
        $(board[c]).addClass('two-fifty-six');
        $(board[c]).removeClass('one-twenty-eight');
      }
      if(board[c].text() === '512') {
        $(board[c]).addClass('five-twelve');
        $(board[c]).removeClass('two-fifty-six');
      }
      if(board[c].text() === '1024') {
        $(board[c]).addClass('ten-twenty-four');
        $(board[c]).removeClass('five-twelve');
      }
      if(board[c].text() === '2048') {
        $(board[c]).addClass('twenty-fourty-eight');
        $(board[c]).removeClass('ten-twenty-four');
      }
    }
  };

  // Keydown listener
  $(document).keydown(function(e){
    var keyDirection = (e.keyCode);
/**/    console.log(keyDirection);

    //KeyLeft Code
    if(keyDirection === 37){
/**/      console.log(37);
      //checking for empty spaces
      for (var i = 0; i < board.length; i++) {
/**/      console.log(board[i].text());
        if($.trim(board[0].text()).length == 0 &&
           $.trim(board[1].text()).length == 0 &&
           $.trim(board[2].text()).length == 0 &&
           board[3].text().length > 0) {
          board[0].text(board[3].text());
          board[3].text('');
        }
        if($.trim(board[0].text()).length == 0 &&
           $.trim(board[1].text()).length == 0 &&
           board[2].text().length > 0) {
          board[0].text(board[2].text());
          board[2].text('');
        }
        if($.trim(board[0].text()).length == 0 &&
           board[1].text().length > 0) {
          board[0].text(board[1].text());
          board[1].text('');
        }
        color();

      }
    }

    //KeyUp Code
    else if(keyDirection === 38){
      console.log(38);
    }
    //KeyRight Code
    else if(keyDirection === 39){
      console.log(39);
    }
    else if(keyDirection === 40){
      console.log(40);
    }

  });



});
