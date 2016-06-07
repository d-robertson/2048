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
    for (var y = 0; y < 4; y++) {
      for (var z = 0; z < 4; z++) {
        board[y][z].text('');
        board[y][z].removeClass('stop two four eight sixteen thirty-two sixty-four one-twenty-eight two-fifty-six five-twelve ten-twenty-four twenty-fourty-eight');
        board[y][z].addClass('default');
      }
    }
  }

  function startGame() {
    var a = Math.floor(Math.random() * 4);
    var b = Math.floor(Math.random() * 4);
    var c = Math.floor(Math.random() * 4);
    var d = Math.floor(Math.random() * 4);
    do {
      b = Math.floor(Math.random() * 4);
    }
    while ([a][b] === [c][d]);
    board[a][b].text('2');
    board[a][b].addClass('two');
    board[c][d].text('2');
    board[c][d].addClass('two');
  }


  startingValues();

  startGame();

  function anotherSquare() {
    do {
      var row = Math.floor(Math.random() * 4);
      var col = Math.floor(Math.random() * 4);
    }
    while ($.trim(board[row][col].text()).length > 0);
    board[row][col].text('2');
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
    // remove any 'stop' classes
    for (var i = 0; i < 4; i ++) {
      for (var j = 0; j < 4; j++) {
        $(board[i][j]).removeClass('stop');
      }
    }
    // get key direction
    var keyDirection = (e.keyCode);
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
          if (board[i][0].text() === board[i][1].text()
            && board[i][0].text() !== ''
            && !$(board[i][1]).hasClass('stop')) {
            board[i][0].text(board[i][0].text() * 2);
            board[i][1].text('');
            $(board[i][0]).addClass('stop');
          }
          if (board[i][1].text() === board[i][2].text()
            && board[i][1].text() !== ''
            && !$(board[i][2]).hasClass('stop')) {
            board[i][1].text(board[i][1].text() * 2);
            board[i][2].text('');
            $(board[i][1]).addClass('stop');
          }
          if (board[i][2].text() === board[i][3].text()
            && board[i][2].text() !== ''
            && !$(board[i][3]).hasClass('stop')) {
            board[i][2].text(board[i][2].text() * 2);
            board[i][3].text('');
            $(board[i][2]).addClass('stop');
          }
        } // end second for loop
      } //  end first for loop
      // run the color function
      color();
      // get a new 2 square
      anotherSquare();
      //  end Keyleft Code Begin KeyUp Code
    } else if (keyDirection === 38) {
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
            } else { // if no value in index 1 but yes in 0
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
              if ($.trim(board[0][j].text()).length === 0) {
                board[0][j].text(board[3][j].text());
                board[3][j].text('');
                // value in 0
              } else {
                board[1][j].text(board[3][j].text());
                board[3][j].text('');
              }
            }
            board[2][j].text(board[3][j].text());
            board[3][j].text('');
          }//
          // start of checking side by side numbers
          if (board[0][j].text() === board[1][j].text()
            && board[0][j].text() !== ''
            && !$(board[1][j]).hasClass('stop')) {
            board[0][j].text(board[0][j].text() * 2);
            board[1][j].text('');
            $(board[0][j]).addClass('stop');
          }
          if (board[1][j].text() === board[2][j].text()
            && board[1][j].text() !== ''
            && !$(board[2][j]).hasClass('stop')) {
            board[1][j].text(board[1][j].text() * 2);
            board[2][j].text('');
            $(board[1][j]).addClass('stop');
          }
          if (board[2][j].text() === board[3][j].text()
            && board[2][j].text() !== ''
            && !$(board[3][j]).hasClass('stop')) {
            board[2][j].text(board[2][j].text() * 2);
            board[3][j].text('');
            $(board[2][j]).addClass('stop');
          }
        } // end second for loop
      } //  end first for loop
      color(); // run the color function
      anotherSquare();
      //  end KeyUp Code Beinning KeyRight Code
    } else if (keyDirection === 39) {
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
              if ($.trim(board[i][3].text()).length === 0) {
                board[i][3].text(board[i][0].text());
                board[i][0].text('');
              } else {
                board[i][2].text(board[i][0].text());
                board[i][0].text('');
              }
            }
            board[i][1].text(board[i][0].text());
            board[i][0].text('');
          }
          // start of checking side by side numbers
          if (board[i][3].text() === board[i][2].text()
            && board[i][3].text() !== ''
            && !$(board[i][2]).hasClass('stop')) {
            board[i][3].text(board[i][3].text() * 2);
            board[i][2].text('');
            $(board[i][3]).addClass('stop');
          }
          if (board[i][2].text() === board[i][1].text()
            && board[i][2].text() !== ''
            && !$(board[i][1]).hasClass('stop')) {
            board[i][2].text(board[i][2].text() * 2);
            board[i][1].text('');
            $(board[i][2]).addClass('stop');
          }
          if (board[i][1].text() === board[i][0].text()
            && board[i][1].text() !== ''
            && !$(board[i][0]).hasClass('stop')) {
            board[i][1].text(board[i][1].text() * 2);
            board[i][0].text('');
            (board[i][1]).addClass('stop');
          }
        } // end second for loop
      } //  end first for loop
      color(); // run the color function
      anotherSquare();
      // end of KeyRight, Beginning KeyDown
    } else if (keyDirection === 40) {
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
              if ($.trim(board[3][j].text()).length === 0) {
                board[3][j].text(board[0][j].text());
                board[0][j].text('');
              } else {
                board[2][j].text(board[0][j].text());
                board[0][j].text('');
              }
            }
            board[1][j].text(board[0][j].text());
            board[0][j].text('');
          }
          // start of checking side by side numbers
          if (board[3][j].text() === board[2][j].text()
            && board[3][j].text() !== ''
            && !$(board[2][j]).hasClass('stop')) {
            board[3][j].text(board[3][j].text() * 2);
            board[2][j].text('');
            $(board[3][j]).addClass('stop');
          }
          if (board[2][j].text() === board[1][j].text()
            && board[2][j].text() !== ''
            && !$(board[1][j]).hasClass('stop')) {
            board[2][j].text(board[2][j].text() * 2);
            board[1][j].text('');
            $(board[2][j]).addClass('stop');
          }
          if (board[1][j].text() === board[0][j].text()
            && board[1][j].text() !== ''
            && !$(board[0][j]).hasClass('stop')) {
            board[1][j].text(board[1][j].text() * 2);
            board[0][j].text('');
            $(board[1][j]).addClass('stop');
          }
        } // end second for loop
      } //  end first for loop
      color(); // run the color function
      anotherSquare();
    } // end of keyDown

    if (
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
      alert('The game is over!  Click to play again!');
      startingValues();
      startGame();
    }
  }); // end of click event listener
  $('#reset').click(function() {
    startingValues();
    startGame();
  });
}); // end of document ready
