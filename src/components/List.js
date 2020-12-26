import React from 'react';

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
 
export default List;