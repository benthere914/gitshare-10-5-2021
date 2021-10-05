const CARTADD = 'cart/ADD'

export default function(state={}, action){
    switch(action.type){
        case CARTADD:
            const id = action.id;
            const newCart = {...state};
            newCart[id] = {id, count: 1};
            return newCart;
        default:
            return state;
    }

}

export const addToCart = (id) => {
    return {
        type: CARTADD,
        id: id
    }
}
