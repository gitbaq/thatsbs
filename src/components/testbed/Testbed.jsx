import React from "react";

const Testbed = (props) => {
  const handleButtonClick = () => {
    props.onCountChange(props.count + 1);
  };
  return (
    <div className='testbed__main'>
      <button type='button' onClick={handleButtonClick}>
        Testbed {props.count}
      </button>
    </div>
  );
};

export default Testbed;
