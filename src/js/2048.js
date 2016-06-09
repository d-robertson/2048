$(document).ready(function() {
  var board = [
    [$('#a'), $('#b'), $('#c'), $('#d')],
    [$('#e'), $('#f'), $('#g'), $('#h')],
    [$('#i'), $('#j'), $('#k'), $('#l')],
    [$('#m'), $('#n'), $('#o'), $('#p')]
  ];

  var count = 0;
  var add = 0;

  // set all starting values to ''
  function startingValues() {
    for (var y = 0; y < 4; y++) {
      for (var z = 0; z < 4; z++) {
        board[y][z].text('');
        board[y][z].removeClass();
        board[y][z].addClass('default square');
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

  function boardFull() {
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
      return true;
    } else {
      return false;
    }
  }

  function anotherSquare() {
    if (boardFull()) {
      return;
    }
    var row;
    var col;
    do {
      row = Math.floor(Math.random() * 4);
      col = Math.floor(Math.random() * 4);
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
          $(board[b][c]).removeClass();
          $(board[b][c]).addClass('default square');
        }
        if (board[b][c].text() === '2') {
          $(board[b][c]).removeClass();
          $(board[b][c]).addClass('two square');
        }
        if (board[b][c].text() === '4') {
          $(board[b][c]).removeClass();
          $(board[b][c]).addClass('four square');
        }
        if (board[b][c].text() === '8') {
          $(board[b][c]).removeClass();
          $(board[b][c]).addClass('eight square');
        }
        if (board[b][c].text() === '16') {
          $(board[b][c]).removeClass();
          $(board[b][c]).addClass('sixteen square');
        }
        if (board[b][c].text() === '32') {
          $(board[b][c]).removeClass();
          $(board[b][c]).addClass('thirty-two square');
        }
        if (board[b][c].text() === '64') {
          $(board[b][c]).removeClass();
          $(board[b][c]).addClass('sixty-four square');
        }
        if (board[b][c].text() === '128') {
          $(board[b][c]).removeClass();
          $(board[b][c]).addClass('one-twenty-eight square');
        }
        if (board[b][c].text() === '256') {
          $(board[b][c]).removeClass();
          $(board[b][c]).addClass('two-fifty-six square');
        }
        if (board[b][c].text() === '512') {
          $(board[b][c]).removeClass();
          $(board[b][c]).addClass('five-twelve square');
        }
        if (board[b][c].text() === '1024') {
          $(board[b][c]).removeClass();
          $(board[b][c]).addClass('ten-twenty-four square');
        }
        if (board[b][c].text() === '2048') {
          $(board[b][c]).removeClass();
          $(board[b][c]).addClass('twenty-fourty-eight square');
        }
      }
    }
  }

  function keyLeft() {
    for (var i = 0; i < 4; i++) {
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
      }
    }
  }

  function keyUp() {
    for (var i = 0; i < 4; i++) {
      if ($.trim(board[1][i].text()).length > 0 &&
      $.trim(board[0][i].text()).length === 0) {
        board[0][i].text(board[1][i].text());
        board[1][i].text('');
      }
      if ($.trim(board[2][i].text()).length > 0 &&
        $.trim(board[1][i].text()).length === 0) {
          // if value in index 2 and value 0 in index 0 or 1
        if ($.trim(board[0][i].text()).length === 0) {
          board[0][i].text(board[2][i].text());
          board[2][i].text('');
        } else { // if no value in index 1 but yes in 0
          board[1][i].text(board[2][i].text());
          board[2][i].text('');
        }
      }
      if ($.trim(board[3][i].text()).length > 0 &&
        $.trim(board[2][i].text()).length === 0) {
          // value in index 3, value 0 in 2 and 1
        if ($.trim(board[1][i].text()).length === 0) {
          // value in index 3, value 0 in 1 2 and 0
          if ($.trim(board[0][i].text()).length === 0) {
            board[0][i].text(board[3][i].text());
            board[3][i].text('');
            // value in 0
          } else {
            board[1][i].text(board[3][i].text());
            board[3][i].text('');
          }
        }
        board[2][i].text(board[3][i].text());
        board[3][i].text('');
      }
    }
  }

  function keyRight() {
    for (var i = 0; i < 4; i++) {
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
    }
  }

  function keyDown() {
    for (var i = 0; i < 4; i++) {
      if ($.trim(board[2][i].text()).length > 0 &&
        $.trim(board[3][i].text()).length === 0) {
        board[3][i].text(board[2][i].text());
        board[2][i].text('');
      }
      if ($.trim(board[1][i].text()).length > 0 &&
        $.trim(board[2][i].text()).length === 0) {
        if ($.trim(board[3][i].text()).length === 0) {
          board[3][i].text(board[1][i].text());
          board[1][i].text('');
        } else {
          board[2][i].text(board[1][i].text());
          board[1][i].text('');
        }
      }
      if ($.trim(board[0][i].text()).length > 0 &&
        $.trim(board[1][i].text()).length === 0) {
        if ($.trim(board[2][i].text()).length === 0) {
          if ($.trim(board[3][i].text()).length === 0) {
            board[3][i].text(board[0][i].text());
            board[0][i].text('');
          } else {
            board[2][i].text(board[0][i].text());
            board[0][i].text('');
          }
        }
        board[1][i].text(board[0][i].text());
        board[0][i].text('');
      }
    }
  }

  function noColumns() {
    for (var i = 0; i < 4; i++) {
      if (board[0][i].text() === board[1][i].text() ||
      board[1][i].text() === board[2][i].text() ||
      board[2][i].text() === board[3][i].text()) {
        return false;
      }
    }
    return true;
  }

  function noRows() {
    for (var i = 0; i < 4; i++) {
      if (board[i][0].text() === board[i][1].text() ||
      board[i][1].text() === board[i][2].text() ||
      board[i][2].text() === board[i][3].text()) {
        return false;
      }
    }
    return true;
  }

  function checkGameOver() {
    if (boardFull() && noRows() && noColumns()) {
      swal({
        title: 'There are no more moves!',
        text: 'Try again!',
        closeOnConfirm: true },
      function(isConfirm) {
        if (isConfirm) {
          startingValues();
          startGame();
        }
      });
    }
  }

  function check() {
    if (board[0][0].text() === '2048' ||
      board[0][1].text() === '2048' ||
      board[0][2].text() === '2048' ||
      board[0][3].text() === '2048' ||
      board[1][0].text() === '2048' ||
      board[1][1].text() === '2048' ||
      board[1][2].text() === '2048' ||
      board[1][3].text() === '2048' ||
      board[2][0].text() === '2048' ||
      board[2][1].text() === '2048' ||
      board[2][2].text() === '2048' ||
      board[2][3].text() === '2048' ||
      board[3][0].text() === '2048' ||
      board[3][1].text() === '2048' ||
      board[3][2].text() === '2048' ||
      board[3][3].text() === '2048') {
      swal({
        title: 'You got 2048!',
        text: 'Click to keep playing'
      });
    }
  }

  // Start Running the Game
  startingValues();

  startGame();

  // Key listener
  $(document).keydown(function(e) {
    // keep page from scrolling when hit the arrow keys
    e.preventDefault();

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
      keyLeft();

      // start of checking side by side numbers
      for (var i = 0; i < 4; i++) {
        if (board[i][0].text() === board[i][1].text()
          && board[i][0].text() !== ''
          && !$(board[i][1]).hasClass('stop')) {
          add = board[i][0].text() * 2;
          count = count + add;
          $('#count').text(count);
          board[i][0].text(board[i][0].text() * 2);
          board[i][1].text('');
          $(board[i][0]).addClass('stop');
        }
        if (board[i][1].text() === board[i][2].text()
          && board[i][1].text() !== ''
          && !$(board[i][2]).hasClass('stop')) {
          add = board[i][1].text() * 2;
          count = count + add;
          $('#count').text(count);
          board[i][1].text(board[i][1].text() * 2);
          board[i][2].text('');
          $(board[i][1]).addClass('stop');
        }
        if (board[i][2].text() === board[i][3].text()
        && board[i][2].text() !== ''
        && !$(board[i][3]).hasClass('stop')) {
          add = board[i][2].text() * 2;
          count = count + add;
          $('#count').text(count);
          board[i][2].text(board[i][2].text() * 2);
          board[i][3].text('');
          $(board[i][2]).addClass('stop');
        }
      }

      keyLeft();

    //  end Keyleft Code Begin KeyUp Code
    } else if (keyDirection === 38) {
      keyUp();

      // start of checking side by side numbers
      for (var i = 0; i < 4; i++) {
        if (board[0][i].text() === board[1][i].text()
          && board[0][i].text() !== ''
          && !$(board[1][i]).hasClass('stop')) {
          add = board[0][i].text() * 2;
          count = count + add;
          $('#count').text(count);
          board[0][i].text(board[0][i].text() * 2);
          board[1][i].text('');
          $(board[0][i]).addClass('stop');
        }
        if (board[1][i].text() === board[2][i].text()
          && board[1][i].text() !== ''
          && !$(board[2][i]).hasClass('stop')) {
          add = board[1][i].text() * 2;
          count = count + add;
          $('#count').text(count);
          board[1][i].text(board[1][i].text() * 2);
          board[2][i].text('');
          $(board[1][i]).addClass('stop');
        }
        if (board[2][i].text() === board[3][i].text()
          && board[2][i].text() !== ''
          && !$(board[3][i]).hasClass('stop')) {
          add = board[2][i].text() * 2;
          count = count + add;
          $('#count').text(count);
          board[2][i].text(board[2][i].text() * 2);
          board[3][i].text('');
          $(board[2][i]).addClass('stop');
        }
      }

      keyUp();

    //  end KeyUp Code Beinning KeyRight Code
    } else if (keyDirection === 39) {
      keyRight();

      // start of checking side by side numbers
      for (var i = 0; i < 4; i++) {
        if (board[i][3].text() === board[i][2].text()
          && board[i][3].text() !== ''
          && !$(board[i][2]).hasClass('stop')) {
          add = board[i][3].text() * 2;
          count = count + add;
          $('#count').text(count);
          board[i][3].text(board[i][3].text() * 2);
          board[i][2].text('');
          $(board[i][3]).addClass('stop');
        }
        if (board[i][2].text() === board[i][1].text()
          && board[i][2].text() !== ''
          && !$(board[i][1]).hasClass('stop')) {
          add = board[i][2].text() * 2;
          count = count + add;
          $('#count').text(count);
          board[i][2].text(board[i][2].text() * 2);
          board[i][1].text('');
          $(board[i][2]).addClass('stop');
        }
        if (board[i][1].text() === board[i][0].text()
          && board[i][1].text() !== ''
          && !$(board[i][0]).hasClass('stop')) {
          add = board[1][0].text() * 2;
          count = count + add;
          $('#count').text(count);
          board[i][1].text(board[i][1].text() * 2);
          board[i][0].text('');
          (board[i][1]).addClass('stop');
        }
      }

      keyRight();

    // end of KeyRight, Beginning KeyDown
    } else if (keyDirection === 40) {
      keyDown();

      // start of checking side by side numbers
      for (var i = 0; i < 4; i++) {
        if (board[3][i].text() === board[2][i].text()
          && board[3][i].text() !== ''
          && !$(board[2][i]).hasClass('stop')) {
          add = board[3][i].text() * 2;
          count = count + add;
          $('#count').text(count);
          board[3][i].text(board[3][i].text() * 2);
          board[2][i].text('');
          $(board[3][i]).addClass('stop');
        }
        if (board[2][i].text() === board[1][i].text()
          && board[2][i].text() !== ''
          && !$(board[1][i]).hasClass('stop')) {
          add = board[2][i].text() * 2;
          count = count + add;
          $('#count').text(count);
          board[2][i].text(board[2][i].text() * 2);
          board[1][i].text('');
          $(board[2][i]).addClass('stop');
        }
        if (board[1][i].text() === board[0][i].text()
          && board[1][i].text() !== ''
          && !$(board[0][i]).hasClass('stop')) {
          add = board[1][i].text() * 2;
          count = count + add;
          $('#count').text(count);
          board[1][i].text(board[1][i].text() * 2);
          board[0][i].text('');
          $(board[1][i]).addClass('stop');
        }
      }

      keyDown();
    }

    //  change divs background color to match value
    color();

    // add another square to the board
    if (keyDirection === 37 ||
      keyDirection === 38 ||
      keyDirection === 39 ||
      keyDirection === 40) {
      anotherSquare();
    }

    check();
    checkGameOver();

  //  end of click event listener
  });

  //  reset game board
  $('#reset').click(function() {
    startingValues();
    startGame();
  });

//  end of document ready
});
