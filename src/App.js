import React, { useState } from 'react';
import data from './data';
import Question from './Question';
function App() {
  return (
    <>
      <main>
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {data.map((singleQuestion) => {
              return <Question key={singleQuestion.id} {...singleQuestion} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
