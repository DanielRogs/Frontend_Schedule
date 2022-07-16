import React from "react"


Interface State {
    
}

class CadastroCard extends React.Component<{}, State>{
    constructor(Props: any) {
        super(Props)
    }

  handleclickCadastro(e:React.MouseEvent<HTMLElement>){
    if (this.state.password != this.state.confpassword){
        alert("A senha e a confirmação de senha estão diferentes")
        return
    }

    const {name, email, password} = this.state
    cadastro(name,email,password)



  }

    render(): React.ReactNode {
        return (
            <Div>
                    <DivTittle>
                        <Tittle>Cadastro</Tittle>
                    </DivTittle>
                    <form>

                        <DivInput>
                            <CadInputsNames
                                titulo="Name:"
                                tipo="text"
                                value={this.state.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ name: e.target.value }) }} />

                            <CadInputsNames
                                titulo="Email:"
                                tipo="email"
                                value={this.state.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ email: e.target.value }) }} />

                            <CadInputsNames
                                titulo="Senha:"
                                tipo="password"
                                value={this.state.password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ password: e.target.value }) }} />

                            <CadInputsNames
                                titulo="Confirme a senha:"
                                tipo="password"
                                value={this.state.confpassword}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ confpassword: e.target.value }) }} />
                        </DivInput>

                        <DivButton>
                            <Submit onClick={this.handleclickCadastro.bind(this)} color="#01C77F" padding={20} Tletra={15} type='submit'>Cadastrar</Submit>
                        </DivButton>
                    </form>
            </Div>

            


        )
    }


}

export default CadastroCard;