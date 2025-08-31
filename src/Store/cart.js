// import { legacy_createStore } from "redux";



function cartReducer(state = { items: {} }, actions) {
    // Handel Actions and update the state

    // {id:{product}}
    switch (actions.type) {

        case 'ADD_TO_CART': {
            console.log(actions.payload);
            const product = actions.payload;
            if (state.items[product.id]) {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity + 1
                        }
                    }
                }
            } else {
                const newState = {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            quantity: 1
                        }
                    }
                }
                return newState;
            }
        }

        case 'REMOVE_FROM_CART': {
            console.log(actions.payload);
            const product = actions.payload;

            if (state.items[product.id].quantity <= 1) {
                const newState = {
                    ...state,
                    items: {
                        ...state.items
                    }
                };
                delete newState.items[product.id];
                return newState;
            } else {
                const newState = {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...state.items[product.id],
                            quantity: state.items[product.id].quantity - 1
                        }
                    }
                };

                return newState;
            }

        }

        default:
            return state;

    }
}


export default cartReducer;