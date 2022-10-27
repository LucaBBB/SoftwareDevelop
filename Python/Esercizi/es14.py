def traduzione(parola):
    vocali = ['a', 'e', 'i', 'o', 'u']
    parola_tradotta = ""

    i = 0

    for carattere in parola:
        if carattere in vocali:
            parola_tradotta += carattere
        else:
            parola_tradotta = parola_tradotta + carattere + 'o' + carattere

    print(f'\nLa parola -{parola}- tradotta è -{parola_tradotta}-')


def main():
    print("Benvenuto al traduttore lingua_umana  -> rövarspråket")
    while True:
        parola = input(
            "\nInserisci la parola che desideri tradurre, NO per concludere: ")

        if (parola == "NO"):
            print("\nArrivederci alla prossima")
            break
        else:
            traduzione(parola)


main()