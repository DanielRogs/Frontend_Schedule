import api from "./api";


export const getContactUser = async (userId:string) :Promise<any> => {
    try{
        const res = await api.get('/contact',{params:{userId}})
        return res.data

    }catch{
        alert("não foi possível obter os contatos")
    }

}

export const addContact = async (name:string, lastname:string, phone:string, email:string, userId:string) :Promise<any> => {
    try{
        await api.post('/contact',{
            name,
            lastname,
            phone, 
            email,
            userId
        })


    }catch{
        alert("não foi possível cadastrar o contato.")

    }
}
