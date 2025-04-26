// Initial references
// Create global variables for the different elements in the document
// The querySelector() method returns the first element that matches a CSS selector 
// The getElementById() method returns the element that matches the ID

// Declare constant container set equal to object document, method querySelector, passing as an argument class ".container"

// Declare constant playerTurn set equal to object document, method getElementById, passing as an argument id "playerTurn"

// Declare constant message set equal to object document, method getElementById, passing as an argument id "message"

// Declare variable initialMatrix as a 2d array, 6 rows, 7 columns, initialized to all 0s

// Declare variable currentPlayer to store the current player

// Write function gameOverCheck
{
//console.log("gameOverCheck");
    // return false
}

// Write function winCheck 
{
//console.log("winCheck");
    // return false
}

// Write function setPiece 
{
//console.log("setPiece");

    // Declare variable rows initialized to object document, method querySelectorAll, passing argument class ".grid-row"
    let rows = document.querySelectorAll(".grid-row");
    
    // If the element in array initialMatrix at indexes parameters startCount and colValue is NOT equal to 0   

        // Decrement parameter startCount by 1
        
        // Call function setPiece, passing as arguments parameters startCount and colValue

    // Else

        // Declare variable currentRow initialized to array rows, index startCount, method querySelectorAll, passing as an argument class ".grid-box"
        let currentRow = rows[startCount].querySelectorAll(".grid-box");
    
        // Modify currentRow, index colValue, object classlist, method add, passing as arguments "filled" and `player${currentPlayer}` 
        currentRow[colValue].classlist.add("filled", `player${currentPlayer}`);
    
        // Update array initialMatrix, indexes startCount and colValue, set equal to currentPlayer
    
        // If function call winCheck, passing as arguments parameters startCount and colValue is true

            // Set object message's innerHTML equal to `Player<span> ${currentPlayer}</span> wins` 
            message.innerHTML = `Player<span> ${currentPlayer}</span> wins`;
            // Return false
  
    // Call function gameOverCheck
}

// Write function fillBox 
{
//console.log("fillBox");
    // Declare variable colValue set equal to function parseInt() of parameter e, object target, function getAttribute, passing as argument "data-value"
    
    // Call function setPiece, passing arguments 5 (because we have 6 rows, 0 - 5) and variable colValue 
  
    // Switch the currentPlayer, if currently 1 then 2, if currently 2, then 1

    // Set playerTurn's innerHTML to `Player <span>${currentPlayer}'s</span> turn`
}

// Write function createBoard 
{
//console.log("createBoard");
    
    // Iterate through the 2d array initialMatrix
    // Write an outer for in loop to iterate through the rows, loop control variable innerArray, in    2d array initialMatrix

        // Declare variable outerDiv set equal to object document, method createElement, passing "div" as an argument
    
        // Modify outerDiv, object classList, calling method add, passing argument "grid-row"
        
        // Modify outerDiv calling method setAttribute, passing arguments "data-value" and loop control variable innerArray
        
        // Write an inner for in loop to iterate through the columns, loop control variable j, in 2d array initialMatrix, index innerArray    

            // Set each element in array initialMatrix to the value of 0
            
            // Declare variable innerDiv set equal to object document, method createElement, passing "div" as an argument
        
            // Modify innerDiv, object classList, method add, passing argument "grid-box"

            // Modify innerDiv, calling method setAttribute, passing arguments "data-value" and loop control variable j
            
            // Modify innerDiv, method addEventListener, passing arguments "click" and (e) => { fillBox(e); }
        
            // Modify outerDiv, method appendChild, passing argument innerDiv
        
        // Modify container. method appendChild, passing argument outerDiv
}

// Write function startGame 
{
//console.log("startGame");

    // Set currentPlayer to 1, player 1 always goes first
    
    // Set the container's innerHTML to an empty string
    
    // Call function createBoard
    
    // Set playerTurn's innerHTML to `Player <span>${currentPlayer}'s</span> turn`
}

// For the window.onload event, call function startGame

