const _ = require("lodash");

let mean_val = _.mean([15, 7, 38, 46, 82]);

//console.log(mean_val);



let max_val = _.max([15, 7, 38, 46, 82]);
let min_val = _.min([15, 7, 38, 46, 82])
//console.log(max_val);
//console.log(min_val);

const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5, 4, 3, 2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4, 3, 3.5],
            weight: 5
        }
    ]
};
function a(user){
    console.log(user.name);
    console.log(user.surname);
    //console.log(user.allGrades[0].subjectName)
    let sum = 0;
    let weights = 0;
    for (const item of user.allGrades) {
        sum += _.sumBy(item.grades) * item.weight;
        weights += item.weight * item.grades.length;
    }

    console.log(sum / weights);
}
a(user);