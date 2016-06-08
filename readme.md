#2048

##How to Play
This is a self-made version of 2048!  To play, use the up, down, left, and right arrow keys to move the blocks to the farthest open square on the board in that direction.  Any common values that are touching in the direction of the arrow pressed will combine the two values into one and a new block with a value of 2 will be added to the board.  The goal is to combine blocks until you get a 2048 block.  You can continue playing past that point if you like.

##Approach:
The biggest challenge to making this game was the game logic involved.  I started by creating the board in HTML and CSS.  Then, I set up an array of arrays to represent the spaces on the board in jquery.  To start the game, I made function to choose two spaces to start off with "2" squares. From there, there was a key listener to determine which arrow key was pressed.  From there, the blocks were moved over in the direction of the arrow key as far as it could on the board.  Then the game had to check for any similar numbers to combine.  Then the blocks needed to be consolodated over again.  The backgrounds of the blocks needed to change to match the value and another 2 had to be added to the board.  Then there needed to be a check for when all of the squares were filled and no moves could be made.  A reset function was also needed.

##Credits:
  * [jQuery](https://jquery.com/)
  * [Sweet Alert](http://t4t5.github.io/sweetalert/)
  * [Google Fonts](https://www.google.com/fonts)

##Known Issues:
  * No classes with background-colors have been made for a tile with a value over 2048
  * Would love to add animation
