import React from 'react';
import PropTypes from 'prop-types'

const List = ( {expenses} ) => (
    <div className="expenses">
        <h2>List</h2>
        {expenses.map( expense => (
            <li key={expense.id}>
                <p>
                    {expense.name}
                    <span className="expense">$ {expense.quantity}</span>
                </p>
            </li>
        ))}
    </div>
)

List.propTypes = {
    expenses: PropTypes.array.isRequired
}
 
export default List;