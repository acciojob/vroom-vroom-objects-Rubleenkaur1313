// Car Constructor
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding getMakeModel method to Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// SportsCar Constructor
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor to set make and model
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit from Car's prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Example usage
const car = new SportsCar("Ferrari", "Testarossa", 200);

// Call getMakeModel() to get the make and model of the car
console.log(car.getMakeModel()); // Output: Ferrari Testarossa

// Call getTopSpeed() to get the top speed of the sports car
console.log(car.getTopSpeed()); // Output: 200

// Test Cases
console.log(car instanceof Car); // Output: true
console.log(car.make); // Output: Ferrari
console.log(car.model); // Output: Testarossa
console.log(car.topSpeed); // Output: 200
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200