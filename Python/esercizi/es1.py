# Funzione che presi in input 2 valori restituisce qual è il maggiore

def max2(a, b):
    if a > b:
        print("a maggiore di b")
    elif b > a:
        print("b maggiore di a")
    else:
        print("a uguale a b")


a = input("Inserire il valore di a: ")
b = input("Inserire il valore di b: ")
max2(int(a), int(b))
