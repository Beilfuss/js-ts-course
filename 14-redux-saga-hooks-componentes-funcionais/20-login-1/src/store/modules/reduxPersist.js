import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMO-API', // nome da aplicação
      storage,
      whitelist: ['auth'], // aqui vão os reducers que você quer persistir ("example" é o nome do reducer em "rootReducer.js")
    },
    reducers,
  );

  return persistedReducers;
}
