$(document).ready(function() {
  //  Set array to an array of objects with a key of value and number?

  var board = [
    [$('#a'), $('#b'), $('#c'), $('#d')],
    [$('#e'), $('#f'), $('#g'), $('#h')],
    [$('#i'), $('#j'), $('#k'), $('#l')],
    [$('#m'), $('#n'), $('#o'), $('#p')]
  ];

  // set all starting values to ''
  function startingValues() {
    for (var y = 0; y < 4; y++){
      for(var z = 0; z <4; z++){
      board[y][z].text('');
      board[y][z].removeClass('two four eight sixteen thirty-two sixty-four one-twenty-eight two-fifty-six five-twelve ten-twenty-four twenty-fourty-eight');
      board[y][z].addClass('default');
      }
    }
  }

var start1 = Math.floor(Math.random()*16);
var start2 = Math.floor(Math.random()*16);

  function startGame(){
    if(start1 === start2){
      start2 = Math.floor(Math.random()*16);
    }
    if (start1 === 0 || start2 === 0){
      board[0][0].text(2);
      $(board[0][0]).addClass('two');
    }
     if (start1 === 1 || start2 === 1){
      board[0][1].text(2);
      $(board[0][1]).addClass('two');
    }
     if (start1 === 2 || start2 === 2){
      board[0][2].text(2);
      $(board[0][2]).addClass('two');
    }
     if (start1 === 3 || start2 === 3){
      board[0][3].text(2);
      $(board[0][3]).addClass('two');
    }
     if (start1 === 4 || start2 === 4){
      board[1][0].text(2);
      $(board[1][0]).addClass('two');
    }
     if (start1 === 5 || start2 === 5){
      board[1][1].text(2);
      $(board[1][1]).addClass('two');
    }
     if (start1 === 6 || start2 === 6){
      board[1][2].text(2);
      $(board[1][2]).addClass('two');
    }
     if (start1 === 7 || start2 === 7){
      board[1][3].text(2);
      $(board[1][3]).addClass('two');
    }
     if (start1 === 8 || start2 === 8){
      board[2][0].text(2);
      $(board[2][0]).addClass('two');
    }
     if (start1 === 9 || start2 === 9){
      board[2][1].text(2);
      $(board[2][1]).addClass('two');
    }
     if (start1 === 10 || start2 === 10){
      board[2][2].text(2);
      $(board[2][2]).addClass('two');
    }
    if (start1 === 11 || start2 === 11){
      board[2][3].text(2);
      $(board[2][3]).addClass('two');
    }
     if (start1 === 12 || start2 === 12){
      board[3][0].text(2);
      $(board[3][0]).addClass('two');
    }
     if (start1 === 13 || start2 === 13){
      board[3][1].text(2);
      $(board[3][1]).addClass('two');
    }
     if (start1 === 14 || start2 === 14){
      board[3][2].text(2);
      $(board[3][2]).addClass('two');
    }
     if (start1 === 15 || start2 === 15){
      board[3][3].text(2);
      $(board[3][3]).addClass('two');
    }
  }

  startingValues();

  startGame();

  function anotherSquare(){
    do {
      var row = Math.floor(Math.random()*4);
      var col = Math.floor(Math.random()*4);
      console.log(row + " " + col);
    }
    while ($.trim(board[row][col].text()).length > 0);
    board[row][col].text(2);
    $(board[row][col]).removeClass('default');
    $(board[row][col]).addClass('two');
  }

  //  background color
  function color() {
    for (var b = 0; b < 4; b++) {
      for (var c = 0; c < 4; c++) {
        if ($.trim(board[b][c].text()).length === 0) {
          $(board[b][c]).addClass('default');
          $(board[b][c]).removeClass('two four eight sixteen thirty-two sixty-four one-twenty-eight two-fifty-six five-twelve ten-twenty-four twenty-fourty-eight');
        }
        if (board[b][c].text() === '2') {
          $(board[b][c]).addClass('two');
          $(board[b][c]).removeClass('default four eight sixteen thirty-two sixty-four one-twenty-eight two-fifty-six five-twelve ten-twenty-four twenty-fourty-eight');
        }
        if (board[b][c].text() === '4') {
          $(board[b][c]).addClass('four');
          $(board[b][c]).removeClass('default eight sixteen thirty-two sixty-four one-twenty-eight two-fifty-six five-twelve ten-twenty-four twenty-fourty-eight');
        }
        if (board[b][c].text() === '8') {
          $(board[b][c]).addClass('eight');
          $(board[b][c]).removeClass('default four sixteen thirty-two sixty-four one-twenty-eight two-fifty-six five-twelve ten-twenty-four twenty-fourty-eight');
        }
        if (board[b][c].text() === '16') {
          $(board[b][c]).addClass('sixteen');
          $(board[b][c]).removeClass('default four eight thirty-two sixty-four one-twenty-eight two-fifty-six five-twelve ten-twenty-four twenty-fourty-eight');
        }
        if (board[b][c].text() === '32') {
          $(board[b][c]).addClass('thirty-two');
          $(board[b][c]).removeClass('default four eight sixteen sixty-four one-twenty-eight two-fifty-six five-twelve ten-twenty-four twenty-fourty-eight');
        }
        if (board[b][c].text() === '64') {
          $(board[b][c]).addClass('sixty-four');
          $(board[b][c]).removeClass('default four eight sixteen thirty-two one-twenty-eight two-fifty-six five-twelve ten-twenty-four twenty-fourty-eight');
        }
        if (board[b][c].text() === '128') {
          $(board[b][c]).addClass('one-twenty-eight');
          $(board[b][c]).removeClass('default four eight sixteen thirty-two sixty-four two-fifty-six five-twelve ten-twenty-four twenty-fourty-eight');
        }
        if (board[b][c].text() === '256') {
          $(board[b][c]).addClass('two-fifty-six');
          $(board[b][c]).removeClass('default four eight sixteen thirty-two sixty-four one-twenty-eight five-twelve ten-twenty-four twenty-fourty-eight');
        }
        if (board[b][c].text() === '512') {
          $(board[b][c]).addClass('five-twelve');
          $(board[b][c]).removeClass('default four eight sixteen thirty-two sixty-four one-twenty-eight two-fifty-six ten-twenty-four twenty-fourty-eight');
        }
        if (board[b][c].text() === '1024') {
          $(board[b][c]).addClass('ten-twenty-four');
          $(board[b][c]).removeClass('default four eight sixteen thirty-two sixty-four one-twenty-eight two-fifty-six five-twelve twenty-fourty-eight');
        }
        if (board[b][c].text() === '2048') {
          $(board[b][c]).addClass('twenty-fourty-eight');
          $(board[b][c]).removeClass('default four eight sixteen thirty-two sixty-four one-twenty-eight two-fifty-six five-twelve ten-twenty-four');
        }
      }
    }
  }

  // Keydown listener
  $(document).keydown(function(e) {
    if(
      $.trim(board[0][0].text()).length > 0 &&
      $.trim(board[0][1].text()).length > 0 &&
      $.trim(board[0][2].text()).length > 0 &&
      $.trim(board[0][3].text()).length > 0 &&
      $.trim(board[1][0].text()).length > 0 &&
      $.trim(board[1][1].text()).length > 0 &&
      $.trim(board[1][2].text()).length > 0 &&
      $.trim(board[1][3].text()).length > 0 &&
      $.trim(board[2][0].text()).length > 0 &&
      $.trim(board[2][1].text()).length > 0 &&
      $.trim(board[2][2].text()).length > 0 &&
      $.trim(board[2][3].text()).length > 0 &&
      $.trim(board[3][0].text()).length > 0 &&
      $.trim(board[3][1].text()).length > 0 &&
      $.trim(board[3][2].text()).length > 0 &&
      $.trim(board[3][3].text()).length > 0) {
      alert("The game is over!");
    }

    var keyDirection = (e.keyCode);
    // Check for empty spaces
    // KeyLeft Code
    if (keyDirection === 37) {
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          // if value in index 1
          if ($.trim(board[i][1].text()).length > 0 &&
            $.trim(board[i][0].text()).length === 0) {
                board[i][0].text(board[i][1].text());
                board[i][1].text('');
          }
          // if value in index 2
          if ($.trim(board[i][2].text()).length > 0 &&
            $.trim(board[i][1].text()).length === 0) {
              // if value in index 2 and value 0 in index 0 or 1
            if ($.trim(board[i][0].text()).length === 0) {
                board[i][0].text(board[i][2].text());
                board[i][2].text('');
              } else { // if no value in index 1 but yes in 0
                board[i][1].text(board[i][2].text());
                board[i][2].text('');
              }
          }
          // if value in index 3, value 0 in 2
          if ($.trim(board[i][3].text()).length > 0 &&
            $.trim(board[i][2].text()).length === 0) {
              // value in index 3, value 0 in 2 and 1
            if ($.trim(board[i][1].text()).length === 0) {
                // value in index 3, value 0 in 1 2 and 0
                if ($.trim(board[i][0].text()).length === 0) {
                  board[i][0].text(board[i][3].text());
                  board[i][3].text('');
                  // value in 0
                } else {
                  board[i][1].text(board[i][3].text());
                  board[i][3].text('');
                }
              }
            board[i][2].text(board[i][3].text());
            board[i][3].text('');
          }//
          // start of checking side by side numbers
          if (board[i][0].text() === board[i][1].text() && board[i][0].text() !== '') {
            board[i][0].text(board[i][0].text()*2);
            board[i][1].text('');
          }
          if (board[i][1].text() === board[i][2].text() && board[i][1].text() !== '') {
            board[i][1].text(board[i][1].text()*2);
            board[i][2].text('');
          }
          if (board[i][2].text() === board[i][3].text() && board[i][2].text() !== '') {
            board[i][2].text(board[i][2].text()*2);
            board[i][3].text('');
          }

        } // end second for loop
      } //  end first for loop
      color(); //run the color function
      anotherSquare();
    } //  end Keyleft Code

    // KeyUp Code
    else if (keyDirection === 38) {
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          // if value in index 1
          if ($.trim(board[1][j].text()).length > 0 &&
            $.trim(board[0][j].text()).length === 0) {
              board[0][j].text(board[1][j].text());
              board[1][j].text('');
          }
          // if value in index 2
          if ($.trim(board[2][j].text()).length > 0 &&
            $.trim(board[1][j].text()).length === 0) {
              // if value in index 2 and value 0 in index 0 or 1
              if ($.trim(board[0][j].text()).length === 0) {
                board[0][j].text(board[2][j].text());
                board[2][j].text('');
              } else { //if no value in index 1 but yes in 0
                board[1][j].text(board[2][j].text());
                board[2][j].text('');
              }
          }
          // if value in index 3
          if ($.trim(board[3][j].text()).length > 0 &&
            $.trim(board[2][j].text()).length === 0) {
              // value in index 3, value 0 in 2 and 1
              if ($.trim(board[1][j].text()).length === 0) {
                // value in index 3, value 0 in 1 2 and 0
                if ($.trim(board[0][j].text()).length === 0)  {
                  board[0][j].text(board[3][j].text());
                  board[3][j].text('');
                  // value in 0
                }
                else {
                  board[1][j].text(board[3][j].text());
                  board[3][j].text('');
                }
              }
            board[2][j].text(board[3][j].text());
            board[3][j].text('');
          }//
          // start of checking side by side numbers
          if (board[0][j].text() === board[1][j].text() && board[0][j].text() !== '') {
            board[0][j].text(board[0][j].text()*2);
            board[1][j].text('');
          }
          if (board[1][j].text() === board[2][j].text() && board[1][j].text() !== '') {
            board[1][j].text(board[1][j].text()*2);
            board[2][j].text('');
          }
          if (board[2][j].text() === board[3][j].text() && board[2][j].text() !== '') {
            board[2][j].text(board[i][2].text()*2);
            board[3][j].text('');
          }
        } // end second for loop
      } //  end first for loop
      color(); //run the color function
      anotherSquare();
    } //  end KeyUp Code

    // KeyRight Code
    else if (keyDirection === 39){
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if ($.trim(board[i][2].text()).length > 0 &&
            $.trim(board[i][3].text()).length === 0) {
              board[i][3].text(board[i][2].text());
              board[i][2].text('');
          }
          if ($.trim(board[i][1].text()).length > 0 &&
            $.trim(board[i][2].text()).length === 0) {
              if ($.trim(board[i][3].text()).length === 0) {
                board[i][3].text(board[i][1].text());
                board[i][1].text('');
              } else {
                board[i][2].text(board[i][1].text());
                board[i][1].text('');
              }
          }
          if ($.trim(board[i][0].text()).length > 0 &&
            $.trim(board[i][1].text()).length === 0) {
              if ($.trim(board[i][2].text()).length === 0) {
                if ($.trim(board[i][3].text()).length === 0)  {
                  board[i][3].text(board[i][0].text());
                  board[i][0].text('');
                }
                else {
                  board[i][2].text(board[i][0].text());
                  board[i][0].text('');
                }
            }
          board[i][1].text(board[i][0].text());
          board[i][0].text('');
          }
          // start of checking side by side numbers
          if (board[i][3].text() === board[i][2].text() && board[i][3].text() !== '') {
            board[i][3].text(board[i][3].text()*2);
            board[i][2].text('');
          }
          if (board[i][2].text() === board[i][1].text() && board[i][2].text() !== '') {
            board[i][2].text(board[i][2].text()*2);
            board[i][1].text('');
          }
          if (board[i][1].text() === board[i][0].text() && board[i][1].text() !== '') {
            board[i][1].text(board[i][1].text()*2);
            board[i][0].text('');
          }
        } // end second for loop
      } //  end first for loop
      color(); //run the color function
      anotherSquare();
    } //  end KeyRight Code

    // keyDown
    else if (keyDirection === 40){
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if ($.trim(board[2][j].text()).length > 0 &&
            $.trim(board[3][j].text()).length === 0) {
              board[3][j].text(board[2][j].text());
              board[2][j].text('');
          }
          if ($.trim(board[1][j].text()).length > 0 &&
            $.trim(board[2][j].text()).length === 0) {
              if ($.trim(board[3][j].text()).length === 0) {
                board[3][j].text(board[1][j].text());
                board[1][j].text('');
              } else {
                board[2][j].text(board[1][j].text());
                board[1][j].text('');
              }
          }
          if ($.trim(board[0][j].text()).length > 0 &&
            $.trim(board[1][j].text()).length === 0) {
              if ($.trim(board[2][j].text()).length === 0) {
                if ($.trim(board[3][j].text()).length === 0){
                  board[3][j].text(board[0][j].text());
                  board[0][j].text('');
                }
                else {
                  board[2][j].text(board[0][j].text());
                  board[0][j].text('');
                }
              }
            board[1][j].text(board[0][j].text());
            board[0][j].text('');
          }
          // start of checking side by side numbers
          if (board[3][j].text() === board[2][j].text() && board[3][j].text() !== '') {
            board[3][j].text(board[3][j].text()*2);
            board[2][j].text('');
          }
          if (board[2][j].text() === board[1][j].text() && board[2][j].text() !== '') {
            board[2][j].text(board[2][j].text()*2);
            board[1][j].text('');
          }
          if (board[1][j].text() === board[0][j].text() && board[1][j].text() !== '') {
            board[1][j].text(board[1][j].text()*2);
            board[0][j].text('');
          }
        } // end second for loop
      } //  end first for loop
      color(); //run the color function
      anotherSquare();
    } // end of keyDown

  }); // end of click event listener

  $('#reset').click(function(e){
    startingValues();
    startGame();
  });


}); // end of document ready
