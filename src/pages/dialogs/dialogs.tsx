import { WithError } from '@/shared/hoc'
import { useAppSelector, useUserIdFromParams } from '@/shared/model/hooks.ts'
import { Div } from '@/shared/ui/div/div.tsx'
import { DialogsForm } from '@/features/dialogsForm'
import { DialogsList } from '@/features/dialogsList'
import { Messages } from '@/features/messages'
import { getDialogName, selectDialogsError } from '@/slices/dialogs'
import s from './dialogs.module.css'

export const Dialogs = () => {
	const isError = useAppSelector(selectDialogsError)
	const dialogName = useAppSelector(getDialogName)
	const { id } = useUserIdFromParams()

	return (
		<WithError isError={isError}>
			<div className={s.dialogContainer}>
				<div className={s.dialogs}>
					<div className={s.dialogsList}>
						<DialogsList />
					</div>
					{!id ? (
						<Div>Start chatting</Div>
					) : (
						<div className={s.chatContainer + ' height'}>
							<div className={s.title}>{dialogName}</div>
							<div className={s.messages + ' scroll'}>
								<Messages />
							</div>
							<DialogsForm />
						</div>
					)}
				</div>
			</div>
		</WithError>
	)
}
