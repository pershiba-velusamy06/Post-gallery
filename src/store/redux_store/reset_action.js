
import * as reducerConstants from '../reducerConstants'
import fetchPostSlice from '../slice/fetchPostSlice';
import createPostSlice from '../slice/createPostSlice'

export const fetchPostWrapper = (state, action) => {
    if (action.type === `${reducerConstants.FETCH_ALL_POST}/reset`) {
        state = undefined;
    }
    return fetchPostSlice(state, action);
};
export const createPostWrapper = (state, action) => {
    if (action.type === `${reducerConstants.CREATE_NEW_POST}/reset`) {
        state = undefined;
    }
    return createPostSlice(state, action);
};
