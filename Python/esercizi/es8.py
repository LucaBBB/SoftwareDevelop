def palindromo(stringa):
    lista = []
    for i in range(len(stringa)):
        if len(lista) == 0:
            lista.append(stringa[i])
        else:
            