// import {createStore} from 'redux'
import { legacy_createStore as createStore} from 'redux'

import rootReducer from './reducer'

export const store = createStore(rootReducer)


// export default store;