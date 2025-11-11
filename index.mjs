class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve) {
    setTimeout(() => resolve(this.num + 1), 1000);
  }
}

new Promise(resolve => resolve(1))
  .then(result => new Thenable(result))      // (1)
  .then(result => new Thenable(result))      // (2)
  .then(console.log);                       // (3)

