def len_custom(struttura_dati):
    lunghezza = 0

    for elem in struttura_dati:
        lunghezza += 1

    return lunghezza

print("Lunghezza: ", len_custom({"a", "b", "c"}))
