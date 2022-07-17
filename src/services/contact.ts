import api from "./api";


export const getContactUser = async (userId:string) :Promise<any> => {
    try{
        const res = await api.get('/contact',{params:{userId}})
        return res.data

    }catch{
        alert("não foi possível obter os contatos")
    }

}
