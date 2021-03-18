import axios from 'axios'

export const DATA_LOADING = 'DATA_LOADING';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_LOAD_ERR = 'DATA_LOAD_ERR;'

export const fetchData = () => {
    return (dispatch) => {
       
        dispatch({type:DATA_LOADING});

        axios.get("https://api.pokemontcg.io/v2/cards")
            .then((res) => {
                console.log(res.data)
                dispatch({type:DATA_SUCCESS , payload: res.data });
            })
            .catch((err) => {
                console.log(err.message);
                dispatch({ type: DATA_LOAD_ERR, payload: err.message });

            });


    };

} ;