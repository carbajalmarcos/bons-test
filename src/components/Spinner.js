import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import spinner from "../styles/spinner.module.css";
const Spinner = () => {
  return (
    <div className={spinner.spinner}>
      <MoonLoader size={100} color={"rgb(13, 191, 199)"} loading={true} />
    </div>
  );
};

export default Spinner;
