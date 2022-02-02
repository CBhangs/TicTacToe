// global name variables
let playerOneName, playerTwoName;
let playerOneWins = 0
let playerOneLoses = 0
let playerTwoWins = 0
let playerTwoLoses = 0
let whosTurnIsIt = "Player 1"

// get root element 
function getRoot(){
  let root = document.getElementById("root")
  return root;
}   

// clear root content
function clearRoot(){
  let root = getRoot();
  root.replaceChildren();
}

// create title for landing page
function pageTitle(addCreatedBy){
  let root = getRoot();
  let headerContainer = document.createElement("div")
  let h1 = document.createElement("h1")
  h1.innerHTML = "Tic Tac Toe"
  h1.style.textAlign = "center"
  h1.style.fontSize = "70px"
  headerContainer.append(h1)
  if (addCreatedBy){
    let h3 = document.createElement("h3")
    h3.innerHTML = "Created By Cory H"
    h3.style.color = "red"
    h3.style.fontSize = "30px"
    h3.style.textAlign = "center"
    h3.style.fontStyle = "cantal"
    headerContainer.append(h3)
  }
  root.append(headerContainer)
}

// create title for rules()
function rulesTitle(){
  let root = getRoot();
  let h2 = document.createElement("h2")
  h2.innerHTML = "Rules of Tic Tac Toe"
  h2.style.textAlign = "center"
  h2.style.fontSize = "30px"
  h2.style.color = "red"
  h2.style.textDecoration = "underline"
  root.append(h2)
}

// create ul
function rulesList(){
  let root = getRoot();
  let rules = document.createElement("ul");
  // add rules to ul
  let ruleList = ["The game is played on a grid that's 3 squares by 3 squares.",
    "You are X, your friend is O. Players take turns putting their marks in empty squares.",
    "The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.",
    "When all 9 squares are full, the game is over.",
    "First to 5 wins"]

    rules.style.fontSize = "20px"
    // rules.style.textAlign = "center"

  for (let rule of ruleList) {
    let newListItem = document.createElement("li")
    newListItem.textContent = rule
    rules.appendChild(newListItem)
  }
  root.appendChild(rules)
}

// create button
function landingPageBtn(){
  let root = getRoot();
  let btn = document.createElement("button")
  btn.innerHTML = "Start Game"
  btn.style.margin = "auto"
  btn.style.backgroundColor = "red" 
  btn.style.color = "white"
  btn.style.borderRadius = "10px"

  // add eventlistener
  btn.addEventListener("click", buildPlayerInfoPage)

  root.appendChild(btn)
}  

// build landing page
function buildLandingPage(){
  clearRoot();
  pageTitle();
  rulesTitle();
  rulesList();
  landingImage();
  landingPageBtn();
}

// add image function 
function landingImage(){
  let root = getRoot();
  let image = document.createElement("img")
  image.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KPXNEbCS7I0BVGcDtpnCUxS3h64mA_GtqQ&usqp=CAU"
  root.appendChild(image)
}

// calls the landing page function
buildLandingPage()

// page 2 build 


// build player info page
function buildPlayerInfoPage(){
  clearRoot();
  pageTitle(); 
  playerOne();
  playerOneInput();
  background();
  playerTwo();
  playerTwoInput();
  createSubmitButton();
}

// create player one title
function playerOne(){
  let root = getRoot();
  let h1 = document.createElement("h1")
  h1.innerHTML = "Player One"
  h1.style.fontStyle = "italic"
  root.append(h1)
}

// create player two title
function playerTwo(){
  let root = getRoot();
  let h1 = document.createElement("h1")
  h1.innerHTML = "Player Two"
  h1.style.fontStyle = "italic"
  root.append(h1)
}

// input for player one
function playerOneInput(){
  let root = getRoot();
  let inputOne = document.createElement("INPUT");
  inputOne.setAttribute("id", "player1");
  inputOne.setAttribute("type", "text");
  inputOne.setAttribute("placeholder", "Enter player 1 Name");
  inputOne.style.margin = "10px"
  inputOne.style.borderRadius = "10px"
  root.append(inputOne)
}

// input for player two
function playerTwoInput(){
  let root = getRoot();
  let inputTwo = document.createElement("INPUT");
  inputTwo.setAttribute("id", "player2");
  inputTwo.setAttribute("type", "text");
  inputTwo.setAttribute("placeholder", "Enter Player 2 Name")
  inputTwo.style.margin = "10px"
  inputTwo.style.borderRadius = "10px"
  root.append(inputTwo)
}

