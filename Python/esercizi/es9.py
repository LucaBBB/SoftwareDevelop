# Scrivi una funzione che restituisca la lunghezza di una stringa o lista passata come parametro. In sostanza, seppur presente, provate a scrivere la vostra versione della funzione len()!

def length(stringa):
    lunghezza = 0
    for char in stringa:
        lunghezza += 1

    print("Lunghezza di ", stringa, " == ", lunghezza)


stringa = input("Inserire la stringa: ")
if stringa != "":
    length(stringa)
else:
    print("Stringa vuota, lunghezza ovviamente pari a 0")
