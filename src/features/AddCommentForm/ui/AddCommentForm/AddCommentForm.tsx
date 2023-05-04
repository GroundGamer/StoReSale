import React from 'react'

import { useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import { classNames, DynamicModuleLoader, useWrapperInput } from 'shared/lib'

import { Button, Input } from 'shared/ui'

import { getTextComment } from '../../module/selectors/getTextComment/getTextComment'

import { addCommentFormActions, addCommentFormReducer } from '../../module/slice/addCommentFormSlice'

import cls from './AddCommentForm.module.scss'


import type { ReducersList } from 'shared/lib'

import type { KeysOfComment } from '../../module/types/AddCommentForm'


export interface Props {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm: React.FC<Props> = (props) => {
    const { t } = useTranslation()

    const { handleInputStringWrapper } = useWrapperInput<
        KeysOfComment,
        typeof addCommentFormActions.setText
    >({ action: addCommentFormActions.setText })


    const text = useSelector(getTextComment)


    const { className = '' } = props


    const { onSendComment } = props


    const onSendHandler = React.useCallback(() => {
        onSendComment(text || '')

        handleInputStringWrapper({ field: 'text', value: '' })
    }, [handleInputStringWrapper, onSendComment, text])


    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.addCommentForm, {}, [className])}>
                <Input
                    value={text}
                    onChange={(value) => handleInputStringWrapper?.({ field: 'text', value })}
                    placeholder={t('Введите текст комментария')}
                />

                <Button onClick={onSendHandler}>
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
}

export default AddCommentForm