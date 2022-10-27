def lista_lunghezze(lista_parole):
    print(len(lista_parole))
    lista_lunghezze_parole = []
    
    for i in range(0, len(lista_parole)):
        lista_lunghezze_parole.append(len(lista_parole[i]))


print(lista_lunghezze(["re", "regina", "principe"]))