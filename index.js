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
function landingPageTitle(){
  let root = getRoot();
  let h1 = document.createElement("h1")
  h1.innerHTML = "Tic Tac Toe"
  h1.style.textAlign = "center"
  h1.style.fontSize = "70px"
  root.append(h1)
}

// create title for rules
function rulesTitle(){
  let root = getRoot();
  let h2 = document.createElement("h2")
  h2.innerHTML = "Rules of Tic Tac Toe"
  h2.style.textAlign = "left"
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
  btn.innerText = "Start Game"
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
  landingPageTitle();
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

// calls the lnading page function
buildLandingPage()


// build player info page
function buildPlayerInfoPage(){
  clearRoot();
  landingPageTitle();
  playerOne();
  playerOneInput();
  playerOneBtn();
  playerTwo();
  playerTwoInput();
  playerTwoBtn();
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
  inputOne.setAttribute("type", "text");
  inputOne.innerHTML = "Enter Your Name"
  root.append(inputOne)
}

// input for player two
function playerTwoInput(){
  let root = getRoot();
  let inputTwo = document.createElement("INPUT");
  inputTwo.setAttribute("type", "text");
  inputTwo.innerHTML = "Enter Your Name"
  root.append(inputTwo)
}

// btn for player one name
function playerOneBtn(){
  let root = getRoot();
  let playerOneButton = document.createElement("button")
  playerOneButton.innerHTML = "Submit Name"
  root.append(playerOneButton)
}

// btn for player two name
function playerTwoBtn(){
  let root = getRoot();
  let playerTwoButton = document.createElement("button")
  playerTwoButton.innerHTML = "Submit Name"
  root.append(playerTwoButton)
}
