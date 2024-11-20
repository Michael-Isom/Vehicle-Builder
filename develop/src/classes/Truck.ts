import AbleToTow from '../interfaces/AbleToTow.js';
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';


class Truck extends Vehicle implements AbleToTow{
  vin: string;
  model: string;
  color: string; 
  make: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity?: number | undefined;
  type?: string | undefined;
  
  constructor(
    vin: string,
    model: string,
    color: string,
    make: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity?: number | undefined,
    
  ){
    super();
    this.vin = vin;
    this.model = model;
    this.color = color;
    this.make = make;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    if(wheels.length !== 4){
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }

    this.type = "Truck"
  }
    

  tow?(vehicle: Truck | Motorbike | Car): void {
  
    if(vehicle.make && vehicle.model !== null && this.towingCapacity !== undefined){
     
      if(vehicle.weight <= this.towingCapacity){
  
        console.log(`${vehicle} is being towed!`);

      } else {
     
        console.log(`${vehicle} is too heavy to be towed.`);
      }
    }
  }

  override printDetails(): void {
  
    super.printDetails();


    console.log(`VIN: ${this.vin}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);

 
    
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }
}


export default Truck;
