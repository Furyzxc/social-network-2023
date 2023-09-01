import { ChangeEvent, FocusEvent } from 'react'
import { useActions, useInput } from '@/shared/model/hooks'
import { SocialAccountType } from '../slice.ts'

/**
 * managing a social account input field.
 */
interface UseSocialAccount {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	onBlur: (e: FocusEvent<HTMLInputElement>) => void
}

/**
 * Custom hook for managing social account input field.
 * @param fieldName - The name of social account.
 * @param initialValue - The initial value for the input field.
 * @returns object for the social account input field.
 */
export const useSocialAccount = (
	fieldName: SocialAccountType,
	initialValue: string
): UseSocialAccount => {
	const { setValue, bind } = useInput(initialValue)

	const { setAccountValue } = useActions()

	/**
	 * Handler for the blur event of the input field.
	 * If a value is entered and doesn't start with 'https://', 'https://' is added at the beginning.
	 * The value is then set in the state.
	 */
	const onBlur = (event: FocusEvent<HTMLInputElement>) => {
		const { target } = event

		if (target.value && !target.value.startsWith('https://')) {
			const value = 'https://' + target.value

			setValue(value)
			setAccountValue({ fieldName, value })
		}
	}

	return {
		...bind,
		onBlur,
	}
}
