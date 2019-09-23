import React, { Component } from "react";

class ContactCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  handleClick = () => {
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    };

    this.props.onCreate(contact);
    this.setState({
      name: "",
      phone: ""
    });
    this.nameInput.focus();
  };

  handleKeyPress = e => {
    if (e.charCode === 13) {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>Create Contact</h1>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            ref={ref => {
              this.nameInput = ref;
            }}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </p>
        <button onClick={this.handleClick}>Create</button>
      </div>
    );
  }
}

// ContactCreator.propTypes = {
//   onCreate: React.PropTypes.func
// };

ContactCreator.defaultProps = {
  onCreate: () => {
    console.error("onCreate not defined");
  },
  onRemove: () => {
    console.error("onRemove not defined");
  }
};

export default ContactCreator;