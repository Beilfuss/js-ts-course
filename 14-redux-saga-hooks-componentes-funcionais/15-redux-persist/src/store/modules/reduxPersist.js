import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'REACT-BASE', // aqui vai o nome da aplicação
      storage,
      whitelist: ['example'], // aqui vão os reducers que você quer persistir ("example" é o nome do reducer em "rootReducer.js")
    },
    reducers,
  );

  return persistedReducers;
}
