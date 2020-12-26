
const BudgetManagement = ( {budget, remaining} ) => {
    return ( 
        <>
            <div className="alert alert-primary">
                Budget: $ {budget}
            </div>
            <div className="alert">
                Remaining: $ {remaining}
            </div>
        </>
     );
}
 
export default BudgetManagement;