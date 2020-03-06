const initialState = {
    email:'maxsantistadickinson@gmail.com',
    senha:'123456'
};

const AuthReducer = (state = [], action) => {

    if (state.length == 0){
        return initialState;
    }

    return state;

};

export default AuthReducer;