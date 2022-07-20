import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [isShow, setIsShow] = useState(false);
  console.log(isShow);
  return (
    <>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setIsShow(!isShow)}>
            {isShow ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        <p>{isShow ? `${info}` : ''}</p>
      </article>
    </>
  );
};

export default Question;
