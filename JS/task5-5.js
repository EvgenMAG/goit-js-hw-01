class Car {
  
    constructor(car) {
        this.speed = 10;
        this._price = car.price;
        this.maxSpeed = car.maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }
    
// static getSpecs(car) {
//     let keys = Object.keys(car);
//     console.log(keys);
//     let specs = "";
 
//     for (const key of keys) {
//         specs += `${key}: ${car[key]}, `;
       
//     }
    
//     return specs
      
//       .split("")
//       .filter((el) => el !== "_")
//       .join("");
    
//   }

    static getSpecs(car) {
      return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
    }
    

    get price() {
      return this._price
  }
    set price(value) {
      this._price = value
  }
    turnOn() {
   this.isOn = true;
  }
    turnOff() {
        this.isOn = false;
        this.speed = 0 
  }
    accelerate(value) {
        return this.speed + value <= this.maxSpeed ? this.speed += value :
            this.speed = this.maxSpeed
  }
    decelerate(value) {
        return this.speed - value > 0 ? this.speed -=value : this.speed = 0
      
  }
    drive(hours) {
 
this.distance += this.speed * hours;
      
  }
}
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.dir(Car.getSpecs(mustang));
console.dir(mustang);
console.log(mustang.accelerate(50));
'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(250);
mustang.drive(1);
mustang.turnOff();



console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.dir(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000