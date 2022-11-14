import mysql.connector
from mysql.connector import cursor

db = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "",
    database = "db_libreria"
)

cursor = db.cursor()
sql = "INSERT INTO libri (isbn, titolo, autore, anno, copie) VALUES (%s, %s, %s, %s, %s)"
values = [
    ("0002", "Il barone rampante", "Italo Calvino", 1957, 1),
    ("0003", "Il cavaliere inesistente", "Italo Calvino", 1959, 1)
]

# cursor.execute(sql, values)  per un solo nuovo record
cursor.executemany(sql, values)

db.commit()