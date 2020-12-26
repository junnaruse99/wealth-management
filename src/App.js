import React, { useState } from 'react';
import Question from './components/Question'
import Form from './components/Form'

function App() {

  // Define budget and remaining
  const [ budget, saveBudget ] = useState(0);
  const [ remaining, saveRemaining ] = useState(0);
  const [ question, updateQuestion ] = useState(true);

  return (
    <>
      <header>
        <h1>Weekly expenses</h1>
      </header>

      <div className="container">
        <div className="principal-content content">
          { question 
          ? (
              <Question 
                saveBudget={saveBudget}
                saveRemaining={saveRemaining}
                updateQuestion={updateQuestion}
              />
            )
          : (
              <div className="row">
                <div className="col-12 col-md-6">
                  <Form />
                </div>
                <div className="col-12 col-md-6">
                  
                </div>
              </div>
            )
          }  
        </div> 
      </div>
    </>
  );
}

export default App;
