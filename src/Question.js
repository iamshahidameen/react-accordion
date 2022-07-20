import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = () => {
  return (
    <>
      <article className="question">
        <header>
          <h4>Do I have to allow the use of cookes?</h4>
          <button className="btn">
            <AiOutlineMinus />
          </button>
        </header>
        <p>
          Unicorn vinyl poutine brooklyn, next level direct trade iceland.
          Shaman copper mug church-key coloring book, whatever poutine normcore
          fixie cred kickstarter post-ironic street art.
        </p>
      </article>
    </>
  );
};

export default Question;
