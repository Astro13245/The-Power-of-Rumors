import { movePerson, checkIfPositionIsRight } from '../Config/Sort';

const music = new Audio('/Music/track_1.wav');
music.play();
music.loop = true;
music.playbackRate = 1;

let people = [
    { name: "Person1", position: 2, endingPosition: 1, description: "The Willow Project will release 287 million metric tons of CO2 over 30 years", ifClicked: false },  
    { name: "Person2", position: 4, endingPosition: 2, description: "The Willow Project will release 287 million metric tons of CO2 over 20 years", ifClicked: false },  
    { name: "Person3", position: 1, endingPosition: 3, description: "The Willow Project will release 287 million metric tons of CO2 over 15 years", ifClicked: false },  
    { name: "Person4", position: 3, endingPosition: 4, description: "The Willow Project will release about 250 million metric tons over 5 years", ifClicked: false },
    { name: "Person5", position: 5, endingPosition: 5, description: "The Willow Project will release 250 million metric tons of CO2", ifClicked: false }
];

for (let i = 0; i === people.length; i++) {
    const person = people[i];
    const element = document.getElementById('position' + (person.position));

    element.addEventListener('keycode', function() {
        if (!person.ifClicked) {
            person.ifClicked = true;
            document.addEventListener('keydown', handleKeyDown);
        } else {
            removeEventListener('keydown', handleKeyDown);
        }
    });
}

function handleKeyDown(event) {
    const key = event.key;
    if (key === 'ArrowRight') {
        movePerson(person.position, "right");
    } else if (key === 'ArrowLeft') {
        movePerson(person.position, "left");
    }
}

// Remember to remove the event listener when necessary
// document.removeEventListener('keydown', handleKeyDown);