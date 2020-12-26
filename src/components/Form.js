import React, { useState } from 'react';

const Form = () => {
    
    // Keep track of fields
    const [ name, saveName ] = useState('');
    const [ quantity, saveQuantity ] = useState(0);

    // For authentication
    const [ error, updateError ] = useState(false);

    // Submit form
    const addExpense = e => {
        e.preventDefault();

        // Validate
        if( name < 1 || isNaN(name) || quantity < 1 || isNana(quantity) ) {
            updateError(true);
            return;
        }
        // If validation is passed
        updateError(false);
    }

    return ( 
        <>
            <h2>Add here your expenses</h2>
            <form
                onSubmit={addExpense}
            >
                <div className="form-group">
                    <div className="camp">
                        <label>Expense name</label>
                        <input
                            typer="text"
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
                            typer="number"
                            className="form-control"
                            placeholder="Ex. 300"
                            value={quantity}
                            onChange={e => saveQuantity(parseInt(e.target.value))}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn-block btn btn-primary"
                >Submit</button>
            </form>
        </>
     );
}
 
export default Form;