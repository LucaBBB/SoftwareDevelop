# Funzione che presi in input 3 valori restituisce qual è il maggiore

def max3(a, b, c):
    if a > b and a > c:
        print("a e' il maggiore")
    elif b > a and b > c:
        print("b e' il maggiore")
    elif c > a and c > b:
        print("c e' il maggiore")
    else:
        print("a, b e c sono uguali")


a = input("Inserire il valore di a: ")
b = input("Inserire il valore di b: ")
c = input("Inserire il valore di c: ")
max3(int(a), int(b), int(c))
