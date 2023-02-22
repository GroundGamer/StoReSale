import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'app/App'

import { ThemeProvider, ErrorBoundary, StoreProvider } from 'app/providers'

import 'shared/config/i18n/i18n'

import 'app/styles/index.scss'


render(
    <StoreProvider>
        <ErrorBoundary>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StoreProvider>,
    document.getElementById('root')
)