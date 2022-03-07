import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function FormStepThird({ formData, photoHandler }) {
  return (
    <div>
      <Form className="p-3">
        <FormGroup>
          <Label for="file">Загрузити фото (до 5шт.)</Label>
          <Input
            id="file"
            type="file"
            multiple
            onChange={(e) => photoHandler(e.target.files)}
          />
        </FormGroup>
        </Form>
      {/* <label>
        Загрузити фото (до 5шт.) &nbsp;
        <input
          type="file"
          multiple
          onChange={(e) => photoHandler(e.target.files)}
        />
      </label> */}
    </div>
  );
}
