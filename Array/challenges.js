//1. Reverse String.js
// 1. Convert string to array (split method)
// 2. Reverse the array (reverse method)
// 3. Convert array back to string (join method)

const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("hello"));

// 2. Palindromes.js
// 1. Convert string to array (split method)
// 2. Reverse the array (reverse method)
// 3. Convert array back to string (join method)
// 4. Compare strings

const palindrome = (str) => str.split("").reverse().join("") === str;

console.log(palindrome("cddc"));
console.log(palindrome("Hello"));

//3. Integer Reversal.js (1234 -> 4321)
// 1. Convert number to string (toString method)
// 2. Convert String to array (split method)
// 3. Reverse the string (reverse method)
// 4. Convert array back to string (join method)
// 5. Convert string to number (parseInt method)
// 6.  restore the original sign (positive or negative). (Math.sign(n))
// 7. Return the number

const reverseInt = (n) => {
  const reversed = n.toString().split("").reverse().join("");
  console.log(Math.sign(n)) // -1
  return parseInt(reversed) * Math.sign(n);
};

console.log(reverseInt(-123));

// 4. Sentence Capitalization.js
// 1. Make the string lowercase (toLowerCase method)
// 2. Convert string to array (split method)
// 3. Capitalize each word (map method)
// 3. Convert array back to string (join method)

let text = "i am software developer";

let capitalizedText = text.split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

console.log(capitalizedText);  // Output: "I Am Software Developer"

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + "..."
  } else {
    return str
  }
}

console.log(truncate("Amit Singh is the Best Coder", 9))

const generateOTP = (length = 6) => {
  let otp = '';
  const digits = '0123456789';

  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }

  return otp;
}

console.log(generateOTP(4));


const randomIdGenerator = () => {
  return Date.now()
}

console.log(randomIdGenerator())

//5. FizzBuzz.js
// 1. Print numbers from 1 to n
// 2. If number is divisible by 3, print "Fizz"
// 3. If number is divisible by 5, print "Buzz"
// 4. If number is divisible by 3 and 5, print "FizzBuzz"
// 5. Else, print the number

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(15);

//6. MaxProfit.js
//Best Time to Buy and Sell Stock is a problem we have the stock price of future stocks in array format
//so you have to tell on which day you will buy and on which day you will sell so that you can have a maximum profit


const maxProfitWithDays = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;
  let buyDay = 0;
  let sellDay = 0;
  let tempBuyDay = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      tempBuyDay = i;
    }

    const potentialProfit = prices[i] - minPrice;
    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
      buyDay = tempBuyDay;
      sellDay = i;
    }
  }

  return {
    maxProfit,
    buyDay,
    sellDay
  };
};

const result = maxProfitWithDays([7, 1, 5, 3, 6, 4]);
console.log(`Max profit: ${result.maxProfit}, Buy on day ${result.buyDay}, Sell on day ${result.sellDay}`);

//7. Array Chunk.js
const chunk = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    // console.log("------------", chunk);
    chunked.push(chunk);
    index += size;
  }

  return chunked;
};

// console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

//Two Sum.js
// ⚠️ This is not better solution, we'll make it better 

function twoSum(nums, target) {
  // Loop through each number in the list
  for (let i = 0; i < nums.length; i++) {
    // For each number, check the rest of the list
    for (let j = i + 1; j < nums.length; j++) {
      // If the current number and the one we're checking add up to the target, return their indexes
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // If no matching pair is found, return an empty array
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 3, 7, 9, 2], 11));

function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in map) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 3, 7, 9, 2], 11));

function twoSub(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    // Check if nums[i] - target exists
    const needed = nums[i] - target;
    if (needed in map) {
      return [i, map[needed]];
    }


    map[nums[i]] = i;
  }

  return [];
}

console.log(twoSub([2, 7, 11, 15], 9));
console.log(twoSub([1, 3, 7, 9, 2], 11));

