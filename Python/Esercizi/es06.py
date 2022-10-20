def moltiplicatrice(listaNumeri):
    moltiplica = 1
    for numero in listaNumeri:
        moltiplica *= numero
    print("moltiplicatrice: ", moltiplica)

moltiplicatrice([1, 2, 3, 4, 10])