const list = [];

const orderReducer = (state=list, action) => {
    switch(action.type){
        case 'SELECT_ITEM': state=action.payload.data.item ;
                            return state

        default : return state;                    
    }
}

export default orderReducer;