$(document).ready(function() {
  console.log('ready');

  //Set array to an array of objects with a key of value and number?

  var board = [
    [$('#a'), $('#b'), $('#c'), $('#d')],
    [$('#e'), $('#f'), $('#g'), $('#h')],
    [$('#i'), $('#j'), $('#k'), $('#l')],
    [$('#m'), $('#n'), $('#o'), $('#p')],
    ];

// /**/  for (var i = 0; i < 4; i++) {
//         for (var j = 0; j < 4; i++){
//           console.log(board[i][j].text());
//         }
//       }

/**/  board[0][1].text(2);
      board[1][2].text(2);
      board[2][2].text(2);
      board[3][3].text(2);
  console.log(board[0][1].text());


  //background color
  function color(){
    for(var b = 0; b < 4; b++){
    for (var c = 0; c < 4; c++){
      if(board[b][c].text()==='') {
        $(board[b][c]).addClass('default');
        $(board[b][c]).removeClass('two four eight sixteen thirty-two sixty-four one-twenty-eight two-fifty-six five-twelve ten-twenty-four twenty-fourty-eight')
      }
      if(board[b][c].text() === '2') {
        $(board[b][c]).addClass('two');
        $(board[b][c]).removeClass('default');
      }
      if(board[b][c].text() === '4') {
        $(board[b][c]).addClass('four');
        $(board[b][c]).removeClass('two');
      }
      if(board[b][c].text() === '8') {
        $(board[b][c]).addClass('eight');
        $(board[b][c]).removeClass('four');
      }
      if(board[b][c].text() === '16') {
        $(board[b][c]).addClass('sixteen');
        $(board[b][c]).removeClass('eight');
      }
      if(board[b][c].text() === '32') {
        $(board[b][c]).addClass('thirty-two');
        $(board[b][c]).removeClass('sixteen');
      }
      if(board[b][c].text() === '64') {
        $(board[b][c]).addClass('sixty-four');
        $(board[b][c]).removeClass('thirty-two');
      }
      if(board[b][c].text() === '128') {
        $(board[b][c]).addClass('one-twenty-eight');
        $(board[b][c]).removeClass('sixty-four');
      }
      if(board[b][c].text() === '256') {
        $(board[b][c]).addClass('two-fifty-six');
        $(board[b][c]).removeClass('one-twenty-eight');
      }
      if(board[b][c].text() === '512') {
        $(board[b][c]).addClass('five-twelve');
        $(board[b][c]).removeClass('two-fifty-six');
      }
      if(board[b][c].text() === '1024') {
        $(board[b][c]).addClass('ten-twenty-four');
        $(board[b][c]).removeClass('five-twelve');
      }
      if(board[b][c].text() === '2048') {
        $(board[b][c]).addClass('twenty-fourty-eight');
        $(board[b][c]).removeClass('ten-twenty-four');
      }
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
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++){
/**/      console.log(board[i][j].text());
        if($.trim(board[i][0].text()).length == 0 &&
           $.trim(board[i][1].text()).length == 0 &&
           $.trim(board[i][2].text()).length == 0 &&
           board[i][3].text().length > 0) {
          board[i][0].text(board[i][3].text());
          board[i][3].text('');
        }
        if($.trim(board[i][0].text()).length == 0 &&
           $.trim(board[i][1].text()).length == 0 &&
           board[i][2].text().length > 0) {
          board[i][0].text(board[i][2].text());
          board[i][2].text('');
        }
        if($.trim(board[i][0].text()).length == 0 &&
           board[i][1].text().length > 0) {
          board[i][0].text(board[i][1].text());
          board[i][1].text('');
        }
        color();
        }
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
