import react, {Component} from "react";
import { Form, FormGroup, Label, Input, Button, FormControls } from "reactstrap";
import Header from "../../Header";


export default class LandigPage extends Component{
  /*state = {
    model: {
      nome: "",
      email: "",
      observacoes: "",
    }
  }
  setValues = (e, field) => {
    const {model} = this.state;
    model[field] = e.target.value;
    this.setState({model})
  }
  */
  constructor(props) {
    super(props)
    this.state = {
        message : this.props.state? this.props.state.message: '',
    };
} 
  leadCollector = ()  => {
    const url = "http://localhost:8080/leads";
    let data = {
      nome: this.nome,
      email: this.email,
      observacoes:  this.observacoes,
    };
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    };
    fetch(url, requestInfo)
    .then(response => {
      return response
    });
  }
  
  render (){
        return (
            <div className="LandingPageForm">
        <Header title="Comunique-se com nós" />
        <hr/>
        <Form className="Form">
        <FormGroup>
            <Label for="nome"> Nome: </Label>
            <Input type="text" id="nome" onChange={e => this.nome = e.target.value} placeholder="Informe o seu nome: " />
          </FormGroup>
          <FormGroup>
            <Label for="email"> Email: </Label>
            <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="Informe o seu email: " />
          </FormGroup>
          <FormGroup>
            <Label for="observacoes"> Observações</Label>
            <textarea className="form-control" id="observacoes" rows="5"  onChange={e => this.observacoes = e.target.value} placeholder="Informe o que sabor de arepa vc gostaria nosso cardapio: " />
          </FormGroup>
          <Button color="primary" block onClick={this.leadCollector}> Enviar </Button>
        </Form>
      </div>
        );
    }
}