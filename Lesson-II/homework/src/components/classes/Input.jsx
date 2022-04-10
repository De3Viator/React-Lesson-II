import React, { Component, createRef } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.setValue = this.setValue.bind(this);
    this.message = createRef();
  }

  setValue() {
    console.log(this.message);
    this.props.changeValue(this.message.current.value, this.props.element);
  }

  componentDidMount() {
    console.log('Загрузка начата');
  }

  componentWillUnmount() {
    console.log('Было выполнено удаление');
  }

  render() {
    return (
      <input
        ref={this.message}
        type="text"
        onChange={this.setValue.bind(this)}
      />
    );
  }
}

export default Input;
