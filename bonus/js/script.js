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
            currentMessagesList: 0,
            currentActiveChat: -1,
            currentMessage: "",
            searchBarInput: "",
            clickedMessage: -1,
            isOnline: false,
            isOnlineMsg: "online",
            hideSidebar: false,
            hideChatPanel: true,
            showMsgSearch: false,
            searchMsgInput: ""
        };
    },

    methods: {
        assembleSrc(i) {
            return `../img/avatar${this.contacts[i].avatar}.jpg`;
        },
        getLastMsg (contact) {
            let lastMsgIndex = contact.messages.length - 1;
            return contact.messages[lastMsgIndex].message;
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
        getLastMsgTime (contact, direction) {
            // let self = this;
            // setInterval(function(){

                let lastMsgIndex = contact.messages.length - 1;

                const date = new Date();
    
                if (direction == "received") {
    
                    let time= "";
                    do {
                        if (time != "") {    
                            lastMsgIndex--;
                        }
                        time = `${contact.messages[lastMsgIndex].newDate.hour}:${contact.messages[lastMsgIndex].newDate.minute}`;
                    } while ((contact.messages[lastMsgIndex].status == "sent") && (lastMsgIndex > 0))
                    return time;
                }
                else {
    
                    if ((contact.messages[lastMsgIndex].newDate.day == date.getDay()) && (contact.messages[lastMsgIndex].newDate.month == date.getMonth())) {
                        return `${contact.messages[lastMsgIndex].newDate.hour}:${contact.messages[lastMsgIndex].newDate.minute}`;
                    }
                    else {
                        return `${contact.messages[lastMsgIndex].newDate.day}/${contact.messages[lastMsgIndex].newDate.month}`;
                    }
                }

            // }, 20)

            // let lastMsgIndex = contact.messages.length - 1;

            // const date = new Date();

            // if (direction == "received") {

            //     let time= "";
            //     do {
            //         if (time != "") {    
            //             lastMsgIndex--;
            //         }
            //         time = `${contact.messages[lastMsgIndex].newDate.hour}:${contact.messages[lastMsgIndex].newDate.minute}`;
            //     } while (contact.messages[lastMsgIndex].status == "sent")
            //     return time;
            // }
            // else {

            //     if ((contact.messages[lastMsgIndex].newDate.day == date.getDay()) && (contact.messages[lastMsgIndex].newDate.month == date.getMonth())) {
            //         return `${contact.messages[lastMsgIndex].newDate.hour}:${contact.messages[lastMsgIndex].newDate.minute}`;
            //     }
            //     else {
            //         return `${contact.messages[lastMsgIndex].newDate.day}/${contact.messages[lastMsgIndex].newDate.month}`;
            //     }
            // }
        },
        openChat (contact, i) {
            this.currentMessagesList = contact.messages;

            this.currentActiveChat = i;
        },
        checkMsgStatus(msg) {
            if (msg.status == "sent") return true;
            else return false;
        }, 
        getResponse() {
            const date = new Date();
            this.currentMessagesList.push(
                {
                    message: "OK!",
                    status: 'received',
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
            this.setScrollDown ();

            let self = this;
            setTimeout(function() {
                self.isOnlineMsg = "Online";

                setTimeout(function() {
                    self.isOnline = false;
                }, 1500)

            }, 10)
        },
        sendMessage() {
            const date = new Date();

            this.currentMessagesList.push(
                {
                    date: '10/01/2020 15:51:00',
                    message: this.currentMessage,
                    status: 'sent',
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
            console.log(this.currentMessagesList);
            this.currentMessage = "";

            this.setScrollDown ();

            let self = this;

            setTimeout(function(){
                self.isOnline = true;

                setTimeout(function(){
                    self.isOnlineMsg = "Sta scrivendo...";
                }, 1000)
                
            }, 500)

            setTimeout(this.getResponse, 3000);
        },
        showOnSearchBar(contact) {
            if (contact.name.toLowerCase().includes(this.searchBarInput.toLowerCase())) return true;
        },
        toggleMenu(i) {

            if (this.clickedMessage == i) {
                this.clickedMessage = -1;
            }
            else {
                this.clickedMessage = i;
            }
        },
        deleteMsg(array, i) {
            array.splice(i, 1);
            this.clickedMessage = -1;
        },
        setScrollDown() {
            let chatContent = this.$refs.messagesContainer;

            setTimeout(function(){
                chatContent.scroll({ top: (chatContent.scrollHeight + 200), behavior: "smooth"})
            }, 5);
        },
        msgSearch(msg) {
            let stringToSearch = this.searchMsgInput.toLowerCase();
            let tempMsg = msg.message.toLowerCase().split(/[;,— ?!]+/);
            const filteredMsg = tempMsg.filter(word => word != "");

            if (filteredMsg.includes(stringToSearch)) return true;
        }
    },
    
    beforeMount () {
        this.deconstructDate ();
    }

}).mount('#app');