let Profile = {
    name : 'Daniel',
    age : 20,
    city : 'Kharkiv',
    userProfile: function () {
         console.log(`My name: ${this.name}`)
         console.log(`Age: ${this.age}`)
         console.log(`My city: ${this.city}`)
    }
}
Profile.userProfile();