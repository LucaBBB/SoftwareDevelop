# Scrivi una funzione a cui passerai come parametro una stringa, e che manderà in print una versione inversa (al contrario) della stessa stringa (ad esempio "abcd" diventerà "dcba")

def reverser(stringa):
    stringaReversed = ""

    for i in range(len(stringa)-1, -1, -1):
        print(stringa[i])
        stringaReversed += stringa[i]
    print("stringa al contrario di ", stringa, ": ", stringaReversed)


stringa = input("Inserire la stringa per il reverse: ")
if stringa != "":
    reverser(stringa)
else:
    print("Non e' stata inserita alcuna stringa!")
