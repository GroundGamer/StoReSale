import React from 'react'

import { useTranslation } from 'react-i18next'

import { Button } from 'shared/ui'


// Компонент для тестирования
export const BugButton = () => {

    const { t } = useTranslation()

    const [error, setError] = React.useState(false)


    const onThrow = () => {
        setError(true)
    }


    React.useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])




    return (
        <Button onClick={onThrow}>
            {t('Throw')}
        </Button>
    )
}
