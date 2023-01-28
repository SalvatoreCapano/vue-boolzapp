const { createApp } = Vue;

createApp({

    data() {

        return {
            
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa, vediamoci un altro giorno.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        },
                        {
                            date: '18/04/2021 10:28:00',
                            message: 'Ciaooo',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
                ],
            currentChatIndex: -1,               //Indice chat cliccata
            currentMessage: "",                 //Messaggio digitato nell'input
            currentContact: undefined,          //Contatto presente nel pannello della chat
            searchBarInput: "",                 //Contatto cercato nella searchbar
            clickedMessageIndex: -1,            //Indice del messaggio cliccato nel pannello della chat
            isOnline: false,                    //True -> il contatto e' online   |   False -> il contatto e' offline
            isOnlineMsg: "Online",              // Puo' essere 'Online' o 'Sta scrivendo...'
            hideSidebar: false,                 //A seconda del valore, la sidebar viene nascosta o meno
            showMsgSearch: false,               //A seconda del valore, la searchbar dei messaggi e' mostrata o meno
            searchMsgInput: "",                 //Messaggio cercato nell'input
            attachmentUrl: undefined,
            isAttachment: false,
            settingsMenuOpen: false,
            isDarkMode: false
        };
    },

    methods: {
        getLastMsg (contact) {
            // Ritorna l'ultimo messaggio della chat, se presente, altrimenti una stringa vuota

            if (contact.messages != false) {
                let lastMsgIndex = contact.messages.length - 1;
                if (!contact.messages[lastMsgIndex].isAttachment) {
                    return contact.messages[lastMsgIndex].message;
                }
                else {
                    return "Foto";
                }
            }
            else {
                return "";
            }
        },
        deconstructDate () {
            // Dalla proprieta' "date" di ogni messaggio, che contiene la stringa indicante la data
            // dell'invio del messaggio, ricava un oggetto contenente la data divisa
            this.contacts.forEach(contact => {

                contact.messages.forEach(msg => {

                    const temp = msg.date.split(" ");

                    const fullDateArray = temp[0].split("/");
                    const timeArray = temp[1].split(":");

                    msg.newDate = {
                        day: fullDateArray[0],
                        month: fullDateArray[1],
                        year: fullDateArray[2],
                        hour: timeArray[0],
                        minute: timeArray[1],
                        second: timeArray[2]
                    }
                });
            });
        }, 
        getLastMsgTime (messageArray, direction) {
            // Ritorna l'ora o la data dell'ultimo messaggio della chat o
            // dell'ultimo messaggio ricevuto

            const date = new Date();
            let lastMsgIndex = messageArray.length - 1;

            if (lastMsgIndex >= 0) {
    
                // Calcolo ora ultimo messaggio inviato dal contatto
                if (direction == "received") {
                    let time= "";

                    do {
                        if (time != "") {    
                            lastMsgIndex--;
                        }
                        time = `${messageArray[lastMsgIndex].newDate.hour}:${messageArray[lastMsgIndex].newDate.minute}`;

                    } while ((messageArray[lastMsgIndex].status == "sent") && (lastMsgIndex > 0));

                    return time;

                    }
                //  Calcolo ora/data ultimo messaggio inviato da chiunque
                else if (direction == "any") {

                    // Se l'ultimo messaggio e' stato inviato oggi, mostra l'ora...
                    if ((messageArray[lastMsgIndex].newDate.day == date.getDay()) && (messageArray[lastMsgIndex].newDate.month == date.getMonth())) {
                        return `${messageArray[lastMsgIndex].newDate.hour}:${messageArray[lastMsgIndex].newDate.minute}`;
                    }
                    // ... altrimenti mostra la data
                    else {
                        return `${messageArray[lastMsgIndex].newDate.day}/${messageArray[lastMsgIndex].newDate.month}`;
                    }

                }
            }
        },
        openChat (contact, i) {
            // Aggiorna il contatto corrente e l'indice della chat corrente
            this.currentContact = contact;

            this.currentChatIndex = i;
        },
        addToMessageList (message, status, attachment) {
            // Aggiunge un messaggio all'array dei messaggi
            const date = new Date();
            this.currentContact.messages.push(
                {
                    message: message,
                    status: status,
                    isAttachment: attachment,
                    newDate: {
                        second: date.getSeconds(),
                        minute: date.getMinutes(),
                        hour: date.getHours(),
                        day: date.getDay(),
                        month: date.getMonth(),
                        year: date.getFullYear()
                    }
                }
            );
        },
        getResponse() {
            // Gestisce lo status del contatto e richiama la ricevuta di un nuovo messaggio

            let self = this;
            setTimeout(function(){
                self.isOnline = true;

                setTimeout(function(){
                    self.isOnlineMsg = "Sta scrivendo...";
                }, 1000)
                
            }, 500)

            setTimeout(function() {
                self.isOnlineMsg = "Online";
                self.addToMessageList("OK!", "received", false);
                self.setScrollDown ();

                setTimeout(function() {
                    self.isOnline = false;
                }, 1500)

            }, 3000)

        },
        sendMessage() {
            // Aggiunge il testo dell'input e l'orario attuale all'array dei messaggi

            this.addToMessageList(this.currentMessage, "sent", false);
            this.currentMessage = "";

            this.setScrollDown ();

            this.getResponse();
        },
        showOnSearchBar(contact) {
            // Se il nome del contatto e' contenuto nella stringa digitata nella searchbar, ritorna 'true'
            if (contact.name.toLowerCase().includes(this.searchBarInput.toLowerCase())) return true;
        },
        toggleMenu(i) {
            // Gestisce l'indice del messaggio al quale deve comparire il menu

            if (this.clickedMessageIndex == i) {
                this.clickedMessageIndex = -1;
            }
            else {
                this.clickedMessageIndex = i;
            }
        },
        deleteMsg(messageArray, i) {
            // Array -> lista di messaggi dalla quale eliminare il messaggio
            // i -> indice del messaggio da eliminare
            messageArray.splice(i, 1);

            // Chiude il menu'
            this.clickedMessageIndex = -1;
        },
        setScrollDown() {
            // Scrolla il pannello della chat se un nuovo messaggio e' aggiunto
            let chatContent = this.$refs.messagesContainer;

            setTimeout(function(){
                chatContent.scroll({ top: (chatContent.scrollHeight + 200), behavior: "smooth"});
            }, 5);
        },
        msgSearch(msg) {
            // Cerca msg tra i messaggi della chat corrente

            let stringToSearch = this.searchMsgInput.toLowerCase();

            // Contiene tutte le parole di msg, ripulito da caratteri speciali
            let filteredMsg = msg.message.toLowerCase().split(/[;,— ?!]+/);
            filteredMsg = filteredMsg.filter(word => word != "");

            if (filteredMsg.includes(stringToSearch)) return true;
        },
        getAttachment(event) {
            // Genera l'url dell'immagine inserita nell'input 'allegati'
            console.log(event.target.files[0]);
            const attachmentUrl = URL.createObjectURL(event.target.files[0]);

            this.addToMessageList(attachmentUrl, "sent", true);
            this.setScrollDown();

            setTimeout(() => {
                this.addToMessageList("../img/cat.jpg", "received", true);
                this.setScrollDown()
            }, 1000)
        }
    },
    
    beforeMount () {
        this.deconstructDate ();
    }

}).mount('#app');