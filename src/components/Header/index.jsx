import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const TelePhoneHeader = () => {
  return (
    <div>
      <InputGroup className="my-3">
        <Form.Control placeholder="Searching Contact" />
        <InputGroup.Text>
          <Form.Select>
            <option value="all">Family</option>
            <option value="high">Friends</option>
            <option value="middle">Relatives</option>
          </Form.Select>
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default TelePhoneHeader;
