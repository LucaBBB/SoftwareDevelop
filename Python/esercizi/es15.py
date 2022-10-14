def geometra(tipo):
    if tipo == 1:
        raggio = input("Inserire il valore del raggio: ")
        area = int(raggio) * int(raggio) * 3.14
        print(f"Area cerchio: {area}")
    elif tipo == 2:
        lato = input("Inserire il valore del lato: ")
        area = int(lato) * int(lato)
        print(f"Area quadrato: {area}")
    else:
        base = input("Inserire il valore della base: ")
        altezza = input("Inserire il valore dell'altezza: ")
        if tipo == 3:
            area = int(base) * int(altezza)
            print(f"Area rettangolo: {area}")
        else:
            area = (int(base) * int(altezza)) / 2
            print(f"Area triangolo: {area}")


operazione = input(
    "Inserire 1 per l'area del cerchio, 2 del quadrato, 3 del rettangolo o 4 del triangolo: ")
if operazione == "" or int(operazione) > 4 or int(operazione) < 1:
    print("Nessuna operazione disponibile")
else:
    geometra(int(operazione))