// image for player info 
function background(){
  let root = getRoot();
  let backgrd = document.createElement("h2")
  let infoPic = document.createElement("img")
  infoPic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_eJmXd0RPEBEuVtbgUOuNAKd3xURs-cWZg&usqp=CAU"
  backgrd.appendChild(infoPic)
  root.append(backgrd)
}

// create submit button 
function createSubmitButton(){
  function collectNames(){
    // get the elements
    let playerOneInputElement = document.getElementById("player1");
    let playerTwoInputElement = document.getElementById("player2");
    // check length of inputs
    let playerOneNameIsGreaterThan2 = playerOneInputElement.value.length > 2
    let playerTwoNameIsGreaterThan2 = playerTwoInputElement.value.length > 2
    
    if (!playerOneNameIsGreaterThan2 || !playerTwoNameIsGreaterThan2){
      playerOneInputElement.style.color = "red";
      playerTwoInputElement.style.color = "red";
      return 
    } 
    // check value/makes it lowercase compares both players name 
    let playerOneInputValue = document.getElementById("player1").value.toLowerCase();
    let playerTwoInputValue = document.getElementById("player2").value.toLowerCase();
    if (playerOneInputValue === playerTwoInputValue){
      playerOneInputElement.style.color = "red";
      playerTwoInputElement.style.color = "red";
      return
   }
    // check for numbers in name
    let playerOneInputName = document.getElementById("player1").value;
    let playerTwoInputName = document.getElementById("player2").value;

    if (playerOneInputName.match(".*\\d.*") || playerTwoInputName.match(".*\\d.*")){
      playerOneInputElement.style.color = "red";
      playerTwoInputElement.style.color = "red";
      return
    }
    // save names in global space 
    playerOneName = playerOneInputName 
    playerTwoName = playerTwoInputName
    // build game page
    buildGamePage()
  }

  let root = getRoot();
  let submit = document.createElement("button")
  submit.innerHTML = "Submit"
  submit.style.margin = "auto"
  submit.style.backgroundColor = "red" 
  submit.style.color = "white"
  submit.style.borderRadius = "10px"

  submit.addEventListener("click", collectNames)

  root.append(submit)
}

function buildGamePage() {
  clearRoot();
  pageTitle(true);
  buildGameContainer();
}

function buildGameContainer(){
  let root = getRoot();
  let gameContainer = document.createElement("div")
  gameInfo(gameContainer);
  buildGameBored(gameContainer);
  root.append(gameContainer)
}

// create player names wins and loses div
function gameInfo(parentContainer){
  let playerInfo = document.createElement("div")
  playerInfo.className = "info"
//player 1 div
  let player1 = document.createElement("div")
  player1.className = "p1"

  let name1 = document.createElement("h1")
  name1.innerHTML = playerOneName

  //player 1 wins div
  let player1Wins = document.createElement("div")
  let wins1 = document.createElement("h1")
  wins1.innerHTML = "Wins = " + playerOneWins
  player1Wins.append(wins1)

  // player 1 loses div
  let player1Loses = document.createElement("div")
  let loses1 = document.createElement("h1")
  loses1.innerHTML = "Loses = " + playerOneLoses
  player1Loses.append(loses1)
  
  player1.append(name1)
  player1.append(player1Wins)
  player1.append(player1Loses)
  playerInfo.append(player1)
  parentContainer.append(playerInfo)

  //player 2 div
  let player2 = document.createElement("div")
  player2.className = "p2"

  let name2 = document.createElement("h1")
  name2.innerHTML = playerTwoName

  //player 2 wins div
  let player2Wins = document.createElement("div")
  let wins2 = document.createElement("h1")
  wins2.innerHTML = "Wins = " + playerTwoWins
  player2Wins.append(wins2)

  //player 2 loses div
  let player2Loses = document.createElement("div")
  let loses2 = document.createElement("h1")
  loses2.innerHTML = "Loses = " + playerTwoLoses
  player2Loses.append(loses2)
  
  player2.append(name2)
  player2.append(player2Wins)
  player2.append(player2Loses)
  playerInfo.append(player2)
  parentContainer.append(playerInfo)
}


