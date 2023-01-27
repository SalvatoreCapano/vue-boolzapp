# vue-boolzapp

Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto

Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)

Milestone 5 - opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

<!-- Idee Bonus -->
- invio allegati
- ordina contatti per ultimo messaggio
- divisione unico messaggio lungo
- pulsanti funzionanti
- Animazione banner notifiche
- dark mode
- invio emoji
- correggere ricezione del messaggio se cambio chat prima di riceverlo
    - ..e aggiungere notifica nuovo messaggio
- chiusura menu se si clicca fuori di esso

BONUS
- Nella schermata della chat, all'invio o la ricezione di un nuovo messaggio la pagina scrolla in basso per permettere di leggere senza dover scrollare manualmente
- Aggiunto stato ultimo accesso (Ora ultimo accesso, Online, Sta scrivendo...)
- Se non sono stati inviati messaggi oggi, nella lista chat viene riportata la DATA dell'ultimo messaggio
- Aggiunta versione mobile
- Aggiunta favicon
- Aggiunta possibilita' di cercare messaggi nella chat
- Aggiunta taglio dei messaggi nella chatlist se essi sono troppo lunghi