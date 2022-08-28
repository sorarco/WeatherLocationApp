import {api} from '@api/index';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
});

const middlewares = [
	/* other middlewares */
	api.middleware,
];

if (__DEV__) {
	const createDebugger = require('redux-flipper').default;
	middlewares.push(createDebugger());
}

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
