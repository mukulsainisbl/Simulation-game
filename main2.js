function TataMotor(name,model,fueltype,nightVisionAssist,hillassist,ABS){
    this.name=name;
    this.model=model;
    this.fueltype=fueltype;
    this.nightVisionAssist=nightVisionAssist;
    this.hillassist=hillassist;
    this.ABS=ABS;

}

let car1 = new TataMotor("Nexon",2022,"Petrol","Yes","Yes","No")
let car2 = new TataMotor("Tiago",2021,"disel","No","No","Yes")


console.log(car1,car2)



