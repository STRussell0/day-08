const array = [];
let answer = null;

array.push(1);

array.push(true);

answer = {
    0:1,
    1: true,
    length: 2,
    push: function(item) { //function used to add items to the end of an array
        answer[answer.length] = item;
        answer.length++;
    },

    pop: function() { //function used to remove items from the end of an array
        answer.length--;
        delete answer[answer.length];
    }
}

function addToFront(arr, item) {
    // add to beginning of array
    array.unshift(item);
}

//remove first item
array.shift();

console.log(array, answer);

const user = {
    username: '',
    score: 0,
    role: 'ceo',
    doTaxes: function() {
        fizzbuzz(1, 100, 3, 7, 5);
    }
};

const user2 = {
    username: '',
    score: 0,
    role: 'ceo',
    doTaxes: function() {
        fizzbuzz(1, 100, 3, 7, 5);
    }
}

class User {
    // username = '';
    // score = 0;
    // role=  'ceo';

    constructor(username, score, role) {
        this.username = username;
        this.score = score;
        this.role = role;
    }

    // doTaxes(){
    //     fizzbuzz(1, 100, 3, 7, 5);
    // }
}

answer = [new User('Stephen', 2, 'Cool Guy')];

console.log(answer);