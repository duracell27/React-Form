import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function FormStepOne({
  headingHandler,
  formData,
  descriptionHandler,
  statusHandler,
}) {
  return (
    <div>
      <Form className="p-3">
        <FormGroup>
          <Label for="heading">Заголовок*</Label>
          <Input
            id="heading"
            type="text"
            value={formData.heading}
            onChange={(e) => headingHandler(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Опис</Label>
          <Input
            id="description"
            type="textarea"
            value={formData.description}
            onChange={(e) => descriptionHandler(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="status">Статус (on|off)&nbsp;</Label>
          <Input
            id="status"
            type="checkbox"
            value={formData.status}
          onChange={(e) => statusHandler(e.target.checked)}
          />
        </FormGroup>
        *обовязкове поле
      </Form>
      {/* <label>
        Заголовок* &nbsp;
        <input
          type="text"
          value={formData.heading}
          onChange={(e) => headingHandler(e.target.value)}
        />
      </label>
      <label>
        Опис &nbsp;
        <textarea
          value={formData.description}
          onChange={(e) => descriptionHandler(e.target.value)}
        ></textarea>
      </label>
      <label>
        Статус (вкл/викл) &nbsp;
        <input
          type="checkbox"
          value={formData.status}
          onChange={(e) => statusHandler(e.target.checked)}
        />
      </label>
      *обовязкове поле */}
    </div>
  );
}
