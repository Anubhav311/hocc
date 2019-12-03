'''
Telephone Words
Write a function that takes up to four digits of a phone number as a string, and returns a list of all of the words that can be written on the phone with that number. The permuted words should maintain the same order as the input digits. (You should return all permutations, not only English words.)

You're provided with a digits-to-letters mapping:

digits_to_letters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
}
For example, with the number 27, our function should return a list of all permutations that can be generated using the digits_to_letters mapping:

['AP', 'AQ', 'AR', 'AS', 'BP', 'BQ', 'BR', 'BS', 'CP', 'CQ', 'CR', 'CS']
'''

digits_to_letters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
}

# BRUTE FORCE SOLUTION
# we will assume only 2 digits
# 27
# def telephone_words(digits):
#     # store a list of perms for the result
#     perms = []
#     # check length of the digits
#     # if the lenght is 1 return single letter Perm
#     if len(digits) == 1:
#         # loop over letters in the digits to letters dictionary using the digit at 0th position as the KeyboardInterrupt
#         for l in digits_to_letters[int(digits[0])]:
#             perms.append(l)

#     # else if len is 2 
#     elif len(digits) == 2: 
#         # loop over letters in the digits to letters dictionary using the digit at 0th position as the KeyboardInterrupt
#         for l in digits_to_letters[int(digits[0])]:
#             perms.append(l)
#             # loop over the letters of the second digit
#             for m in digits_to_letters[int(digits[1])]:
#                 # concatonate the letters together and add them to the perms list
#                 perms.append(l + m)
#     elif len(digits) == 3: 
#         # loop over letters in the digits to letters dictionary using the digit at 0th position as the KeyboardInterrupt
#         for l in digits_to_letters[int(digits[0])]:
#             perms.append(l)
#             # loop over the letters of the second digit
#             for m in digits_to_letters[int(digits[1])]:
#                 # concatonate the letters together and add them to the perms list
#                 perms.append(l + m)
#                 for n in digits_to_letters[int(digits[2])]:
#                     # concatonate the letters together and add them to the perms list
#                     perms.append(l + m + n)
#     elif len(digits) == 4: 
#         # loop over letters in the digits to letters dictionary using the digit at 0th position as the KeyboardInterrupt
#         for l in digits_to_letters[int(digits[0])]:
#             perms.append(l)
#             # loop over the letters of the second digit
#             for m in digits_to_letters[int(digits[1])]:
#                 # concatonate the letters together and add them to the perms list
#                 perms.append(l + m)
#                 for n in digits_to_letters[int(digits[2])]:
#                     # concatonate the letters together and add them to the perms list
#                     perms.append(l + m + n)
#                     for o in digits_to_letters[int(digits[3])]:
#                         # concatonate the letters together and add them to the perms list
#                         perms.append(l + m + n + o)

#     # return perms list
#     return perms


# return perms list
#   return perms

# helper function
def helper_function(words_so_far, letters):
    # create a new list of words
    new_words = []
    # iterate ofer each word in the words so far list
    for word in words_so_far:
        # iterate over each letter in the letters list
        for letter in letters:
            # append the word and letter to the new words
            new_words.append(word + letter)
    # return new words
    return new_words

def telephone_words(digits):
    # perms list
    perms = ['']
    # iterate over the digits
    for digit in digits:
        # set perms the return value of our helper function using perms and the deigits to letters at the index of digit
        perms = helper_function(perms, digits_to_letters[int(digit)])
    # return perms
    return perms

print(telephone_words('27'))
