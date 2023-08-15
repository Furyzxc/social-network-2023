import { ErrorMessage } from '@/shared/ui/errorMessage'
import { setError } from '@/components/authorization'

type PropsType = {
	error: string
}

export const Error = ({ error }: PropsType) => {
	const handleCrossClick = () => setError('')

	return <ErrorMessage message={error} onCrossClick={handleCrossClick} />
}