function threeSum(nums, target) {
  let result = [];
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const complement = target - (nums[i] + nums[j]);
      if (complement in hash) {
        result.push([nums[i], nums[j], complement]);
      } else {
        hash[nums[j]] = j;
      }
    }
  }

  return result;
}

console.log(threeSum([2, 7, 11, 15], 33))

const input = [[7, 11, 15], [7, 15, 11], [11, 15, 7]];

const unique = [
  ...new Set(input.map(arr => JSON.stringify(arr.sort((a, b) => a - b))))
].map(str => JSON.parse(str));

console.log(unique); // Output: [ [ 7, 11, 15 ] ]

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

const customFlat = (arr, depth = 1) => {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else {
      result.push(ar)
    }
  })
  return result;
}

console.log(customFlat(arr))

const fibonacciSequence = (number) => {
  let n1 = 0, n2 = 1, nextTerm;
  let sequence = [];
  for (let i = 1; i <= number; i++) {
    sequence.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return sequence;
};

console.log(fibonacciSequence(5));

function findDuplicateArray(arr) {
  const map = {};
  const duplicates = [];

  arr.forEach(item => {
    if (map[item]) {
      duplicates.push(item);
    } else {
      map[item] = true;
    }
  });
  return duplicates;
}

console.log("Duplicates:", findDuplicateArray([1, 2, 3, 4, 5, 2, 7, 8, 3, 4])); // Output: [2, 3, 4]

//What does new Set() do in JavaScript?
// A Set is a built-in object in JavaScript that lets you store unique values — it automatically removes duplicates.
let array = [
  { "name": "Joe", "age": 17 },
  { "name": "Bob", "age": 17 },
  { "name": "Carl", "age": 35 }
];

// Remove duplicates based on `age`
// findIndex returns the index of the first age number in the array
let uniqueArryObj = array.filter((item, index, self) =>
  index === self.findIndex((t) => t.age === item.age)
);

console.log(uniqueArryObj);


function findMinMax(arr) {
  let minValue = Infinity;
  let maxValue = -Infinity;
  for (let item of arr) {

    // Find minimum value
    if (item < minValue)
      minValue = item;

    // Find maximum value
    if (item > maxValue)
      maxValue = item;
  }
  return { min: minValue, max: maxValue }
}

console.log(findMinMax([1, 2, 3, 4, 2, 6, 10000, 8, 9, 2])); // Output: { min: 1, max: 9 }

function findKthMinMax(arr, k) {
  if (k <= 0 || k > arr.length) {
    return { error: "Invalid value of k" };
  }

  // Sort the array
  let sorted = [...arr].sort((a, b) => a - b);

  return {
    kthMin: sorted[k - 1],              // 0-based index
    kthMax: sorted[sorted.length - k]   // kth from the end
  };
}


console.log(findKthMinMax([7, 10, 4, 3, 20, 15], 3));

function secondLargest(arr) {
  if (arr.length < 2) return null;

  let first = -Infinity, second = -Infinity;

  for (const num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second !== -Infinity ? second : null;
}

console.log("Second largest element:", secondLargest([8, 20, 10, 10, 5, 8, 20])); // Output: 10

function thirdLargest(arr) {
  if (arr.length < 3) return null;

  let first = -Infinity, second = -Infinity, third = -Infinity;

  for (const num of arr) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num < first) {
      third = second;
      second = num;
    } else if (num > third && num < second) {
      third = num;
    }
  }

  return third !== -Infinity ? third : null;
}

console.log("Third largest element:", thirdLargest([8, 20, 10, 10, 5, 8, 20]));   // Output: 8


function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(["a", "c", "m", "b", "y"]))

function rotateArrayByK(arr, k) {
  const n = arr.length;
  k = k % n; // handle k > n

  if (k === 0 || n === 0) return arr;
  return arr.slice(n - k).concat(arr.slice(0, n - k));
}

