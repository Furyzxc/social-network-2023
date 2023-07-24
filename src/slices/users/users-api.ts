import { api } from "@/shared/api/baseApi.ts";
import {
    GetUsersResponse,
    RequestUsersBody
} from "@/shared/types/api/users-types.ts";

export const usersApi = api.injectEndpoints({
    endpoints: build => ({
        getUsers: build.query<GetUsersResponse, RequestUsersBody>({
            query: ({count = 20, page = 1, term= '', friend = false}) => `users?count=${count}&page=${page}&term=${term}&friend=${friend}`
        })
    })
})