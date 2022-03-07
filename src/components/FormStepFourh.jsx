import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function FormStepFourh({
  formData,
  pay1Handler,
  pay2Handler,
  pay3Handler,
  pay4Handler,
  pay5Handler,
}) {
  return (
    <div>
      <Form className="p-3">
        <FormGroup>
          <Label for="pay1">Платна послуга 1&nbsp;</Label>
          <Input
            id="pay1"
            type="checkbox"
            value={formData.pay1}
            onChange={(e) => pay1Handler(e.target.checked)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pay2">Платна послуга 2&nbsp;</Label>
          <Input
            id="pay2"
            type="checkbox"
            value={formData.pay2}
            onChange={(e) => pay2Handler(e.target.checked)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pay3">Платна послуга 3&nbsp;</Label>
          <Input
            id="pay3"
            type="checkbox"
            value={formData.pay3}
            onChange={(e) => pay3Handler(e.target.checked)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pay4">Платна послуга 4&nbsp;</Label>
          <Input
            id="pay4"
            type="checkbox"
            value={formData.pay4}
            onChange={(e) => pay4Handler(e.target.checked)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pay5">Платна послуга 5&nbsp;</Label>
          <Input
            id="pay5"
            type="checkbox"
            value={formData.pay5}
            onChange={(e) => pay5Handler(e.target.checked)}
          />
        </FormGroup>
      </Form>
      {/* <label>
        Платна послуга 1 &nbsp;
        <input
          type="checkbox"
          value={formData.pay1}
          onChange={(e) => pay1Handler(e.target.checked)}
        />
      </label>
      <label>
        Платна послуга 2 &nbsp;
        <input
          type="checkbox"
          value={formData.pay2}
          onChange={(e) => pay2Handler(e.target.checked)}
        />
      </label>
      <label>
        Платна послуга 3 &nbsp;
        <input
          type="checkbox"
          value={formData.pay3}
          onChange={(e) => pay3Handler(e.target.checked)}
        />
      </label>
      <label>
        Платна послуга 4 &nbsp;
        <input
          type="checkbox"
          value={formData.pay4}
          onChange={(e) => pay4Handler(e.target.checked)}
        />
      </label>
      <label>
        Платна послуга 5 &nbsp;
        <input
          type="checkbox"
          value={formData.pay5}
          onChange={(e) => pay5Handler(e.target.checked)}
        />
      </label> */}
    </div>
  );
}
