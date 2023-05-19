// Function to move a person to a different position in the chain
function movePerson(position, dir) {
    if (dir === 'right'){
        if (position != 5) {
            document.getElementById('position' + (position + 1)).appendChild(document.querySelector('position' + position).childNodes)
            document.getElementById('position' + (position)).appendChild(document.querySelector('position' + (position + 1)).childNodes)
            position++;
        }
    }
    else if (dir === 'left'){
        if (position != 1) {
            document.getElementById('position' + (position - 1)).appendChild(document.querySelector('position' + position).childNodes)
            document.getElementById('position' + (position)).appendChild(document.querySelector('position' + position - 1).childNodes)
            position++;
        }
    }
}

function checkIfPositionIsRight(people){
    for (let i = 0; i < people; i++) {
        if (people[i].position === people[i].endingPosition) {

        }
        else {
            break;
        }
    }
}