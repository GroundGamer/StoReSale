import React from 'react'

import { PageError } from 'widgets'



interface ErrorBoundaryProps {
    children: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}


export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        /*
            Обновите состояние, чтобы при следующем рендеринге
            отображался резервный пользовательский интерфейс.
        */
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Вы также можете зарегистрировать ошибку в службе отчетов об ошибках.
        console.log(error, errorInfo)
    }

    render() {
        const { state, props } = this

        if (state.hasError) {
            // вы можете визуализировать любой пользовательский резервный интерфейс
            return (
                <React.Suspense fallback={''}>
                    <PageError />
                </React.Suspense>
            )
        }

        return props.children
    }
}