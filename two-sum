// Pseudo code
// 1. Loop through nums
// 2. For each element of nums (loop1), loop through nums one again (loop2) this time starting with the element of nums whose index is element (loop1) + 1
// 3. Check whether curr element (loop1) + curr element (loop2) is equal to target
// 4. If yes, return the indeces of curr element (loop1) and curr element (loop2)
// 5. Else, continue looping

let nums = [3, 2, 3];
let target = 6;

/*
// #1 SOLUTION (BRUTE FORCE)
//
const twoSum = function (nums, target) {
    // If data type of nums is not only numbers
    // Clean nums here

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // In case there is no solution:
    // return null
};

// Complexity analysis (Big-O complexity) (= analysing the cost in terms of time/memory of an algorithm)
// O(n2) ("Big O squared")
*/

/*
// #2 SOLUTION (HASH TABLE)
//
// Aim: Eliminate the inner loop, thus reduce complexity to O(n)

//Pseudocode
// 1. Initialise obj with complements
// 1. Loop through nums
// 2. Check whether curr elem is complement for previous elem
// 3. If yes, return indeces of curr elem and previous elem
// 4. Else, store complement of curr elem to obj with complements
// 5. Continue iterating over nums

function twoSum(nums, target) {
    //Functions as a memory for twoSum
    let comp = {};
     
    for (let i = 0; i < nums.length; i++) {
        // Check whether the element currently looked at is the needed complement for one of the elements already looked at; if yes, return indices.
        if (comp[nums[i]] != undefined) {
            // Can't refactor as: if (nums[i]) because if nums[i] === 0, the expression is falsy because 0 is falsy, while 0 can be a valid element of nums.
            return [comp[nums[i]], i];
        }

        // Map complement to index (This index needs the following compelement to build the sum of target).
        comp[target - nums[i]] = i;
    }
}
*/

console.log(twoSum(nums, target));
