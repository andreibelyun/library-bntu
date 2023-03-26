import React from "react";
import st from "./Btn.module.scss";

function Btn({ children, ...props }) {
  return (
    <button className={st.btn} {...props}>
      {children}
    </button>
  );
}

export default Btn;
