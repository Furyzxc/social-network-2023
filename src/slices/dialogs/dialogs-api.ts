import { baseApi } from '@/shared/api/baseApi.ts'
import {
	DialogsResponse,
	MessagesRequest,
	MessagesResponse,
	SendMessageRequest,
	SendMessageResponse,
	StartChattingResponse,
} from '@/shared/types/api/dialogs-types.ts'

export const dialogsApi = baseApi.injectEndpoints({
	endpoints: build => ({
		// get list of dialogs with your friend
		requestDialogs: build.query<DialogsResponse[], void>({
			query: () => 'dialogs',
			providesTags: () => ['DIALOGS'],
		}),

		// get list of messages with your friend, max count is 20
		requestMessages: build.query<MessagesResponse, MessagesRequest>({
			query: ({ id, count = 20 }) =>
				'dialogs/' + id + `/messages?count=${count}`,
			providesTags: () => ['MESSAGES'],
		}),

		// Start dialog with a person
		startChatting: build.mutation<StartChattingResponse, number>({
			query: userId => ({
				url: 'dialogs/' + userId,
				method: 'put',
			}),
			invalidatesTags: ['DIALOGS'],
		}),

		//send message to your friend

		sendMessage: build.mutation<SendMessageResponse, SendMessageRequest>({
			query: ({ userId, body }) => ({
				url: 'dialogs/' + userId + '/messages',
				method: 'post',
				body: { body },
			}),
			invalidatesTags: ['MESSAGES'],
		}),
	}),
})

export const {
	useStartChattingMutation,
	useRequestDialogsQuery,
	useLazyRequestMessagesQuery,
	useSendMessageMutation,
} = dialogsApi
