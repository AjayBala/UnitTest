
export const loginValues = values => ({
    type:'LOGIN_VALUES',
    payload: values,
});

export const getEmailId = values => ({
    type:'GET_EMAILID',
    payload: values,
});


export default {
    loginValues,
    getEmailId
};
