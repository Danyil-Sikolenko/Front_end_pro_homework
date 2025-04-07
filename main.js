function allStudents(name, surename, birthyear, grades = []) {
    const attendance = [];

    for (let i = 0; i < 25; i++) {
        if (attendance.length < 25) {
            attendance.push(null);
        }
    }

    console.log(attendance);

    return {
        name,
        surename,
        birthyear,
        grades,
        attendance,

        ageCalculation() {
            const currentYear = new Date().getFullYear();
            console.log(`${name} Вік ${currentYear - birthyear}`)
        },

        gradesCalculate() {
            let sum = 0;
            grades.forEach(grade => {
                sum = sum + grade; 
            });

            if (grades.length > 0) {
                console.log(`Ваш середній бал ${name} ${sum / grades.length }`);
                return sum / grades.length
            }
            else {
                console.log(`Ваш середній бал ${sum}`);
                return 0;
            }
        },

        present() {
            const index = attendance.indexOf(null);
            if (index !== -1) {
                return attendance[index] = true;
            }
        },

        absent() {
            const index = attendance.indexOf(null);
            if (index !== -1) {
                return attendance[index] = false;
            }
        },

        summary() {
            const sumAttendance = attendance.filter(days => days === true).length / attendance.length
            const sumGrades = this.gradesCalculate();

            if (sumGrades > 90 && sumAttendance > 0.9) {
                console.log(`${name} Ви молодець!`);
            } else if (sumGrades > 90 || sumAttendance > 0.9) {
                console.log(`${name} Добре, але можна краще`);
            } else {
                console.log(`${name} Редиска`);
            }
        }
    }
}


const student1 = allStudents('Олександр', 'Шевченко', 1999)
const student2 = allStudents('Даниїл', 'Сіколенко', 2004)
const student3 = allStudents('Юлія', 'Сковорода', 1987)
student1.grades.push(95, 843, 92, 100, 76);
student2.grades.push(200, 45, 67, 100, 5);
student3.grades.push(24, 56, 75, 76, 76,)

student1.ageCalculation()
student2.ageCalculation()
student3.ageCalculation()

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

student1.summary()
student2.summary()
student3.summary()

console.log(student1)
console.log(student2)
console.log(student3)