// 1.  Create an Author class and a Book class.
// Author should have: name, email, gender.
// It should have appropriate getters and setters.
// It should have a toString method.
// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
// It should have a toString method.

class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.gender = gender;
        this.email = email;
    }
    get name() {
        return `${this.name}`;
    }
    set name(str) {
        return this._name = str;
    }
    toString() {
        return `Author's name is ${this.name}, he/she is a ${this.gender}, his/hers email is ${this.email}`;
    }
}

class Book extends Author {
    constructor(title, author, price, quantity) {
        super()
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
    get price() {
        return this._price;
    }
    set price($) {
        this._price = $;
    }
    getProfit() {
        return this.price * this.quantity;
    }
    toString() {
        return `${this.author} wrote the ${this.title}, in ${this.quantity}, it's cost ${this.price}`;
    }
}



// 2.  Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance,otherwise output “Amount exceeded balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.

class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    get accountName() {
        return this.name;
    }
    set accountName(value) {
        if (typeof value !== "string") {
            console.log("Does not fit ! Write again...")
        } else {
            return this.name = value;
        }
    }
    get constId() {
        return this.id;
    }
    get balanceAmount() {
        return this.balance;
    }
    set balanceAmount(value) {
        if (typeof value !== "number") {
            console.log("Does not fit ! Write again...")
        } else {
            return this.balance = value;
        }
    }
    credit(amount) {
        this.balance += amount;
        return this.balance;
    }
    debit(amount) {
        if (amount < this.balance) {
            this.balance -= amount;
            return this.balance;
        } else {
            return "Amount exceeded balance.";
        }
    }
    transferTo(anotherAccount, amount) {
        let anotherAccountBalance = 0;
        if (amount < this.balance) {
            return this.balance = this.balance - amount;
            anotherAccountBalance += amount;
        } else {
            return "Amount exceeded balance.";
        }
    }
    static identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name && accountFirst.balance === accountSecond.balance) {
            return `Accounts are same`;
        } else {
            return `Accounts are NOT same`;
        }
    }
    toString() {
        return `${this.name} has that ${this.id}, balance equal to ${this.balance}`;
    }
}