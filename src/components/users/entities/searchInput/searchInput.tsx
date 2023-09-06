import { Grid } from '@mui/material'
import { memo } from 'react'
import { Input } from '@/shared/ui/input'
import { useSearch } from '../../model/hooks'

export const SearchInput = memo(() => {
	const bind = useSearch()

	return (
		<Grid container>
			<Grid item md={5} xs={12} sm={9} sx={{ pt: '4px' }}>
				<Input
					{...bind}
					placeholder={'Search'}
					autoComplete={'off'}
					width={'100%'}
				/>
			</Grid>
		</Grid>
	)
})
