# Lezione 06 - Stringhe -

# In Python si possono usare sia ' sia "
x = "ciao"
y = 'ciao'


# Stringhe multi-riga
stringa_multiriga = """ciao
sono
Luca """
print (stringa_multiriga)


# le stringhe sono trattate come array, quindi il get di un carattere, la lunghezza, i loop
print(x[0])                     # <-- carattere
print(len(x))                   # <-- lunghezza

for carattere in "computer":
    print(carattere)

z = "ciao sono luca"
print(x[:3])                    # <-- prendiamo una parte della stringa (da 0 a 2)
print(x[2:])                    # <-- dal carattere 2 (compreso) alla fine
print(x[2:7])                   # <-- dal carattere 2 (compreso) al 7 (non compreso)
print(x[:-5])                    # <-- dal fondo prende fino al 5o compreso


# metodi delle stringhe
x = "pippo"
print(x.upper)                 # <-- fa l'upper della stringa
print(x.lower)
print(x.strip)                 # <-- toglie gli spazi davanti ed in fondo
print(x.replace("o", "w"))     # <-- sostituisce tutte le o con w


# concatenazione di stringhe
x = "ciao sono "
y = "Luca"
print(x + y)


# format: permette la concatenzazione di stringhe e numeri
prova = "Ciao, sono Luca e sono nato il {} febbraio, peso {} e altezza {}"
giorno = 3
peso = 79
altezza = 178
print(prova.format(giorno, peso, altezza))


# escape dei caratteri
prova = "Ciao sono Luca e sono un \"bimbo\""
print(prova)