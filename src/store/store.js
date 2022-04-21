import { configureStore } from '@reduxjs/toolkit';

import { cryptoService } from '../services/cryptoService';



export default configureStore({
  reducer: {
    [cryptoService.reducerPath]: cryptoService.reducer,
  }
});