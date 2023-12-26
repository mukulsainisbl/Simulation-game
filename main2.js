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



let mahindramotors = {
    name:"Thar",
    type:"Petrol",
    Noofwheeels:4,
    model:2021,
    hill:"Yes"
}

let hyundaimotors= Object.create(mahindramotors)

hyundaimotors.name="Venue";
hyundaimotors.model=2021;
hyundaimotors.type="petrol"
hyundaimotors.Noofwheeels=4;
hyundaimotors.hill="No";







let suzukimotors= Object.create(hyundaimotors)
suzukimotors.name="Baleno"
suzukimotors.model=2022;
suzukimotors.type="Diseal"
suzukimotors.Noofwheeels=4;
suzukimotors.hill="Yes";


console.log(suzukimotors)