// create game bored div
function buildGameBored(parentContainer){
  function handleClick(e) {
    console.log(e.target)
    console.log(e.target.id)
    // stop outside div
    if (e.target.className === "bored") {
      return
    }
    // check whos turn it is
    let isPlayerOnesTurn = whosTurnIsIt === "Player 1";
    
    // check if someone when here already
    let isSpotTaken = e.target.style.backgroundColor
    // update  if spot is not taken
    if (!isSpotTaken) {
      // is player one turn
      if (isPlayerOnesTurn) {
        e.target.style.backgroundColor = "red"
        checkWinState();
        whosTurnIsIt = "Player 2"
      } else {
      // is player two turn
        e.target.style.backgroundColor = "blue"
        checkWinState();
        whosTurnIsIt = "Player 1";
      }
    }
  }
  // create game bored
  let gameBored = document.createElement('div')
  gameBored.className = "bored"

  // add evt listener to game bored
  gameBored.addEventListener("click", handleClick)

  // add tiles to bored
  let div1 = document.createElement('div')
  div1.setAttribute("id", "1")
  gameBored.append(div1)
  div1.innerHTML = "1"
  
  let div2 = document.createElement('div')
  div2.setAttribute("id", "2")
  gameBored.append(div2)
  div2.innerHTML = "2"

  let div3 = document.createElement('div')
  div3.setAttribute("id", "3")
  gameBored.append(div3)
  div3.innerHTML = "3"

  let div4 = document.createElement('div')
  div4.setAttribute("id", "4")
  gameBored.append(div4)
  div4.innerHTML = "4"

  let div5 = document.createElement('div')
  div5.setAttribute("id", "5")
  gameBored.append(div5)
  div5.innerHTML = "5"

  let div6 = document.createElement('div')
  div6.setAttribute("id", "6")
  gameBored.append(div6)
  div6.innerHTML = "6"

  let div7 = document.createElement('div')
  div7.setAttribute("id", "7")
  gameBored.append(div7)
  div7.innerHTML = "7"

  let div8 = document.createElement('div')
  div8.setAttribute("id", "8")
  gameBored.append(div8)
  div8.innerHTML = "8"

  let div9 = document.createElement('div')
  div9.setAttribute("id", "9")
  gameBored.append(div9)
  div9.innerHTML = "9"

  parentContainer.append(gameBored)
}

function checkWinState(){
  function resetGame(){
    console.log(whosTurnIsIt)
    // log wins and loses
    let didPlayerOneWin = whosTurnIsIt === "Player 1";
    if (didPlayerOneWin){
      playerOneWins++ 
      playerTwoLoses++
    } else {
      playerTwoWins++
      playerOneLoses++
    } 
      console.log({
      playerOneWins,
      playerOneLoses,
      playerTwoWins,
      playerTwoLoses
    })
    // restart game
    buildGamePage();
  }
  // check if anyone has 3 in row 
  
  let pos1 = document.getElementById("1").style.backgroundColor
  let pos2 = document.getElementById("2").style.backgroundColor
  let pos3 = document.getElementById("3").style.backgroundColor
  let pos4 = document.getElementById("4").style.backgroundColor
  let pos5 = document.getElementById("5").style.backgroundColor
  let pos6 = document.getElementById("6").style.backgroundColor
  let pos7 = document.getElementById("7").style.backgroundColor
  let pos8 = document.getElementById("8").style.backgroundColor
  let pos9 = document.getElementById("9").style.backgroundColor

  // check pos 1,2,3 
  // make sure pos1 2 3 are not set to defualt value
  // make sure they are not the same 
  if(pos1 !== "" && pos2  !== "" && pos3 !== "" && pos1 === pos2 && pos1 === pos3){
    resetGame();
  }
  // check pos 4,5,6 
  if(pos4 !== "" && pos5  !== "" && pos6 !== "" && pos4 === pos5 && pos4 === pos6){
    resetGame();
  }
  // check pos 7,8,9
  if(pos7 !== "" && pos8  !== "" && pos9 !== "" && pos7 === pos8 && pos7 === pos9){
    resetGame();
  }
  // check pos 1,4,7
  if(pos1 !== "" && pos4  !== "" && pos7 !== "" && pos1 === pos4 && pos1 === pos7){
    resetGame();
  }
  // check pos 2,5,8
  if(pos2 !== "" && pos5  !== "" && pos8 !== "" && pos2 === pos5 && pos2 === pos8){
    resetGame();
  }
  //check pos 3,6,9
  if(pos3 !== "" && pos6  !== "" && pos9 !== "" && pos3 === pos6 && pos3 === pos9){
    resetGame();
  }
  // check pos 1,5,9
  if(pos1 !== "" && pos5  !== "" && pos9 !== "" && pos1 === pos5 && pos1 === pos9){
    resetGame();
  }
  // check pos 3,5,7
  if(pos3 !== "" && pos5  !== "" && pos7 !== "" && pos3 === pos5 && pos3 === pos7){
    resetGame();
  }
}
