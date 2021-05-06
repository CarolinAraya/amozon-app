import React from 'react';
import './item.css';


class Item extends React.Component {//para poder usar el estado y usar la información

  constructor(props) {
    super(props);

    this.state = {
      stars: []
    }
  }

  componentDidMount() {
    this.setState({//Modifica el estado
      stars: Array(parseInt(this.props.rating)).fill(0)
    });
  }

  render() {
    return (
      <div className="item" >
        <div className="image"><img src={'img/' + this.props.image} width="100%" /></div>
        <div className="title">{this.props.title}</div>
        <div className="rating">
          <p>
            {
              this.state.stars.map(x =>
                <img src="img/start.png" width="32" />
              )
            }
          </p>
          Calificación:
          <select value={this.props.rating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="actions">
          <button>Eliminar</button>
        </div>
      </div>
    );
  }
}

export default Item;