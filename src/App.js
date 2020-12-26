import React, { useState, useEffect } from 'react';
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import BudgetManagement from './components/BudgetManagement'

function App() {

  // Define budget and remaining
  const [ budget, saveBudget ] = useState(0);
  const [ remaining, saveRemaining ] = useState(0);
  const [ question, updateQuestion ] = useState(true);

  // Define all expenses
  const [ expenses, updateExpenses ] = useState([]);


  // Determine when there is a new expense for updating the remaining
  useEffect( () => {
    if (expenses.length != 0) {
      saveRemaining(remaining - expenses[expenses.length - 1].quantity);
    }
  }, [expenses]);

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
                  <Form
                    expenses={expenses} 
                    updateExpenses={updateExpenses}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <List 
                    expenses={expenses}
                  />
                  <BudgetManagement
                    budget={budget}
                    remaining={remaining}
                  />
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
