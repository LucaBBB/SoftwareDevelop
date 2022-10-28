import random


def mac_generator():
    caratteri_mac = "0123456789ABCDEF"
    mac_list = []

    for i in range(0, 6):
        mac_list += random.choices(caratteri_mac, k=2)
    
    mac_address = ''.join(mac_list)

    print(mac_address)
        
        
mac_generator()