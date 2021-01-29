import React, { Component } from 'react';
import { Container } from "@material-ui/core";

export class Success extends Component {

  render() {
    return (
        <Container>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
        </Container>
    );
  }
}

export default Success;
