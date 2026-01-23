import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileState {
    name: string;
    email: string;
}

const initialState: ProfileState = {
    name: 'User Profile',
    email: 'user@example.com',
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile: (state, action: PayloadAction<{ name: string; email: string }>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
    },
});

export const { updateProfile, setName, setEmail } = profileSlice.actions;
export default profileSlice.reducer;
