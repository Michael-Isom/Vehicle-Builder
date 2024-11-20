
import Car from "../classes/Car.js";
import Truck from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";



interface AbleToTow {

    towingCapacity?: number | undefined;
   
    tow?(vehicle: Truck | Motorbike | Car): void;
}


export default AbleToTow;
