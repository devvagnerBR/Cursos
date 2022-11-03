import React from "react";

const Radio = ({ pergunta,onChange, options,value, id, active }) => {



if (active === false ) return null

  //=============== map das opções das perguntas ===============
  const optionsList = options.map((option) => {
    return (
      <label style={{marginBottom: '1rem', fontFamily:'monospace'}} key={option}>

        <input id={id}  type={"radio"} checked={value === option} value={option} onChange={onChange}/>

        {option}
      </label>
    );
  });












  //=============== return ===============

  return (
    <fieldset style={{padding: '2rem', marginBottom: '1rem', border: '2px solid #eee'}}>
      <legend style={{fontWeight: 'bold'}}>{pergunta}</legend>
      {optionsList}
    </fieldset>
  );
};

export default Radio;
