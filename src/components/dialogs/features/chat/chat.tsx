import { Grid } from '@mui/material'
import { memo } from 'react'
import { WithLoadingAndError } from '@/shared/hoc'
import { useChat, useMessagesRequest } from '../../model/hooks'
import { ChatHeader } from '../../entities/chatHeader'
import { DialogsForm } from '../dialogsForm'
import { Messages } from '../messages'

export const Chat = memo(() => {
	const { messagesData, isFetching, isError, urlId } = useMessagesRequest()
	const { name, avatar } = useChat()
	return (
		<WithLoadingAndError isLoading={isFetching} isError={isError}>
			<Grid direction={'column'} container className={'noNavigationHeight'}>
				<Grid item xs={1} sx={{ bgcolor: '#161B22', minHeight: '50px' }}>
					<ChatHeader dialogName={name || ''} avatar={avatar} />
				</Grid>
				<Grid
					item
					xs
					sx={{ width: '100%', position: 'relative', bgcolor: '#0D1117' }}
					className={' scroll'}
				>
					<Messages messages={messagesData?.items} urlId={urlId} />
				</Grid>
				<Grid item xs={0.6}>
					<DialogsForm />
				</Grid>
			</Grid>
		</WithLoadingAndError>
	)
})
