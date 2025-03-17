let phoneNumbers = {
    contacts : [
        {name: 'Daniel', number: '+09565535422', email: 'dan@gmail.com'},
        {name: 'Anna', number: '+13444475659', email: 'anna@gmail.com'}
    ],
    findFunc (name) {
        return this.contacts.find(contact => contact.name === name)
       
    },
    addFunc (name, number, email ) {
        this.contacts.push({name, number, email}) ;
        return  console.log(this.contacts)
    }
};
console.log(phoneNumbers.findFunc('Anna'))
console.log(phoneNumbers.addFunc('Liza', '+172415474576', 'liza@gmail.com'))
console.log(typeof(phoneNumbers.contacts))





