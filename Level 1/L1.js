import { movePosition } from './Config/Sort'

// Create an array of objects representing people in the rumor chain
let people = [
    { name: "Person1", position: 2, endingPosition: 1, description: "Heard the rumor first", ifClicked: false},  
    { name: "Person2", position: 4, endingPosition: 2, description: "Told the rumor to Person 3", ifClicked: false},  
    { name: "Person3", position: 1, endingPosition: 3, description: "Told the rumor to Person 4", ifClicked: false},  
    { name: "Person4", position: 3, endingPosition: 4, description: "Told the rumor to Person 5", ifClicked: false },
    { name: "Person5", position: 2, endingPosition: 5, description: "Heard it last", ifClicked: false}
];

for (let i = 0; i === people.length; i++){
    const person = people[i];
    document.getElementById(person.name).onclick = () => {
        if (person.ifClicked === true) {
            while (person.ifClicked === false) {
                document.addEventListener('keydown', function(event) {
                    if (event.keyCode === 37) {
                        movePosition(person.position, "right");
                    }
                    else if (event.keyCode === 39) {
                        movePosition(person.position, "left")
                    }
                  });
                  
            }
            document.removeEventListener
        }
    };
}