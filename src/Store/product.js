export function loadProduct() {

    return (function (dispatch) {
        dispatch({type:'SPIN_LOADING'});
        fetch('https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products').then(res => {
            return res.json();
        }).then(res => {
            dispatch({type:'LOAD_PRODUCTS_DONE',payload:res})
        })
    });
}

export default function productReducer(state = { products: [],loading:true }, action) {

    switch (action.type) {
        case 'LOAD_PRODUCTS_DONE':
            return {
                ...state,
                products: action.payload,
                loading:false
            }

        case 'SPIN_LOADING':{
            return {
                ...state,
                loading:true
            }
        }
        default:
            return state
    }

}