import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List'

class App extends React.Component {//lugar donde se empieza a  construir los componentes
  //definicion de interfaz
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { id: 0, rating: 4, title: 'Harry Potter y el cáliz de fuego', image: 'libro01.jpg' },
        { id: 1, rating: 3, title: 'The shining', image: 'libro02.jpg' },
        { id: 2, rating: 5, title: 'Código Da Vinci', image: 'libro03.jpg' },
        { id: 3, rating: 5, title: 'El principito', image: 'libro04.jpg' },
        { id: 4, rating: 5, title: 'Sobrenatural', image: 'libro05.jpg' }
      ],
      copyBooks: []
    }
  }
  render() {
    return (
      <div className="App">
        <Menu title="Amozon" />
        <List items={this.state.books} />
      </div>
    );
  }
}
export default App;
