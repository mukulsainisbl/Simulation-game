function vehicle(brand,model,speed,fueltype){
    this.brand=brand;
    this.model=model;
    this.speed=speed;
    this.fueltype=fueltype;


}

vehicle.prototype.accelerate=function(){
    this.speed+=10;
    console.log("You accelaration is working",this.speed)

}
vehicle.prototype.brake=function(){
  this.speed-=5;
  console.log("Your brake is working",this.speed)
}

vehicle.prototype.refuel=function(){
    console.log("Please refuel your vehicle")

}

function car(brand,model,speed,fueltype,noofwheel){
vehicle.call(this,brand,model,speed,fueltype)
this.noofwheel=noofwheel;
}

Object.setPrototypeOf(car.prototype,vehicle.prototype)

let car1 = new car ("TATA",2021,100,"Petrol",4)

console.log(car1)

car1.accelerate();
car1.brake();
car1.refuel();



function Aeroplane (brand, model,speed,fueltype,noofengine,hadLandingGear,noOfWheels){
    vehicle.call(this,brand,model,speed,fueltype)
    this.noofengine=noofengine;
    this.hadLandingGear=hadLandingGear;
    this.noOfWheels=noOfWheels;

}
Object.setPrototypeOf(Aeroplane.prototype,vehicle.prototype)

Aeroplane.prototype.takeoff=function(){
console.log(this.brand,"is takiing off");
}

let air1 = new Aeroplane("Indigo",2021,200,"Jet Fuel",2,"Yes",6)


air1.accelerate();
air1.brake();
air1.refuel();
air1.takeoff();
console.log(air1)

