import React from 'react';

class Popper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Hello World!'
    }
  }

  preventPop(name, e) {
    e.preventDefault();
    alert(name);
  }

  // <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
  // <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
  render() {
    return (  
      <div>
        <p>Hello</p>
        <a href="https://reactjs.org" onClick={this.preventPop.bind(this, this.state.name)}>Click</a>
      </div>
    );
  }
}

export default Popper;
