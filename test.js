new Promise(resolve => setTimeout(() => resolve(1), 1000))
    .then(result => new Promise(resolve => setTimeout(() => resolve(result + 1), 1000)))
    .then(result => new Promise(resolve => setTimeout(() => resolve(result + 1), 1000)))
    .then(console.log);
