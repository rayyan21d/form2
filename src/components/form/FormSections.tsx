import { useState, useContext, createContext } from "react";
import { Button } from "antd";

import Section1 from "./section1";
import Section2 from "./section2";

const FormContext = createContext(1);

const Form = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < 1) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <>
      <div className="flex flex-col justify-between min-h-screen bg-blue-900">
        {/* Main Form Section */}
        <div className=" lg:px-32 ">
          <FormContext.Provider value={step}>
            <FormSection />
          </FormContext.Provider>
        </div>
        {/* Form Footer */}
        <div className="h-16 bottom-0 flex justify-between p-4 border-t lg:px-32 gap-x-8">
          <Button
            onClick={handlePrevious}
            disabled={step === 0}
            type="primary"
            className="w-full lg:w-1/2 text-white font-semibold py-2 rounded-lg border-0"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            type="primary"
            className="w-full lg:w-1/2 bg-green-700 text-white font-semibold py-2 rounded-lg"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

const FormSection = () => {
  const step = useContext(FormContext);

  return (
    <div className="p-8 lg:px-28  text-black font-sans">
      {step === 0 && <Section1 />}
      {step === 1 && <Section2 />}
    </div>
  );
};

export default Form;
