/*
Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .

Function Description

Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

c: an array of binary integers
Input Format

The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

Constraints

Output Format

Print the minimum number of jumps needed to win the game.

Sample Input 0

7
0 0 1 0 0 1 0
Sample Output 0

4
Explanation 0:
Emma must avoid  and . She can win the game with a minimum of  jumps:

jump(2).png

Sample Input 1

6
0 0 0 0 1 0
Sample Output 1

3
Explanation 1:
The only thundercloud to avoid is . Emma can win the game in  jumps:

jump(5).png
*/


// function jumpingOnClouds(c) {
//     // counting steps
//     let count = 0;
//     // keep check of index
//     let index = 0;
//     // while the string has data in it
//     while (true) {
//         // check if the index is equal or greater
//         // than the length of the number of elements - 1
//         if (index >= c.length - 1) {
//             // return count
//             return count;
//         }
//         // if the index +1 = the len of the arr - 1
//         if (index + 1 == c.length - 1) {
//             // increment count by 1
//             count++;
//             // return count
//             return count;
//         }
//         // if c index + 1 = 0 and c index + 2 = 1
//         if (c[index + 1] == 0 && c[index + 2] == 1) {
//             // increase count by 1
//             count++;
//             // increase index by 1
//             index++;
//         }
//         // else if c at index + 2 = 0
//         else if (c[index + 2] == 0) {
//             // increase index by 2
//             index += 2;
//             // increase count by 1
//             count++;
//         }
//     }​
// }


// IMPROVED SOLUTION
function jumpingOnClouds(c) {
    // current cloud id = 0
    let currentCloud = 0;
    // jumps = 0
    let jumps = 0;
    // while true
    while (true) {
        // clounInOneJump
        let cloudInOneJumps = currentCloud + 1;
​
        // cloudInTwoJumps
        let cloudInTwoJumps = currentCloud + 2;
​
        //   if cloud in 2 jumps id < length of c and c[id] != 1
        if (cloudInTwoJumps < c.length && c[cloudInTwoJumps] != 1 ) {
            //     current cloud id = cloud id in 2 jumps id
            currentCloud = cloudInTwoJumps;
        }
        //   else if cloud id in 1 jumps < length of c
        else if (cloudInOneJumps < c.length) {
        //     current cloud id = cloud in 1 jump id
        currentCloud = cloudInOneJumps;
        }
        //   else
        else {
        //     return jumps
            return jumps;
        }
        //   jumps++
        jumps++;
    }
}



// def jumpingOnClouds(c):
//     # set the current cloud and the number of jumps both to zero
//     current_cloud = 0
//     number_of_jumps = 0
// ​
//     # while the current cloud is less than the length of c minus one
//     while current_cloud < len(c) - 1:
//         # if the current cloud + 2 is less than the length of c
//         # and c at the index of current cloud + 2 is not equal to 1
//         if current_cloud + 2 < len(c) and c[current_cloud + 2] != 1:
//             # increment the jumps by 1
//             number_of_jumps += 1
//             # increment the cloud by 2
//             current_cloud += 2
//         # otherwise
//         else:
//             # increment jumps by one
//             number_of_jumps += 1
//             # increment cloud by one
//             current_cloud += 1
// ​
//     # return number of jumps
//     return number_of_jumps
