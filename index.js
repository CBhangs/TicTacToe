let root = document.getElementById("root")

let h1 = document.createElement("h1")
h1.innerHTML="Tic Tac Toe"
root.append(h1)
h1.style.textAlign = "center"
h1.style.fontSize = "70px"

let h2 =document.createElement("h2")
h2.innerHTML="Rules of Tic Tac Toe"
root.append(h2)
h2.style.textAlign = "left"
h2.style.fontSize = "30px"
h2.style.color = "red"
h2.style.textDecoration = "underline"


let rules = document.getElementById("rules")
let ruleList = [ "The game is played on a grid that's 3 squares by 3 squares.", 
"You are X, your friend is O. Players take turns putting their marks in empty squares.", 
"The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.",
"When all 9 squares are full, the game is over.",
"First to 5 wins"]

for (let rule of ruleList) {
    let newListItem = document.createElement("li")
    newListItem.textContent = rule
    
    rules.appendChild(newListItem)
}
rules.style.fontSize = "30px"

