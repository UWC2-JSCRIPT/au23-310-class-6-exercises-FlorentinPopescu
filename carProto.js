class Car {
    /*
      * Car class
      * @constructor
      * @param {String} model
    */

    constructor (make, model, maxSpeed) {
        this.make = make;
        this.model = model;
        this.maxSpeed = maxSpeed;
        
        this.speed = 0;
        this.accCount = 0;
        this.decCount = 0;
    }

    accelerate(initialSpeed, accNo, accStep) {
        this.accCount += accNo;
        this.speed = initialSpeed;
        this.speed += accNo * accStep;
        
        if (this.speed <= this.maxSpeed) {
            console.log(`starting at ${initialSpeed} m/h accelerated ${this.accCount} times ` + 
                        `in increments of ${accStep} to speed up to ${this.speed} m/h`);
            return this.speed;
        } else if (this.speed > this.maxSpeed) {
            this.accCount = accNo;
            console.log(`cannot longer accelerate ${this.accCount} times in steps of ${accStep} from ${initialSpeed} m/h, ` + 
                        `maximal speed of ${this.maxSpeed} m/h reached`);
            return this.maxSpeed;
        }
    };

    brake(initialSpeed, decNo, decStep) {
        this.decCount += decNo;
        this.speed = initialSpeed;
        this.speed -= decNo * decStep;
        if (this.speed > 0) {
            console.log(`starting at ${initialSpeed} m/h decelerated ${this.decCount} times ` + 
                         `in decrements of ${decStep} to ${this.speed} m/h`);
            return this.speed;
        } else {
            this.speed = 0;
            console.log("decelerated to full stop");
        } 
    };

    toString() {
        return `${this.make} ${this.model} with a maximal speed of ${this.maxSpeed}`;
    };
}

// Create an instance, accelerate twice, brake once, and console log the instance.toString()
let corolla = new Car('Toyota', 'Corolla', 240);
console.log(corolla.toString());
console.log(JSON.stringify(corolla, null, 4));

corolla.accelerate(0, 2, 10);
corolla.accelerate(230, 2, 10);
corolla.brake(230, 1, 10);
corolla.brake(5, 1, 10);


class ElectricCar extends Car {
    /*
      * ElectricCar class
      * @constructor
      * @param {String} model
    */
    
    constructor(model, maxSpeed) {
        super("Toyota", model, maxSpeed);
        this.motor = "Electric";
    };

    toString() {
        return `This Electric ${super.toString()}`;
    };
} 

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
let corollaX = new ElectricCar('Corolla', 240);
console.log(corollaX.toString());
console.log(JSON.stringify(corollaX, null, 4));

corollaX.accelerate(0, 2, 10);
corollaX.accelerate(230, 2, 10);
corollaX.brake(230, 1, 10);
corollaX.brake(5, 1, 10);
