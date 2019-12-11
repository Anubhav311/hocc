/*
Davis has a number of staircases in his house and he likes to climb each staircase 1, , or 3 steps at a time. Being a very precocious child, he wonders how many ways there are to reach the top of the staircase.

Given the respective heights for each of the  staircases in his house, find and print the number of ways he can climb each staircase, module 10^7 + 7 on a new line.

For example, there is s = 1 staircase in the house that is n = 5 steps high. Davis can step on the following sequences of steps:

1 1 1 1 1
1 1 1 2
1 1 2 1 
1 2 1 1
2 1 1 1
1 2 2
2 2 1
2 1 2
1 1 3
1 3 1
3 1 1
2 3
3 2
There are 13 possible ways he can take these 5 steps. 13%10000000007 = 13

Function Description--
Complete the stepPerms function in the editor below. It should recursively calculate and return the integer number of ways Davis can climb the staircase, modulo 10000000007.

stepPerms has the following parameter(s):

n: an integer, the number of stairs in the staircase

Input Format--
The first line contains a single integer, s, the number of staircases in his house.
Each of the following s lines contains a single integer, n, the height of staircase i.

Constraints--
1 <= s <= 5
1 <= n <= 36

Subtasks--
1 <= n <= 20 for 50% of the maximum score.

Output Format--
For each staircase, return the number of ways Davis can climb it as an integer.

Sample Input--
3
1
3
7

Sample Output--
1
4
44

Explanation--
Let's calculate the number of ways of climbing the first two of the Davis' s = 3 staircases:

1. The first staircase only has n = 1 step, so there is only one way for him to climb it (i.e., by jumping 1 step). Thus, we print 1 on a new line.

2. The second staircase has n = 3 steps and he can climb it in any of the four following ways:
1. 1 -> 1 -> 1
2. 1 -> 2
3. 2 -> 1
4. 3

Thus, we print 4 on a new line.
*/