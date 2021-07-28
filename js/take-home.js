class car { //created a class named car

    constructor (make, model, year, color) { //constructor used
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

 const cars = [new car('Chevy', 'Cobalt', 2009, 'White'), new car('Mitsubishi', 'Diamante', 1994, 'White'), 
 new car('Toyota', 'Camry', 1995, 'Gold'),  new car('Toyota', 'T-100', 1998, 'Blue')];

 //created a cars array with new car objects

 console.log(cars); //verifying contents of cars array

 const listElement = document.createElement('ul'); // created an unordered list and appended it to the html doc
 document.body.appendChild(listElement);

cars.forEach( (car) => { //for each item in the cars array...
    const li = document.createElement('li'); //...create a list item and append it to the doc
    listElement.appendChild(li);
    //the inner text of each list item is each objects property
    li.innerText = `${car.color} ${car.year} ${car.make} ${car.model}
    
    `;
})
