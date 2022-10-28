import secrets
import string


def generatore(numero_caratteri):
    set_caratteri = string.ascii_letters + string.digits
    password = ''.join(secrets.choice(set_caratteri) for i in range(numero_caratteri))
    return password


def main():
    scelta_utente = input(
        "Inserire 1 se si desidera una password semplice, altrimenti 2 per una più complessa: ")
    if scelta_utente == "1":
        numero_caratteri = 8
        password = generatore(numero_caratteri)
        print(password)
    elif scelta_utente == "2":
        numero_caratteri = 20
        password = generatore(numero_caratteri)
        print(password)


main()
