import React from "react";
import { Submit } from "../Button/styles";
import { Div, Tittle, Input, P , DivBottom} from "./styled";
import { Link } from "react-router-dom";
import { login } from "../../services/user";
import AuthContext from "../../context/AuthContext";

interface State {
  email: string;
  password: string;
}

class LoginCard extends React.Component<{}, State> {
  constructor(Props: any) {
    super(Props);
    this.state = { email: "", password: "" };
  }

  render(): React.ReactNode {
    return (
    <Div>
        <Tittle>Insira os seus dados:</Tittle>

          <Input
            placeholder="E-mail"
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ email: e.target.value });
            }}
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ password: e.target.value });
            }}
          />
        
        <DivBottom>
          <AuthContext.Consumer>
            {({ setUser }) => (
              <Submit
                onClick={async () =>
                  setUser(await login(this.state.email, this.state.password))
                }
                color="#01C77F"
                Tletra={20}
                padding={0}
                className="button log"
              >
                Entrar
              </Submit>
            )}
          </AuthContext.Consumer>

          <P>ou</P>

        <Link to="/cadastro">
          <Submit
            color="#129979"
            Tletra={20}
            padding={0}
            className="button cad"
          >
            Cadastre-se
          </Submit>
        </Link>
        </DivBottom>
    </Div>
    );
  }
}

export default LoginCard;
