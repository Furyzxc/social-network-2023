import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useSmoothAppearance } from '@/shared/model/hooks'
import { Div } from '@/shared/ui/div'
import { useChatSlice, useIsDateExist } from '../../model/hooks'
import { Message } from '../../entities/message'
import { TimeChip } from '../../entities/timeChip'
import { MessagesSkeletons } from '../messagesSkeletons'
import s from './messages.module.css'

type PropsType = {
	isLoading: boolean
}

export const Messages = memo(({ isLoading }: PropsType) => {
	const { ref } = useSmoothAppearance()

	const { userId: urlId = 0 } = useParams()

	const { formattedToMMMM_D, isDateExist } = useIsDateExist()

	const { messages } = useChatSlice()

	return (
		<div className={s.flexbox} ref={ref}>
			{isLoading ? (
				<MessagesSkeletons />
			) : messages && messages.length > 0 ? (
				messages.map(({ id, ...message }) => (
					<div key={id}>
						{!isDateExist(message.addedAt) && (
							<TimeChip time={formattedToMMMM_D(message.addedAt)} />
						)}
						{/*        comparing sender id with id in url, if its not equal me = true*/}
						<Message {...message} me={message.senderId !== +urlId} />
					</div>
				))
			) : (
				<Div>Enter your first message</Div>
			)}
		</div>
	)
})
