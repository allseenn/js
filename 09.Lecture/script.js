const product = {
    name: 'Milk', 
    price: 15,
    count: 2,
    userRegistered: false,
    reg: function() {
        this.userRegistered = true;
    },
    countProduct: function() {
        if (this.count > 0) {
            console.log('buy good');
            
        } else {
            console.log('you cant buy thi product');
        }
    },
    buyProduct: function() {
        if (this.userRegistered) {
            console.log('good in basket');
        } else {
            console.log('you must be registered');
        }
    }
};

// let productSale = product;
// productSale.price = 10;
// console.log(product.price, productSale.price);
// let productNew = product;
// productNew.text = 'lorem';
// console.log(product, productNew);

// product.buyProduct();
// product.reg();
// product.buyProduct();

const array = [1, 2, 3, 10, 15];
console.log(array.map(salary => salary*2));
console.log(array.filter(salary => salary >= 10));
console.log(array.some(salary => salary >= 10));
console.log(array.every(salary => salary >= 10));
console.log(array.reduce((a, b) => a + b));