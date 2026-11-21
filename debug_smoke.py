import sys
sys.path.insert(0, r'C:\Users\pc\Documents\M1\IACS\Project_EthicalHacking\aegis-p9-osint-maltego')
import src.osint_maltego_main as m
print('smoke' in dir(m))
smoke_items = [x for x in dir(m) if 'smoke' in x.lower()]
print('smoke items:', smoke_items)