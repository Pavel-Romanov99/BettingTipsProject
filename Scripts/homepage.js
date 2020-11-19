//selector
const matchList = document.querySelector('.matches')
var addButtons = document.querySelectorAll('.add-to-bet');

//add event listeners to all add buttons
for (var i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', addMatch);
}

//function for deleting a match
function deleteM() { $('.remove-button').on('click', function(){
    $(this).closest(".match").remove();
})};

var i = 0;
//Functions
function addMatch(event){
    event.preventDefault();

    //create div
    const matchDiv = document.createElement('div');
    matchDiv.classList.add('match');
    
    //create li
    const newMatch = document.createElement('li');
    newMatch.innerText = ++i;
    newMatch.classList.add('match-item');

    matchDiv.appendChild(newMatch);

    //add button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove'
    removeButton.classList.add('remove-button');
    removeButton.onclick = deleteM();
    

    newMatch.appendChild(removeButton);


    //add to list of matches
    matchList.appendChild(matchDiv);
}


