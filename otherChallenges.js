function addOneDay(date) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
}



let today = new Date("2025-02-28");
console.log("Today:", today);
console.log("Tomorrow:", addOneDay(today));


function formatDate(date) {
    console.log(date.getDate().toString())
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

let today2 = new Date("2025-02-28");
console.log("Today 2:", formatDate(today2));
console.log("Tomorrow 2:", formatDate(addOneDay(today2)));


function memoize(fn) {
    const cache = {}; 
    return function(...args) {
        const key = JSON.stringify(args); 
        if (cache[key]) {
            console.log('Fetching from cache for:', key);
            return cache[key]; 
        }
        console.log('Calculating result for:', key);
        const result = fn(...args); 
        cache[key] = result;
        return result;
    };
}

function calculateTax(price, taxRate) {
    return price + (price * taxRate);
}


const memoizedCalculateTax = memoize(calculateTax);


console.log(memoizedCalculateTax(100, 0.15)); // Calculating for first time
console.log(memoizedCalculateTax(100, 0.15)); // Fetching from cache
console.log(memoizedCalculateTax(200, 0.10)); // Calculating for new inputs
console.log(memoizedCalculateTax(100, 0.15)); // Fetching from cache


async function fetchWithRetry(url, maxRetries = 3) {
    let attempts = 0;

    while (attempts < maxRetries) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            attempts++;
            console.error(`Attempt ${attempts} failed:`, error);
            if (attempts >= maxRetries) {
                throw new Error("API request failed after 3 attempts");
            }
        }
    }
}

fetchWithRetry('https://dummyjson.com/products')
    .catch(error => console.error('Final Error:', error.message));
