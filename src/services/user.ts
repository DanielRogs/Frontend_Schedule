import api from "./api"


export const login = async (email:string, password:string) => {

    try{
        const res = await api.post('/login', {email,password})
        alert(`meu nome é ${res.data.user.name}`)
        return {_id:res.data.user._id, name:res.data.user.name, email:res.data.user.email}

    }catch(err){
        alert(err)
        return null
    }

}


