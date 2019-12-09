/*
Problem --
A prime is a natural number greater than  that has no positive divisors other than  and itself. Given  integers, determine the primality of each integer and print whether it is Prime or Not prime on a new line.

Note: If possible, try to come up with an  primality algorithm, or see what sort of optimizations you can come up with for an  algorithm. Be sure to check out the Editorial after submitting your code!

Function Description --
Complete the primality function in the editor below. It should return Prime if  is prime, or Not prime.
primality has the following parameter(s):
n: an integer to test for primality

Input Format --
The first line contains an integer, , denoting the number of integers to check for primality.
Each of the  subsequent lines contains an integer, , the number you must test for primality.

Constraints --
1 <= p <= 30
1 <= n <= 2 * 10^9

Output Format --
For each integer, print whether  is Prime or Not prime on a new line.

Sample Input --
3
12
5
7

Sample Output --
Not prime
Prime
Prime

Explanation --
We check the following  integers for primality:
is divisible by numbers other than  and itself (i.e.: , , , ), so we print Not prime on a new line.
is only divisible  and itself, so we print Prime on a new line.
is only divisible  and itself, so we print Prime on a new line.

*/


// lets start with a naieve approach O(n / 2) => O(n)?
// a simple solution
// if n <= 1
//   return "Not prime"
// maxDivisor = n // 2for i = 2; i <= maxDivisor; i++
//   if n % i == 0
//     return "Not prime"
// return "Prime"
​
// Times Complexity O(n)
// function primality(n) {
//     // test a base case where n == 1 // O(1)
//     if (n == 1) {
//         // return "Not prime" // O(1)
//         return "Not prime";
//     }
// ​
//     // iterate over 2 to n / 2 O((n / 2) - 1) => O(n)
//     for (let i = 2; i <= n / 2; i++) {
//         // test if the mod of n and i are equal to zero
//         if (n % i == 0) { // O(1)
//             // if so it is not a prime (return "Not prime")
//             return "Not prime"; // O(1)
//         }
//     }
// ​
//     // if we reach the end of the itterations return "Prime"
//     return "Prime"; // O(1)
// }
// ​


​
// can we then optimize this runtime to O(sqrt(n))??​
// import math lib
​
// O(sqrt(n)) Time Complexity
// O(1) Space Complexity
​
function primality(n) {
    // base case of if n is less than 2
    if (n < 2) { // O(1)
        // return "Not prime"
        return "Not prime"; // O(1)
    }
​
    // iterate over the problem set using Math.sqrt wheve n starts at 2
    // and end at the sqrt(n)
    for (let i = 2; i <= Math.sqrt(n); i++) { // O(sqrt(n))
​
        // test if mod of n and i are equal to zero
        if (n % i == 0) { // O(1 * n) => O(1)
            // return "Not prime"
            return "Not prime"; // O(1 * n) O(1)
        }
    }
​
    // if it falls past the iteration we must return "Prime"
    return "Prime"; // O(1)
}