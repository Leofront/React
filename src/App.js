import React,{Component} from "react";
import './style.css'

class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        textoFrase: 'Frase número 1 aleatorio...',
      };

      this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'];
      
      this.quebraBiscoito = this.quebraBiscoito.bind(this);
    }

    quebraBiscoito(){
      let state = this.state;

      let numeroal = Math.floor(Math.random() * this.frases.length);
      state.textoFrase = this.frases[numeroal];
      this.setState(state);
    }
 
    render(){
      return(
          <div className="container">
            <img src={require('./assets/biscoito.png')} className="img"/> 
            <Botao nome="Abri Biscoito" acaoBtn={this.quebraBiscoito}/>
            <h3 className="textoFrase">"{this.state.textoFrase}"</h3>
          </div>
      );
    }
}

class Botao extends Component{

  render(){
    return(
      <div>
        <button className="botao" onClick={this.props.acaoBtn}>
          {this.props.nome}
        </button>
      </div>
    )
  }
}

export default App;