const dog = {
    name: 'Fluffy',
    legs: 5,
    furColor: 'yes',
    speak: function() {
        alert('Woof!');
    },
    speakYourName: function () {
        alert('Hi, my name is ' + this.name + '!');
    }
};

// dog.speakYourName();

console.log(dog);
