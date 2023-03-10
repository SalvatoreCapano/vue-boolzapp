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
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
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
                            message: 'Ciao Claudia, hai novit???',
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
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
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
                            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
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
            currentMessagesList: 0,
            currentChatIndex: -1,
            currentMessage: "",
            searchBarInput: "",
            menuOpen: false,
            clickedMessageIndex: -1
        };
    },

    methods: {
        getLastMsg (contact) {
            if (contact.messages != false) {
                let lastMsgIndex = contact.messages.length - 1;
                return contact.messages[lastMsgIndex].message;
            }
            else {
                return "";
            }
        },
        deconstructDate () {
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
        getLastMsgTime (contact) {
            let lastMsgIndex = contact.messages.length - 1;
            return `${contact.messages[lastMsgIndex].newDate.hour}:${contact.messages[lastMsgIndex].newDate.minute}`
        },
        openChat (contact, i) {
            this.currentContact = contact;

            this.currentChatIndex = i;
        },
        addToMessageList (message, status) {
            // Aggiunge un messaggio all'array dei messaggi
            const date = new Date();
            this.currentContact.messages.push(
                {
                    message: message,
                    status: status,
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
            this.addToMessageList("OK!", "received");
        },
        sendMessage() {
            this.addToMessageList(this.currentMessage, "sent");
            this.currentMessage = "";

            setTimeout(this.getResponse, 1000);
        },
        showOnSearchBar(contact) {
            if (contact.name.toLowerCase().includes(this.searchBarInput.toLowerCase())) return true;
        },
        toggleMenu(i) {

            if (this.clickedMessageIndex == i) {
                this.clickedMessageIndex = -1;
            }
            else {
                this.clickedMessageIndex = i;
            }
        },
        deleteMsg(array, i) {
            array.splice(i, 1);
            this.clickedMessageIndex = -1;
        },
    },
    
    beforeMount () {
        this.deconstructDate ();
    }

}).mount('#app');