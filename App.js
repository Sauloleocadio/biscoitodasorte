import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
      'Imagine uma nova história para sua vida e acredite nela.',
      'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.',
      'Ser feliz sem motivo é a mais autêntica forma de felicidade.',
      'Não existe um caminho para a felicidade. A felicidade é o caminho.',
      'Não espere por uma crise para descobrir o que é importante em sua vida.',
      'Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade.',
      'A alegria de fazer o bem é a única felicidade verdadeira.',
      'Não permito que nenhuma reflexão filosófica me tire a alegria das coisas simples da vida.',
      'Perder tempo em aprender coisas que não interessam, priva-nos de descobrir coisas interessantes.',
      'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',
      'É bem difícil descobrir o que gera a felicidade; pobreza e riqueza falharam nisso.',
      'Pessimismo leva à fraqueza, otimismo ao poder.',
      'O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.',
      'O pessimismo, depois de você se acostumar a ele, é tão agradável quanto o otimismo.',
      'Somente quando encontramos o amor, é que descobrimos o que nos faltava na vida.',
      'Se um homem não descobriu nada pelo qual morreria, não está pronto para viver.',
      'Nada se perde, tudo muda de dono - tardia reflexão de Lavoisier ao descobrir que lhe haviam roubado a carteira.',
      'Para os crentes, Deus está no princípio das coisas. Para os cientistas, no final de toda reflexão.',
      'A alegria evita mil males e prolonga a vida.',
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'white',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
