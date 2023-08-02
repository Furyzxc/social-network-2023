import s from './users.module.css'
import { Paginator } from "@/features/paginator";
import { Search } from "@/entities/search";
import { UsersList } from '@/features/usersList'

export const Users = () => {
    return (
        <div className={s.users + ' height'}>
            <div>
                <div>
                    <Search/>
                </div>

                <div>
                    <UsersList/>
                </div>
            </div>

            <div>
                <Paginator/>
            </div>
        </div>
    )
}