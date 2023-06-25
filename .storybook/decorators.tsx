import { ThemeProvider } from 'styled-components'
import { DecoratorFn } from '@storybook/react'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import React from 'react'
import { lightTheme, darkTheme } from '../src/styles/theme'
import { withDesign } from 'storybook-addon-designs'
import { BrowserRouter } from 'react-router-dom'
import { initialize, mswDecorator } from 'msw-storybook-addon'

import { Provider as StoreProvider } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from '../src/app-state'

initialize()

const withTheme: DecoratorFn = (StoryFn, context) => {
    const theme = context.parameters.theme || context.globals.theme
    const storybookTheme = theme === 'light' ? lightTheme : darkTheme
    return (
    <ThemeProvider theme={storybookTheme}>
        <GlobalStyle />
        {StoryFn()}
    </ThemeProvider>
    )
}

const withRouter: DecoratorFn = (StoryFn) => (
    <BrowserRouter>
        <StoryFn />
            </BrowserRouter>
        )

const withStore: DecoratorFn = (StoryFn, {parameters}) => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState: parameters.store?.initialState
    })
    return (
            <StoreProvider store={store}>
                <StoryFn />
            </StoreProvider>
        )
}


export const globalDecorators = [
    mswDecorator,
    withTheme, 
    withDesign,
    withRouter,
    withStore
]