class person {
    constructor(name, amount) {
        this.name = name;
        this.balance = 0;
    }
    addBalance(amount) {
        this.balance = this.balance + amount;
        console.log("The Updated Balance :", this.balance);
    }
    decreaseBalance(amount) {

        this.balance = this.balance - amount;
        if (this.balance >= 0) {
            console.log("The update Balance:", this.balance);

        } else {
            this.balance = 0;
            console.log("The balance is already 0", this.balance);

        }

    }
}


// let user = new person("kiran");

// user.addBalance(5);
// user.decreaseBalance(6);
// console.log(user);


class Customer extends person {
    constructor(name, age) {
        super();
        this.customerName = name;
        this.age = age;
    }
    printYourCustomerName() {
        console.log(this.customerName);
    }
}

const customer = new Customer("Kiran", 23);

console.log(customer);
customer.addBalance(10);
