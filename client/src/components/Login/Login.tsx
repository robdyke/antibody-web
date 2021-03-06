import React, { useState, SyntheticEvent } from "react";
import { Row, Col, Form, Input, Button } from "nhsuk-react-components";

interface LoginProps {
  formSubmit: Function;
}

export default (props: LoginProps) => {
  const { formSubmit } = props;
  const [signInId, setSignInId] = useState<string>("");

  const onFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    formSubmit(signInId);
  };

  return (
    <Row>
      <Col width="two-thirds">
        <Form onSubmit={onFormSubmit}>
          <Input
            id="sign-in-id"
            name="sign-in-id"
            label="Sign In ID"
            onChange={(e) => setSignInId(e.currentTarget.value)}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Col>
    </Row>
  );
};
