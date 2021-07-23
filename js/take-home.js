class car {

    constructor (make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

 const cars = [new car('Chevy', 'Cobalt', 2009, 'White'), new car('Mitsubishi', 'Diamante', 1994, 'White'), 
 new car('Toyota', 'Camry', 1995, 'Gold'),  new car('Toyota', 'T-100', 1998, 'Blue')];

 console.log(cars);

 const listElement = document.createElement('ul');
 document.body.appendChild(listElement);

cars.forEach( (car) => {
    const li = document.createElement('li');
    listElement.appendChild(li);
    li.innerText = `${car.color} ${car.year} ${car.make} ${car.model}

    `;
})
