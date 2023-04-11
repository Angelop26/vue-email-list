const {createApp} = Vue

createApp({
    data(){
        return{
            emailArray:[]
        }
    },
    methods:{
        emailGenerator(){
             const emails=[]
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) =>{    
                emails.push(resp.data.response)
                if (emails.length === 10) {
                    this.emailArray = emails
                }
                })
            }
        }
    }
}).mount('#app')