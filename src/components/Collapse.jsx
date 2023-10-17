import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  
  // setting state using useState() Hook
  const [isOpen, setIsOpen] = useState(false); // Setting  the state of toggle (and false by default)

  // function to handle the display of collapse content
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Displays the collapsed collapse by default and opens it on click then closes it on click, making the text and style disappear

    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <p onClick={display}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>
      {/*If collapse is TRUE then show description */}
      <div className="collapse__dropdown__content">
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;
