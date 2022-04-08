import axios from 'axios';
import {GET_CHARACTERS} from '../../constant/index'


export const getAll = ()=>{
    return function(dispatch){
        return axios.get(`http://localhost:3001/characters/getAllCharacters`)
        //trabajando con promesas
        .then(data=>{
            return dispatch({
                type: GET_CHARACTERS,
                payload: data.data
            })
        })
        .catch(e=>console.log(e,'error en el getAll de actions'))
    }
}