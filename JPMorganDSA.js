// Two Sum
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

//Reverse a String
function reverseString(str) {
  let reversed = "";
  for (let char of str) reversed = char + reversed;
  return reversed;
}

//Reverse a Array
const reverseArray = (s) => {
    let len = s.length;
    let halfLen = Math.floor(len / 2);

    for (let i = 0; i < halfLen; i++) {
        let temp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = temp;
    }

};

console.log(reverseArray(["h", "e", "l", "l", "o"])) //["o", "l", "l", "e", "h"]

//Palindrome Check
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (!s[i].match(/[a-z0-9]/i)) {
            ++i;
        }
        else if (!s[j].match(/[a-z0-9]/i)) {
            --j;
        }
        else if (s[i] === s[j]) {
            ++i;
            --j;
        }
        else {
            return false;
        }
    }
    return true;
};

//FizzBuzz
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

//Find Missing Number
// Example: [3,0,1] → 2

const missingNumber = (nums) => {
    let n = nums.length;
    let total_sum = (n * (n + 1)) / 2;
    let sum_of_array = 0;

    for (let num of nums) {
        sum_of_array += num;
    }

    return total_sum - sum_of_array;
};

console.log(missingNumber([3, 0, 1])) //2


//Remove Duplicates from Array
//Example: [1,1,2,3,3,4] → [1,2,3,4]
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

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

// Remove duplicates based on `age`
let array = [
  { "name": "Joe", "age": 17 },
  { "name": "Bob", "age": 17 },
  { "name": "Carl", "age": 35 }
];

function removeDuplicatesByProp(arr, prop) {
  const seen = {};
  return arr.filter(item => {
    if (seen[item[prop]]) {
      return false;
    }
    seen[item[prop]] = true;
    return true;
  });
}

console.log(removeDuplicatesByProp(array, "age"));

//Maximum Subarray Sum (Kadane’s Algorithm)
//Example: [-2,1,-3,4,-1,2,1,-5,4] → 6

function maxSubArray(nums) {
  let max = nums[0], current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    max = Math.max(max, current);
  }
  return max;
}

//Valid Parentheses
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

//Merge Two Sorted Arrays
const OptimalMerge = (nums1, m, nums2, n) => {
    let p1 = m - 1; // Last meaningful element of nums1
    let p2 = n - 1; // Last element of nums2

    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) break; // If nums2 is done, any remaining elements in nums1 are already in the correct place because the beginning of nums1 is already sorted.

        if (p1 >= 0 && nums1[p1] > nums2[p2]) { 
            nums1[i] = nums1[p1--];
        } else {
            nums1[i] = nums2[p2--];
        }
    }
};

console.log(OptimalMerge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) //[1,2,2,3,5,6]
console.log(OptimalMerge([1,2,3,0,0,0], 3, [4,5,6], 3)) //[1,2,3,4,5,6] //nums2 gets fully used before nums1

//Count Occurrences
// [1,2,2,3,3,3] → {1:1, 2:2, 3:3}
const countOccurrences = (arr) => {
    const counts = {};

    for (let num of arr) {
        // If num exists in counts, increment it; otherwise, initialize to 1
        counts[num] = (counts[num] || 0) + 1;
    }

    return counts;
};

// Example
const result = countOccurrences([1, 2, 2, 3, 3, 3]);
console.log(result); // { '1': 1, '2': 2, '3': 3 }


//Longest Substring Without Repeating Characters
const lengthOfLongestSubstring = (s) => {
    let set = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // If character is already in the set, remove from left until it's gone
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

// Examples
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3


//Group Anagrams : ["eat","tea","tan","ate","nat","bat"] → [["eat","tea","ate"],["tan","nat"],["bat"]]
var groupAnagrams = function(strs) {
    let map = {};

    for (let s of strs) {
        // frequency array for 'a' to 'z'
        let freqArr = Array(26).fill(0);

        for (let ch of s) {
            let index = ch.charCodeAt(0) - "a".charCodeAt(0);
            freqArr[index]++;
        }

        // use the frequency array as a unique key
        let key = freqArr.join(",");

        if (map[key]) {
            map[key].push(s);
        } else {
            map[key] = [s];
        }
    }

    return Object.values(map);
};

//Rotate Matrix (2D array) [[1,2],[3,4]] → [[3,1],[4,2]]
function rotate(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++)
    for (let j = i; j < n; j++) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  for (let row of matrix) row.reverse();
  return matrix;
}

//Sliding Window Maximum [1,3,-1,-3,5,3,6,7], k=3 → [3,3,5,5,6,7]
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