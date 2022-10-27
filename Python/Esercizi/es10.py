def generatore_istogrammi(lista):
    for val in lista:
        stringa = ""
        for i in range(0, val):
            stringa += "*"
        print(stringa + "\n")
        

generatore_istogrammi([3, 7, 9, 5])