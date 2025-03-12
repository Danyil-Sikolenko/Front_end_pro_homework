let company = {
    sales : [{name: 'John', salary: 1000},{name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        inrenals: [{name: 'Jack', salary: 1300}]
    }
};

console.log(company);

function sumSalary (departament) {
    console.log(company.salary)
    if (Array.isArray(departament)) {
        return departament.reduce((sum , subDep) => sum + subDep.salary, 0 )
    }
    return Object
    .values(departament)
    .reduce((sum , subDep) => sum + sumSalary(subDep), 0 )

}

console.log(
sumSalary(company)
)
