import React, { useState } from "react";
import Buttons from "./components/Buttons";
import FormStepFourh from "./components/FormStepFourh";
import FormStepOne from "./components/FormStepOne";
import FormStepSecond from "./components/FormStepSecond";
import FormStepThird from "./components/FormStepThird";
import { Nav, NavItem, NavLink } from "reactstrap";

function App() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    status: false,
    number: "",
    email: "",
    photo: "",
    pay1: false,
    pay2: false,
    pay3: false,
    pay4: false,
    pay5: false,
  });

  const headingHandler = (value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        heading: value,
      };
    });
  };

  const descriptionHandler = (value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        description: value,
      };
    });
  };

  const statusHandler = (value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        status: value,
      };
    });
  };

  const numberHandler = (value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        number: value,
      };
    });
  };

  const emailHandler = (value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        email: value,
      };
    });
  };

  const photoHandler = (value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        photo: value,
      };
    });
  };

  const pay1Handler = (value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        pay1: value,
      };
    });
  };

  const pay2Handler = (value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        pay2: value,
      };
    });
  };

  const pay3Handler = (value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        pay3: value,
      };
    });
  };

  const pay4Handler = (value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        pay4: value,
      };
    });
  };

  const pay5Handler = (value) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        pay5: value,
      };
    });
  };

  const saveHandler = () => {
    alert(
      "Дякую, оголошення заповнено. Дані для відправки на сервер можна переглянути в консолі"
    );
    console.log(formData);
    setFormData({
      heading: "",
      description: "",
      status: false,
      number: "",
      email: "",
      photo: null,
      pay1: false,
      pay2: false,
      pay3: false,
      pay4: false,
      pay5: false,
    });
    setFormStep(1);
  };

  const formStepPlus = () => {
    if (formData.heading.length > 0 && formStep === 1) {
      setFormStep((prevFormStep) => prevFormStep + 1);
    } else if (formData.number.length > 0 && formStep === 2) {
      setFormStep((prevFormStep) => prevFormStep + 1);
    } else if (formData.photo.length <= 5 && formStep === 3) {
      setFormStep((prevFormStep) => prevFormStep + 1);
    } else if (formData.photo.length > 5 && formStep === 3) {
      alert("Завантажте до 5 файлів");
    } else if (formStep > 3) {
      setFormStep((prevFormStep) => prevFormStep + 1);
    } else {
      alert("Заповніть обовязкові поля");
    }
  };

  const formStepMinus = () => {
    setFormStep((prevFormStep) => prevFormStep - 1);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="p-3">Додати нове оголошення</h1>
            <div className="p-3">
              <Nav tabs>
                <NavItem>
                  <NavLink className={1 === formStep ? "active" : ""}>
                    Крок 1
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={2 === formStep ? "active" : ""}>
                    Крок 2
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={3 === formStep ? "active" : ""}>
                    Крок 3
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={4 === formStep ? "active" : ""}>
                    Крок 4
                  </NavLink>
                </NavItem>
              </Nav>
              {/* <FormTab num={1} active={1 === formStep} />
          <FormTab num={2} active={2 === formStep} />
          <FormTab num={3} active={3 === formStep} />
          <FormTab num={4} active={4 === formStep} /> */}
            </div>

            {formStep === 1 && (
              <FormStepOne
                formData={formData}
                headingHandler={headingHandler}
                descriptionHandler={descriptionHandler}
                statusHandler={statusHandler}
              />
            )}
            {formStep === 2 && (
              <FormStepSecond
                formData={formData}
                numberHandler={numberHandler}
                emailHandler={emailHandler}
              />
            )}
            {formStep === 3 && (
              <FormStepThird formData={formData} photoHandler={photoHandler} />
            )}
            {formStep === 4 && (
              <FormStepFourh
                formData={formData}
                pay1Handler={pay1Handler}
                pay2Handler={pay2Handler}
                pay3Handler={pay3Handler}
                pay4Handler={pay4Handler}
                pay5Handler={pay5Handler}
              />
            )}
            <Buttons
              formStep={formStep}
              formStepPlus={formStepPlus}
              formStepMinus={formStepMinus}
              saveHandler={saveHandler}
            ></Buttons>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
