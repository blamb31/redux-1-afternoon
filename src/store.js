import  {createStore} from 'redux'

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipies: []
    
}

export const RECIPIE_NAME = 'RECIPIE_NAME'
export const RECIPIE_CATEGORY = 'RECIPIE_CATEGORY'
export const AUTHOR_FIRST_NAME = 'AUTHOR_FIRST_NAME'
export const AUTHOR_LAST_NAME = 'AUTHOR_LAST_NAME'
export const INGREDIENTS = 'INGREDIENTS'
export const INSTRUCTIONS = 'INSTRUCTIONS'
export const RECIPIES = 'RECIPIES'
export const DELETE = 'DELETE'


function reducer(state = initialState, action) {
    const {type, payload} = action
    switch ( type) {
        case RECIPIE_NAME:
            return {
                ...state,
                name: payload

            }
        case RECIPIE_CATEGORY:
            return {
                ...state,
                category: payload
            }
        case AUTHOR_FIRST_NAME:
            return {
                ...state,
                authorFirst: payload
            }
        case AUTHOR_LAST_NAME:
            return {
                ...state,
                authorLast: payload
            }
        case INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, payload]
            }
        case INSTRUCTIONS:
            return {
                ...state, 
                instructions: [...state.instructions, payload]
            }
        case RECIPIES:
            const {
                name, 
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions,
                recipies
            } = state
            const recipie = {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions,
                recipies
            }
            return{
                ...state, 
                recipies: [...state.recipies, recipie],
                name : '',
                category : '',
                authorFirst : '',
                authorLast : '',
                ingredients : [],
                instructions : []
               
            }
        case DELETE:
            state.recipies.splice(payload, 1)
            console.log(state.recipies)
            return{
                ...state,
                
            }    
        default:
            return state
    }
}

export default createStore(reducer)
