import React from "react";
import { Button, Form, Row } from "react-bootstrap";

const TelePhoneForm = ({ submit }) => {
  return (
    <Form onSubmit={submit} className="w-50 m-auto">
      <Form.Group className="mb-3" controlId="First name">
        <Form.Label>First name</Form.Label>
        <Form.Control required type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="La">
        <Form.Label>Last name</Form.Label>
        <Form.Control required type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Phone number</Form.Label>
        <Form.Control required type="number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Category</Form.Label>
        <Form.Select>
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
          <option value="Relatives">Relatives</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit" className="w-100">
        Saqlash
      </Button>
    </Form>
  );
};

export default TelePhoneForm;
