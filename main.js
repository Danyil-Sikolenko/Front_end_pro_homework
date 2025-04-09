class BankAccount {
    #balance = 0

    constructor(initialBalance = 0) {
        this.#balance = initialBalance
    }
    getBalance() {
        return `Ваш поточний баланс : ${this.#balance}` 
    }
    deposit(attachment) {
        return this.#balance += attachment

    }
    withdraw(withdrawn) {
        return this.#balance -= withdrawn

    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance()); 