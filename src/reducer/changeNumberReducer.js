const changeNumberReducer = (state = {}, action) =>
{
    switch(action.type)
    {
        case '+':
            return {num:state.num+1};
        case '-':
            return {num:state.num-1};
        default:
            return state;
    }
};

export default changeNumberReducer;