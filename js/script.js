// Attraverso l'apposita API di Boolean
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const { createApp } = Vue;

createApp({
    data() {
        return {
            rndEmails: [],
        }
    },
    created() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                console.log(resp.data.response);
                this.rndEmails = resp.data.response;
            });
    },
    methods() {

    }
}).mount("#app");