
import * as reducerConstants from '../reducerConstants'
import fetchEmployeeSlice from '../slice/fetchEmployeeSlice';

export const fetchUserWrapper = (state, action) => {
    if (action.type === `${reducerConstants.FETCH_ALL_EMPLOYEE}/reset`) {
        state = undefined;
    }
    return fetchEmployeeSlice(state, action);
};
