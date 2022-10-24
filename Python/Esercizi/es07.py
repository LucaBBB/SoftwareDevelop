def reverser(stringa):
    stringa_revers = ""
    for i in range(len(stringa)-1, -1, -1):
        stringa_revers += stringa[i]
    print(stringa_revers)

reverser("matteo")
