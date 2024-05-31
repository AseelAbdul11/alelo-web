import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
export interface initial {
usersData : any[],
}
const initialState : initial = {
    usersData : [
        {
            id : 0,
            name  : 'Ansari',
            phone : 123234234,
            address : 'xyz',
            state : 'Tamil nadu',
            createdOn : '10-23-34',
            lastSeen : '4 months ago',
            role :  'Agent  ',
            status : 'Inactive'

        },
        {
            id : 1,
            name  : 'Ansari',
            phone : 123234234,
            address : 'xyz',
            state : 'Tamil nadu',
            createdOn : '10-23-34',
            lastSeen : '4 months ago',
            role :  'Buyer',
            status : 'Active'

        },
        {
            id : 2,
            name  : 'Ansari',
            phone : 123234234,
            address : 'xyz',
            state : 'Tamil nadu',
            createdOn : '10-23-34',
            lastSeen : '4 months ago',
            role :  'Seller',
            status : 'Active'

        },
        {
            id : 3,
            name  : 'Ansari',
            phone : 123234234,
            address : 'xyz',
            state : 'Tamil nadu',
            createdOn : '10-23-34',
            lastSeen : '4 months ago',
            role :  'Seller',
            status : 'Active'
        },
        {
            id : 0,
            name  : 'Ansari',
            phone : 123234234,
            address : 'xyz',
            state : 'Tamil nadu',
            createdOn : '10-23-34',
            lastSeen : '4 months ago',
            role :  'Agent  ',
            status : 'Inactive'

        },
        {
            id : 1,
            name  : 'Sam',
            phone : 123234234,
            address : 'xyz',
            state : 'Tamil nadu',
            createdOn : '10-23-34',
            lastSeen : '4 months ago',
            role :  'Buyer',
            status : 'Active'

        },
        {
            id : 2,
            name  : 'Kevin',
            phone : 123234234,
            address : 'xyz',
            state : 'Tamil nadu',
            createdOn : '10-23-34',
            lastSeen : '4 months ago',
            role :  'Seller',
            status : 'Active'

        },
        {
            id : 3,
            name  : 'Ruth',
            phone : 123234234,
            address : 'xyz',
            state : 'Tamil nadu',
            createdOn : '10-23-34',
            lastSeen : '4 months ago',
            role :  'Seller',
            status : 'Active'
        },
        {
            id : 0,
            name  : 'Saik',
            phone : 123234234,
            address : 'xyz',
            state : 'Tamil nadu',
            createdOn : '10-23-34',
            lastSeen : '4 months ago',
            role :  'Agent  ',
            status : 'Inactive'

        },
        {
            id : 1,
            name  : 'Gopi',
            phone : 123234234,
            address : 'xyz',
            state : 'Tamil nadu',
            createdOn : '10-23-34',
            lastSeen : '4 months ago',
            role :  'Buyer',
            status : 'Active'

        },
        {
            id : 2,
            name  : 'Ansari',
            phone : 123234234,
            address : 'xyz',
            state : 'Tamil nadu',
            createdOn : '10-23-34',
            lastSeen : '4 months ago',
            role :  'Seller',
            status : 'Active'

        },
        {
            id : 3,
            name  : 'Ansari',
            phone : 123234234,
            address : 'xyz',
            state : 'Tamil nadu',
            createdOn : '10-23-34',
            lastSeen : '4 months ago',
            role :  'Seller',
            status : 'Active'
        }
    ]
}
export const UserManageSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
       
    }
})

export const {  } = UserManageSlice.actions
export default UserManageSlice.reducer