
class Wheel {
  private tireBrand: string;
  private diameter: number;



  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    this.tireBrand = tireBrand;
    this.diameter = diameter;
  
  }


  get getDiameter(): number {
    return this.diameter;
  }


  get getTireBrand(): string {
    return this.tireBrand;
  }
}


export default Wheel;
