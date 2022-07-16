import api from "./api"

export const login = async (email:string, password:string) :Promise<any> => {

    try{
        const res = await api.post('/login', {email,password})
        return {_id:res.data.user._id, name:res.data.user.name, email:res.data.user.email}

    }catch(err){
        alert(err)
        return null
    }

}

export const cadastro = async (name:string, email:string, password:string) =>{
    try {
        const res = await api.post('/user', {name, email, password})
        alert(res.data.message)
        
    } catch (err) {
        alert(err)
        
    }

}

