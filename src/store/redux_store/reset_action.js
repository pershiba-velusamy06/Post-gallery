
import * as reducerConstants from '../reducerConstants'
import fetchPostSlice from '../slice/fetchPostSlice';

export const fetchPostWrapper = (state, action) => {
    if (action.type === `${reducerConstants.FETCH_ALL_POST}/reset`) {
        state = undefined;
    }
    return fetchPostSlice(state, action);
};