console.log(rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5, 6, 7, 1, 2, 3, 4]

const rotateArrayByOneEle = (arr) => {
  // Remove the last element
  let lastElement = arr.pop();

  // Insert the removed element at the beginning
  arr.unshift(lastElement);

  return arr;
}


console.log(rotateArrayByOneEle([1, 2, 3, 4, 5]))

let arrForSort = [10, 2, 30, 1];
let words = ["banana", "apple", "cherry"];


let nums = arrForSort.sort((a, b) => a - b);
words.sort();

// users.sort((a, b) => a.age - b.age); //for array Object


console.log('numbers:', nums); // [1, 2, 10, 30]
console.log('words:', words); // ['apple', 'banana', 'cherry']

const sortWithOutInbuild = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }

    }
  }
  return array;
}

console.log(sortWithOutInbuild([10, 2, 30, 1]))
console.log(sortWithOutInbuild(["banana", "apple", "cherry"]))

function groupAnagrams(strs) {
  const anagramMap = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (anagramMap[sortedStr]) {
      anagramMap[sortedStr].push(str);
    } else {
      anagramMap[sortedStr] = [str];
    }
  }

  return Object.values(anagramMap);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groups = groupAnagrams(strs);

console.log(groups);
// Output: [["eat", "tea", "ate"], ["bat"], ["nat", "tan"]]


function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};


console.log("Maximum sum of subarray:", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log("Maximum sum of subarray:", maxSubArray([1])); //1

function findAllByKeyIgnoreCase(arr, key, keyword) {
  return arr.filter(item =>
    String(item[key]).toLowerCase() === String(keyword).toLowerCase()
  );
}


const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 25 },
  { id: 4, name: "alice", age: 22 }
];


console.log(findAllByKeyIgnoreCase(users, "name", "alice"));
// [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 4, name: 'alice', age: 22 }
// ]


//How can I run tasks based on a given concurrency, ensuring that when one task finishes, another task starts?
function createTaskManager(concurrency = 2) {
  let running = 0;
  const queue = [];

  function runNext() {
    if (running >= concurrency || queue.length === 0) return;

    //remove element from front
    const taskFn = queue.shift();
    running++;

    taskFn()
      .then(() => {
        // Task completed
      })
      .catch(err => {
        console.error('Task error:', err);
      })
      .finally(() => {
        running--;
        runNext(); // Start next task after one finishes
      });
  }

  function add(taskFn) {
    queue.push(taskFn);
    runNext();
  }

  function addMultiple(tasks) {
    tasks.forEach(task => add(task));
  }

  return { add, addMultiple };
}

// Example usage
const delayTask = (name, delay) => {
  return () => {
    return new Promise(resolve => {
      console.log(`Starting ${name}`);
      setTimeout(() => {
        console.log(`Finished ${name}`);
        resolve();
      }, delay);
    });
  };
};

const tasks = [
  delayTask("Task 1", 1000),
  delayTask("Task 2", 1500),
  delayTask("Task 3", 500),
  delayTask("Task 4", 2000),
  delayTask("Task 5", 800),
];

const manager = createTaskManager(2);
manager.addMultiple(tasks);

const maxSlidingWindowNaive = function (nums, k) {
  const result = [];
  const n = nums.length;

  for (let i = 0; i <= n - k; i++) {
    let max = nums[i];
    for (let j = i + 1; j < i + k; j++) {
      if (nums[j] > max) {
        max = nums[j];
      }
    }

    result.push(max);
  }

  return result;
};
console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Output: [3, 3, 5, 5, 6, 7]

const isValidParenthesis = (str) => {
  const stack = [];
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValidParenthesis("(){}[]")); // true
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("(")); // false

const longestCommonPrefix = (arr) => {
  if (arr.length === 0) return "";
  let prefix = arr[0]
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] !== arr[i][j]) {
        prefix = prefix.slice(0, j)
      }
    }
  }
  return prefix
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""

