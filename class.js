class Student{
  constructor(sId, sName){
    this.id = sId;
    this.name = sName;
    this.class = "Class  Five"
  }
};

const student1 = new Student(12, "motin");
const student2 = new Student(22, "jotin");

console.log(student1, student2);