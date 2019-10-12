import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './routes'

const App = () =>
{
    return (
        <>
            <StatusBar  barStyle="light-content" backgroundColor = "#F2E74B" />
            <Routes />
        </>
    )
}


export default App  