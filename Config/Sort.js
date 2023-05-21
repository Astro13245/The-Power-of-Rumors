// Function to move a person to a different position in the chain
export function movePerson(position, dir) {
    if (dir === 'right') {
        if (position != 5) {
            document.getElementById('position' + (position + 1)).appendChild(document.querySelector('#position' + position).childNodes[0]);
            document.getElementById('position' + (position)).appendChild(document.querySelector('#position' + (position + 1)).childNodes[0]);
            position++;
        }
    } else if (dir === 'left') {
        if (position != 1) {
            document.getElementById('position' + (position - 1)).appendChild(document.querySelector('#position' + position).childNodes[0]);
            document.getElementById('position' + (position)).appendChild(document.querySelector('#position' + (position - 1)).childNodes[0]);
            position--;
        }
    }
}

export function checkIfPositionIsRight(people) {
    let numberOfPeopleInPosition = 0;
    let numberOfPeopleInNotPosition = 0;
    for (let i = 0; i < people.length; i++) {
        if (people[i].position === people[i].endingPosition) {
            numberOfPeopleInPosition++;
        } else {
            numberOfPeopleInNotPosition++;
        }
    }
}
