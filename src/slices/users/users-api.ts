import { baseApi } from '@/shared/api/baseApi.ts'
import {
	GetUsersResponse,
	RequestUsersBody,
} from '@/shared/types/api/users-types.ts'

export const usersApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getUsers: build.query<GetUsersResponse, RequestUsersBody>({
			query: ({ count = 20, page = 1, term = '', friend = null }) =>
				`users?count=${count}&page=${page}&term=${term}${
					friend ? `&friend=${friend}` : ''
				}`,
		}),
	}),
})

export const { useGetUsersQuery } = usersApi
