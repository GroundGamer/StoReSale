import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'app/'

import { ThemeProvider, ErrorBoundary } from 'app/providers'


import 'shared/config/i18n/i18n'


render(
    <ErrorBoundary>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root')
)