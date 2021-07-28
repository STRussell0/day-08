const title1 = document.getElementById('title');
title1.innerHTML = 'Daily Challenge';

const dog = { //created an object named dog
    name: 'Bowie', //gave it a few properties
    legs: 5,
    furColor: 'red',
    speak: function() { //created a function so it can speak when called upon
        alert('Woof!');
    },
    speakYourName() { //second function to call upon
        alert('Hi, my name is ' + dog.name + '!');
    }
};

// dog.speakYourName(); //called the second function in the object

const dogName = document.getElementById('name');
const dogLegs = document.getElementById('legs');
const dogColor = document.getElementById('color');
const dogSpeak = document.getElementById('speak');
const dogSpeakName = document.getElementById('speakName');

dogName.innerText = dog.name;
dogLegs.innerText = dog.name + ' has ' + dog.legs + ' legs.';
dogColor.innerText = dog.name + ' has ' + dog.furColor + ' fur.';




dogSpeak.addEventListener('click', dog.speak);
dogSpeakName.addEventListener('click', dog.speakYourName);

console.log(dog); //verifying the contents of dog
