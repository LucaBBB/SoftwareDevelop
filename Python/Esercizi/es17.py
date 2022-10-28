def tempo(giorni, ore, minuti):
    fattore_conversione_minuti = 60
    fattore_conversione_ore = fattore_conversione_minuti * 60
    fattore_conversione_giorni = fattore_conversione_ore * 24
    da_minuti = minuti * fattore_conversione_minuti
    da_ore = ore * fattore_conversione_ore
    da_giorni = giorni * fattore_conversione_giorni

    print(f'In {giorni} giorni ci sono {da_giorni}')
    print(f'In {ore} giorni ci sono {da_ore}')
    print(f'In {minuti} giorni ci sono {da_minuti}')



tempo(1, 1, 1)