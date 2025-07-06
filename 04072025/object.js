function Account(accountHolder, accountNumber) {
    return {
        accountHolder: accountHolder,
        accountNumber: accountNumber,
        balance: 0,

         deposit: function(amount) {
            if(amount <= 0) {
                return `can't be deposited amount: ${amount}`;
            }
            this.balance += amount;
            return `added ${amount}$ to this balance`
        },

        withdraw: function(amount) {
            if(amount > this.balance) {
                return `inappropriation amount: ${amount}`
            }
            this.balance -= amount;
            return `withdrawn amount: ${amount}`;
        },

        getBalance: function() {
            console.log(`balance: ${this.balance}`);
            return this.balance;
        }
    }
}

function Bank(accounts) {
    return {
        accounts: [],

        addAccount: function(account) {
            this.accounts.push(account);
            return `added account: ${account.accountHolder}: ${account.accountNumber}`
        },

        findAccount: function(accountNumber) {
            for (let account of this.accounts) {
                if (account.accountNumber === accountNumber) {
                    return account
                }
            }
        },
        getTotalBalance: function() {
            let sum = 0
            for (let account of this.accounts) {
                sum += account.getBalance()
            }
            console.log(`total sum: ${sum}`)
            return sum;
        }
    }

}

let account1 = new Account('Elvis', 1111);
let account2 = new Account('Steve', 2222);
let account3 = new Account('James', 3333);
   
account1.deposit(500);
console.log(account1.withdraw(300));
console.log(account1.getBalance());

account2.deposit(200);
console.log(account2.withdraw(220));
console.log(account2.getBalance());

account3.deposit(200);
console.log(account3.withdraw(200));
console.log(account2.getBalance());

let ameria = Bank();

ameria.addAccount(account1);
ameria.addAccount(account2);
ameria.addAccount(account3);

console.log(ameria.addAccount(account1));
console.log(ameria.addAccount(account2));
console.log(ameria.addAccount(account3));