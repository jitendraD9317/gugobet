import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from '../src/redux/store.js'
import './index.css'
import {Provider} from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import "./i18n"

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <BrowserRouter>
    <ChakraProvider>
    <App />

    </ChakraProvider>
    </BrowserRouter>
    </Provider>
     

)
