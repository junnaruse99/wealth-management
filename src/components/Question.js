import React, { useState } from 'react';
import Error from './Error'
import PropTypes from 'prop-types'

const Question = ({ saveBudget, saveRemaining, updateQuestion }) => {


    // Keep track of number
    const [ number, saveNumber ] = useState(0);

    // For authentication
    const [ error, saveError ] = useState(false);

    // Submit number
    const addNumber = e => {
        e.preventDefault();

        // Validate
        if( number < 1 || isNaN(number) ) {
            saveError(true);
            return;
        }
        
        // If validation is passed
        saveError(false);
        saveBudget(number);
        saveRemaining(number);
        updateQuestion(false);
    }

    return ( 
        <>
            <h2>Insert budget</h2>

            {error ? <Error message="The number is incorrect"/>: null }
            <form
                onSubmit={addNumber}
            >
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Insert your budget"
                        onChange={ e => saveNumber(parseInt(e.target.value)) }
                    >
                    </input>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </>
     );
}

Question.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveRemaining: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired
}
 
export default Question
