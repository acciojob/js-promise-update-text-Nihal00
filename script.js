//your JS code here. If required.
const prom1 = new Promise((resolve) => setTimeout(resolve, 1000, "Hello, world!"));

prom1.then((value) => document.getElementById('output').innerText = value);