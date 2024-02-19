const students = [
  {id:12, name: 'John'},
  {id:22, name: 'vhon'},
  {id:32, name: 'fon'},
];

const names = students.map(x => x.name);
const ids = students.map(x => x.id);
const up20 =students.filter(x => x.id>20);
console.log(up20);

// const studentsName = [];
// for (let i = 0; i < students.length; i++) {
//   const element = students[i];
//   studentsName.push(element.name);
// }
// console.log(studentsName);
// for (let i = 0; i < studentsName.length; i++) {
//   const element = studentsName[i];
//   console.log(element)
// }
  