def socio(elemento, lista):
    if elemento in lista:
        indice = lista.index(elemento)
        print(f'Elemento -{elemento}- nella lista alla posizione {indice}')
    else:
        print(f'Elemento -{elemento}- non presente nella lista')


socio("conte", ["re", "regina", "principe", "duca"])