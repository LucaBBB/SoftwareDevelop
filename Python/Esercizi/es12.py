def frequenzimetro(stringa):
    dizionario = {}
    
    for carattere in stringa:
        if carattere in dizionario:
            dizionario[carattere] = dizionario[carattere] + 1
        else:
            dizionario.update({carattere: 1})

    print(dizionario)


frequenzimetro("Supercalifragilistichespiralidoso")