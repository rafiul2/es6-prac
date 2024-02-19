class Parent {
  constructor(){
    this.fatherName = "Halim Ali";
  }
};

class Child extends Parent{
  constructor(name){
    super();
    this.name = name;
  }
  getFullName(){
    return this.name + " " + this.fatherName;
  }
};

const baby = new Child("motin");
const baby2 = new Child("kobir");
console.log(baby, baby2);
console.log(baby.getFullName());
console.log(baby2.getFullName());