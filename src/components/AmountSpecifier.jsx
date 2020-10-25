import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./AmountSpecifier.css";

class AmountSpecifier extends Component {
  currencies = ["EUR", "PLN", "USD"];
  state = {};
  render() {
    return (
      <div class="amount-wrapper-outer">
        <div>Specify Amount!</div>
        <Form className="amount-wrapper">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="10000" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>currency</Form.Label>
            <Form.Control as="select">
              {this.currencies.map((currency) => (
                <option>{currency}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default AmountSpecifier;
