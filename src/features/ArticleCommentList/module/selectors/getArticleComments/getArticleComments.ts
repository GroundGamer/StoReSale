import { commentsAdapter } from '../../slice/articleCommentsSlice'


import type { StateSchema } from 'app/providers'


export const getArticleComments = commentsAdapter?.getSelectors<StateSchema>(
    (state) => state.articleComments || commentsAdapter?.getInitialState()
)