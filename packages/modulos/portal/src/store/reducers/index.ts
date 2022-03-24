import { combineReducers } from "redux";
import usuarioReducer from './usuario';
import loadingReducer from './loading';
import menuReducer from './menu';
import BootstrapReducer from './bootstrap';

export default combineReducers({
  usuario: usuarioReducer,
  loading: loadingReducer,
  menu: menuReducer,
  bootstrap: BootstrapReducer
})
