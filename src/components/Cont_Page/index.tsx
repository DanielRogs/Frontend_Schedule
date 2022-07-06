import React from 'react'
import { Button, Div, H1, Input } from './styled'

interface State{
    name:string,
    telefone:string,
    telefoneFixo:string,
    email:string
}
class Cont_Page extends React.Component<{},State>{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props:any){
        super(props)
        this.state ={name:"",telefone:"", telefoneFixo:"",email:""}
    }

    render(): React.ReactNode {
        return (
            <>
                <form>
                    <Div>
                    <H1>Adicionar contato:</H1>
                        <br />
                        <Input placeholder ='Nome do Contato' value={this.state.name} onChange= {(e:React.ChangeEvent<HTMLInputElement>)=> {this.setState({name:e.target.value})}}/>
                        <br /><br /><br />
                        <Input placeholder='Telefone' value={this.state.telefone} onChange= {(e:React.ChangeEvent<HTMLInputElement>)=> {this.setState({telefone:e.target.value})}}/>
                        <br /><br /><br />
                        <Input placeholder='Telefone Fixo (Opcional)' value={this.state.telefoneFixo} onChange= {(e:React.ChangeEvent<HTMLInputElement>)=> {this.setState({telefoneFixo:e.target.value})}}/>
                        <br /><br /><br />
                        <Input placeholder='E-mail' value={this.state.email} onChange= {(e:React.ChangeEvent<HTMLInputElement>)=> {this.setState({email:e.target.value})}}/>
                        <br /><br /><br />
                        <Button type='submit'>Contirmar</Button>
                    </Div>
                </form>
            </>
        )
    }

}

export default Cont_Page;