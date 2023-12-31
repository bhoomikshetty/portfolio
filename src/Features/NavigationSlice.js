import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    index : 0
};

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: initialState,
    reducers: {
        // state is compulsory
        // action is basically all the inputs
        navigateTo: (state, action) => {
            state.index = action.payload.index
        },
    }
})

export const {navigateTo} = navigationSlice.actions

export default navigationSlice.reducer