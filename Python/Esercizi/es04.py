def isVocale(carattere):
    vocali = "aeiou"

    if carattere in vocali:
        return True
    else:
        return False

print(isVocale("b"))