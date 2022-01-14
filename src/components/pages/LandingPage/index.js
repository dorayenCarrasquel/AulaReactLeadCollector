import react, {Component} from "react";
import { Form, FormGroup, Label, Input, Button, FormControls } from "reactstrap";
import Header from "../../Header";


export default class LandigPage extends Component{
    render (){
        return (
            <div className="LandingPageForm">
        <Header title="Comunique-se com nós" />
        <hr />
        <Form className="Form">
        <FormGroup>
            <Label for="nome"> Nome</Label>
            <Input type="text" id="nome" placeholder="Informe o seu nome: " />
          </FormGroup>
          <FormGroup>
            <Label for="email"> Email</Label>
            <Input type="text" id="email" placeholder="Informe o seu email: " />
          </FormGroup>
          <FormGroup>
            <Label for="observacoes"> Observações</Label>
            <textarea class="form-control" id="textarea" rows="5" placeholder="Informe o que sabor de arepa vc gostaria nosso cardapio: " />
          </FormGroup>
          <Button color="primary" block> Enviar </Button>
        </Form>
      </div>
        );
    }
}