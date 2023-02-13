import React from 'react'

import { useTranslation } from 'react-i18next'

// Далее удалим
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton'


const MainPage = () => {
    const { t } = useTranslation('main')


    return (
        <div>
            <BugButton />
            {t('Главная')}
        </div>
    )
}

export default MainPage
