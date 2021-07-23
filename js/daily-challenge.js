const dog = { //created an object named dog
    name: 'Fluffy', //gave it a few properties
    legs: 5,
    furColor: 'yes',
    speak: function() { //created a function so it can speak when called upon
        alert('Woof!');
    },
    speakYourName: function () { //second function to call upon
        alert('Hi, my name is ' + this.name + '!');
    }
};

// dog.speakYourName(); //called the second function in the object

console.log(dog); //verifying the contents of dog
