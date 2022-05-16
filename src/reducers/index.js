import { combineReducers } from 'redux';

import settingsReducer from './settings';
import formRegisterDev from './formRegisterDev';
import formRegisterRecruiter from './formRegisterRecruiter';
import formSearchDev from './formSearchDev';
import formLogin from './formLogin';
import profilDev from './profilDev';
import profilRecruiter from './profilRecruiter';
import resultSearch from './resultSearch';

import formDevContact from './formDevContact';

import formContact from './formContact';
import favorites from './recruiterFavorites';

const rootReducer = combineReducers({
  settings: settingsReducer,
  formRegisterDev: formRegisterDev,
  formRegisterRecruiter: formRegisterRecruiter,
  formDevContact: formDevContact,
  formContact: formContact,
  formSearchDev: formSearchDev,
  formLogin: formLogin,
  profilDev: profilDev,
  profilRecruiter: profilRecruiter,
  resultSearch: resultSearch,
  favorites: favorites,
});

export default rootReducer;
