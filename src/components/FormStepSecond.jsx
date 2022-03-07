import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function FormStepSecond({
  formData,
  numberHandler,
  emailHandler,
}) {
  return (
    <div>
      <Form className="p-3">
        <FormGroup>
          <Label for="number">Номер телефону*</Label>
          <Input
            id="number"
            type="text"
            value={formData.number}
            onChange={(e) => numberHandler(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="text"
            value={formData.email}
            onChange={(e) => emailHandler(e.target.value)}
          />
        </FormGroup>
        *обовязкове поле
      </Form>
      {/* <label>
        Номер телефону* &nbsp;
        <input
          type="text"
          value={formData.number}
          onChange={(e) => numberHandler(e.target.value)}
        />
      </label>
      <label>
        Email &nbsp;
        <input
          type="text"
          value={formData.email}
          onChange={(e) => emailHandler(e.target.value)}
        />
      </label>
      *обовязкове поле */}
    </div>
  );
}
