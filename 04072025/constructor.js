function Account(accountHolder, accountNumber) {
    this.accountHolder = accountHolder
    this.accountNumber = accountNumber
    this.balance = 0
}

Account.prototype.deposit = function(amount) {
    if (amount <= 0) {
        return `insufficient amount --> ${amount}`
    }
    this.balance += amount;
    return `added ${amount}`;
}

Account.prototype.withdraw = function(amount) {
    if(amount > this.balance) {
        return `can't be withdrawn --> amount: ${amount}`
    }
    this.balance -= amount;
    return `${amount} withdrawn` 
}

Account.prototype.getBalance = function() {  
    return this.balance;
}

function Bank(accounts) {
    this.accounts = []
}

Bank.prototype.addAccount = function(account) {
    this.accounts.push(account);
    return `added account: ${account}`
}

Bank.prototype.findAccount = function(accountNumber) {
    return this.accounts.find(function(n){
        return n.accountNumber === accountNumber
    })
}

Bank.prototype.getTotalBalance = function() {
    return this.accounts.reduce(function(acc,n){
        return acc += n.getBalance();
    }, 0)
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