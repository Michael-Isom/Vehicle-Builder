
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Wheel from "./Wheel.js";
import Motorbike from "./Motorbike.js";



class Cli {
  vehicles: (Car | Motorbike | Truck)[] ;
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car)[] | (Motorbike)[] | (Truck)[]) {
    this.vehicles = vehicles;
  }


  static generateVin(): string {
  
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }


  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers: {selectedVehicleVin: string}) => {

        this.selectedVehicleVin = answers.selectedVehicleVin;

        this.performActions();
      });
  }


  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          choices: ['Car', 'Motorbike', 'Truck'],
        },
      ])
      .then((answers: {vehicleType: string}) => {
        if (answers.vehicleType === 'Car') {
     
          this.createCar();
        } else if(answers.vehicleType === "Truck"){
         
          this.createTruck();
        } else if(answers.vehicleType === "Motorbike"){
         
          this.createMotorbike();
        }
      });
  }


  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])
      .then((answers: {
        color: string;
        make: string;
        model: string;
        year: string;
        weight: string;
        topSpeed: string;
      }) => {
        const car = new Car(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
       
        this.vehicles.push(car);
       
        this.selectedVehicleVin = car.vin;
       
        this.performActions();
      });
  }


  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      .then((answers: {
        color: string;
        make: string;
        model: string;
        year: string;
        weight: string;
        topSpeed: string;
        towingCapacity: string;
      }) => {
        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [],
          parseInt(answers.towingCapacity)
        );

        this.vehicles.push(truck);
        this.selectedVehicleVin = truck.vin;
        this.performActions();
      });
  }


  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers: {
        color: string;
        make: string;
        model: string;
        year: string;
        weight: string;
        topSpeed: string;
        frontWheelDiameter: string;
        frontWheelBrand: string;
        rearWheelDiameter: string;
        rearWheelBrand: string;
      }) => {

        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [
            new Wheel(parseFloat(answers.frontWheelDiameter), answers.frontWheelBrand),
            new Wheel(parseFloat(answers.rearWheelDiameter), answers.rearWheelBrand)
          ]
        )

        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
        this.performActions();
      });
  }

  
  findVehicleToTow(truck: Truck): void { 
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers: {vehicleToTow: Car | Motorbike | Truck}) => {
        console.log(answers)

        
        if(answers.vehicleToTow instanceof Truck){
          
          console.log("A truck cannot tow itself!")
          this.performActions();
        } else if (answers.vehicleToTow instanceof Car || answers.vehicleToTow instanceof Motorbike) {
          //if it is not, tow the selected vehicle then perform actions on the truck to allow the user to select another action
          //ts ignore to ignore issue where object that can NEVER be undefined could "possibly" be undefined
          // @ts-ignore
          truck.tow(answers.vehicleToTow);
          this.performActions();
        }
      });
  }


  performActions(): void {
    
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Tow Vehicle',
            'Wheelie',
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers) => {

        if (answers.action === 'Print details') {
       
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
            }
          }
        } else if (answers.action === 'Start vehicle') {
    
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
            }
          }
        } else if (answers.action === 'Accelerate 5 MPH') {
 
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
            }
          }
        } else if (answers.action === 'Decelerate 5 MPH') {
        
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
            }
          }
        } else if (answers.action === 'Stop vehicle') {
         
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
            }
          }
        } else if (answers.action === 'Turn right') {
        
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
            }
          }
        } else if (answers.action === 'Turn left') {
     
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
            }
          }
        } else if (answers.action === 'Reverse') {
     
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
            }
          }
        } else if(answers.action === 'Tow Vehicle'){
          for (let i = 0; i < this.vehicles.length; i++) {
         
            if (this.vehicles[i].vin === this.selectedVehicleVin && this.vehicles[i] instanceof Truck) {
            
              this.findVehicleToTow(this.vehicles[i] as Truck);
              return;
            } 
          }
        
        } else if(answers.action === "Wheelie"){
          for (let i = 0; i < this.vehicles.length; i++) {
          
            if (this.vehicles[i].vin === this.selectedVehicleVin && this.vehicles[i] instanceof Motorbike) {
              //@ts-ignore
              (this.vehicles[i] as Motorbike).wheelie();
            } else if(this.vehicles[i].vin === this.selectedVehicleVin && this.vehicles[i] instanceof Car || Truck){
              console.log("ERROR! The selected vehicle must be a Motorbike to do a wheelie!!")
            }
          }

        } else if (answers.action === 'Select or create another vehicle') {
         
          this.startCli();
          return;
        } else {
      
          this.exit = true;
        }
        if (!this.exit) {
          
          this.performActions();
        }
      });
  }


  getClassName(){
    return this.constructor.name;
  }

 
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers: {CreateOrSelect: string}) => {
 
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}


export default Cli;
