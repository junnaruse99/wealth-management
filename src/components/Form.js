import React, { useState } from 'react';
import Error from './Error'
import shortid from 'shortid';

                    
const Form = ( {expenses, updateExpenses} ) => {
    
    // Keep track of fields
    const [ name, saveName ] = useState('');
    const [ quantity, saveQuantity ] = useState(0);

    // For authentication
    const [ error, updateError ] = useState(false);

    // Submit form
    const addExpense = e => {
        e.preventDefault();

        // Validate
        if( name.trim() === "" || quantity < 1 || isNaN(quantity) ) {
            updateError(true);
            return;
        }

        // If validation is passed
        updateError(false);

        // Build expense
        const expense = {
            name,
            quantity,
            id: shortid.generate()
        }

        updateExpenses( [...expenses, expense] )

        console.log(expense)

        // Clean all fields
        saveName('');
        saveQuantity(0);

    }

    return ( 
        <>
            <h2>Add here your expenses</h2>

            { error ? <Error message="Both fields are mandatory and Expense Amount must be positive" /> : null }

            <form
                onSubmit={addExpense}
            >
                <div className="form-group">
                    <div className="camp">
                        <label>Expense name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ex. Transportation"
                            value={name}
                            onChange={e => saveName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="camp">
                        <label>Expense Amount</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Ex. 300"
                            value={quantity}
                            onChange={ e => saveQuantity(parseInt(e.target.value)) }
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </>
     );
}
 
export default Form;