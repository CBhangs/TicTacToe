// global name variables
let player1, player2;

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
function pageTitle(){
  let root = getRoot();
  let h1 = document.createElement("h1")
  h1.innerHTML = "Tic Tac Toe"
  h1.style.textAlign = "center"
  h1.style.fontSize = "70px"
  root.append(h1)
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
  pageTitle();
  createdBy();
  gameInfo()
  buildGameBored();
}

function createdBy(){
  let root = getRoot();
  let h3 = document.createElement("h3")
  h3.innerHTML = "Created By Cory H"
  h3.style.color = "red"
  h3.style.fontSize = "30px"
  h3.style.textAlign = "center"
  h3.style.fontStyle = "cantal"
  root.append(h3)
}
// create player names wins and loses div
function gameInfo(){
  let root = getRoot();
  let playerNames = document.createElement("div")
  playerNames.className = "info"
  let names = document.createElement("h1")
  names.innerHTML = "Player 1 Name " + " Player 2 Name"
  playerNames.append(names)
  let wins = document.createElement("h2")
  wins.innerHTML = "wins = " + " wins = "
  playerNames.append(wins)
  let loses = document.createElement("h3")
  loses.innerHTML = "loses = " + " loses = "
  playerNames.append(loses)
  root.append(playerNames)
}

// create game bored div
function buildGameBored(){
  let root = getRoot();
  let gameBored = document.createElement('div')
  gameBored.className = "bored"
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
  
  root.append(gameBored)
}
