'''
You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

For example, given an array of [1, 2, 3, 4] and a target value of 1, we have three values meeting the condition: , , and .

Function Description

Complete the pairs function below. It must return an integer representing the number of element pairs having the required difference.

pairs has the following parameter(s):

k: an integer, the target difference
arr: an array of integers
Input Format

The first line contains two space-separated integers  and , the size of  and the target value.
The second line contains  space-separated integers of the array .

Constraints

each integer  will be unique
Output Format

An integer representing the number of pairs of integers whose difference is .

Sample Input

5 2  
1 5 3 4 2  
Sample Output

3
Explanation

There are 3 pairs of integers in the set with a difference of 2: [5,3], [4,2] and [3,1] .
'''

def pairs(k, arr):
    # set count to zero
    count = 0

    # dictionary comprehension for the hash table
    d = {n:1 for n in arr}

    # iterate over the arr
    for n in arr:

        # if n - k in the keys of out dictionary
        if n - k in d.keys():

            # increment count
            count += 1
    # return count
    return count

arr = []
for i in range(200000):
    arr.append(i * 12)
print("Ready")
# arr = [1, 5, 3, 4, 2]
k = 120

print(pairs(k, arr)) # => 3
