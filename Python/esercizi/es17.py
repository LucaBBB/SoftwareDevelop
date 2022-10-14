# Scrivi una semplice funzione che converta un dato numero di giorni, ore e minuti, passati dall'utente tramite funzione input, in secondi.

def signore_del_tempo(giorni, ore, minuti):
    print(f"conversione giorni: {giorni*24*60*60}")
    print(f"conversione ore: {giorni*60*60}")
    print(f"conversione minuti: {giorni*60}")


signore_del_tempo(1, 1, 1)
