import React, { Component } from "react";
class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      name: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleToggle = () => {
    if (!this.state.isEdit) {
      this.setState({
        name: this.props.contact.name,
        phone: this.props.contact.phone
      });
    } else {
      this.handleEdit();
    }
    this.setState({
      isEdit: !this.state.isEdit
    });
  };
  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleEdit() {
    this.props.onEdit(this.state.name, this.state.phone);
  }

  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.handleToggle();
    }
  }

  render() {
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );
    const blank = <div>Not Selected</div>;

    const edit = (
      <div>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </p>
      </div>
    );

    const view = this.state.isEdit ? edit : details;

    return (
      <div>
        <h1>Details</h1>
        {this.props.isSelected ? view : blank}
        <button onClick={this.handleToggle}>
          {this.state.isEdit ? "OK" : "Edit"}
        </button>
        <button onClick={this.props.onRemove}>Remove</button>
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact: {
    name: "",
    phone: ""
  }
};

export default ContactDetails;
