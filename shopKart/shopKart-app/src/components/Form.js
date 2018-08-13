import React from 'react';

const Form = props => {
  const input = props.input.map((element, index) => {
    return (
      <div className="l-margin-bottom" key={index}>
        <label key={index + 1} className="">{element.label}</label>
        <input onChange={(event) => { props.changeHandler(event); }} key={index + 2} type={element.type} placeholder={element.placeholder} className={element.class} name={element.name} />
      </div>
    )
  });
  return (
    input
  );
}

export default Form;