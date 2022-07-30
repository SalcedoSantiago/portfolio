/**
 * External dependencies
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

/**
 * Internal dependencies
 */
import AppScreen from './App/Screens/App'
import theme from './theme';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <AppScreen />
    </ChakraProvider>
  </React.StrictMode>
)
