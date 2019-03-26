const changeNumberAction = (operator) =>
{
    console.log('action called');
    console.log(operator);
    return(
        {
            type:operator,
            payload:{
                notSure:"what to put here"
            }
        }
    );
};

export default changeNumberAction;