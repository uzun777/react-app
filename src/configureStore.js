import { createStore,combineReducers,compose,applyMiddleware } from "redux";
import { counterReducer} from "./modules/counter/counterReducer";

const mainReducer = combineReducers({counter:counterReducer})

const middleware=[];


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

export const store = createStore(mainReducer,enhancer)