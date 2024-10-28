import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userLoggedIn } from '../interfaces'


const initialState: userLoggedIn = {

    isLoggedIn: false,
    userId: '',

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>) {
            state.userId = action.payload
            state.isLoggedIn = true
            console.log('la chate à ta grand mere')
        },
        logout(state) {
            state.userId = ''
            state.isLoggedIn = false

        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer