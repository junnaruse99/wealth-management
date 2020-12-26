export const checkBudget = ( budget, remaining ) => {
    let color = 'alert ';

    if( (budget*0.25) > remaining ) {
        color += 'alert-danger';
    }
    else if ( (budget*0.5) > remaining ) {
        color += 'alert-warning';
    }
    else {
        color += 'alert-success';
    }

    return color;
}