import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../components/DefaultLayout";
import Template1 from "./Template1";
import Template2 from "./Template2";

const Templates = () => {
  const params = useParams();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const getTemplate = () => {
    switch (params.id) {
      case "1": {
        return <Template1 />;
      }

      case "2": {
        return <Template2 />;
      }

      default: {
        return <Template1 />;
      }
    }
  };
  return (
    <DefaultLayout>
      <div className="d-flex justify-content-end my-5 gap-3 ">
        <button className="py-2 px-3">Back</button>
        <button className="py-2 px-3" onClick={handlePrint}>
          Print
        </button>
      </div>
      <div ref={componentRef}>{getTemplate()}</div>
    </DefaultLayout>
  );
};

export default Templates;
