import react, {Component} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Header from "../../Header";


export default class LandigPage extends Component{
    render (){
        return (
            <div>
        <Header title="Comuniquese com nós" />
        <hr />
        <Form>
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
            <Input type="text" id="observavoes" placeholder="Informe se tem alguma Observação " />
          </FormGroup>
          <Button color="primary" block> Enviar </Button>
        </Form>
      </div>
        );
    }
}