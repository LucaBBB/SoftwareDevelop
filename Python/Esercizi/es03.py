def maxAll(lista):
    max = 0
    for num in lista:
        if num > max:
            max = num
    print("Il maggiore nella lista e':", max)

maxAll([1, 3, 0, 2, 5, 4])