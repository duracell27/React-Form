import React from "react";
import { Button } from "reactstrap";

export default function Buttons({
  formStepPlus,
  formStepMinus,
  formStep,
  saveHandler,
}) {
  return (
    <div className='p-3'>
      {formStep !== 1 ? (
        <Button color="primary" outline onClick={() => formStepMinus()}>prev</Button>
      ) : null}
      &nbsp;
      {formStep !== 4 ? (
        <Button color="primary"  onClick={() => formStepPlus()}>next</Button>
      ) : null}
      {formStep === 4 ? (
        <Button color="success" onClick={() => saveHandler()}>save</Button>
      ) : null}
    </div>
  );
}
