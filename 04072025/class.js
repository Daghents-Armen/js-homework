class Account{
    #balance
    constructor(accountHolder, accountNumber, balance) {
      this.accountHolder = accountHolder
      this.accountNumber = accountNumber
      this.#balance = 0
    }

    deposit(amount) {
      if (amount <= 0) {
        return `invalid amount --> ${amount}`
      }
      this.#balance += amount
      return `Your balance --> ${this.#balance}`
      
    }

    withdraw(amount) {
      if(amount > this.#balance) {
        return `can't be withdrawn --> ${amount}`
      }
      this.#balance -= amount;
      return `${this.#balance} amount of money is withdrawn`
    }

    getBalance() {
      return this.#balance
    }
}

class Bank{
    constructor() {
      this.accounts = []
    }

    addAccount(account) {
      this.accounts.push(account);
    }

    findAccount(accountNumber) {
      return this.accounts.find(function(n){
      return n.accountNumber === accountNumber})
    }

    getTotalBalance() {
      return this.accounts.reduce(function(sum,n){
        return sum += n.getBalance()
      }, 0)
    }
}

let account1 = new Account('Elvis', 1111)
let account2 = new Account('Steve', 2222)
let account3 = new Account('James', 3333)
   
account1.deposit(500)
console.log(account1.withdraw(300))
console.log(account1.getBalance())

account2.deposit(200)
console.log(account2.withdraw(220))
console.log(account2.getBalance());

account3.deposit(200);
console.log(account3.withdraw(200))
console.log(account2.getBalance());
