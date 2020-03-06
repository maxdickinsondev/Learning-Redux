const initialState = {
    email:'maxsantistadickinson@gmail.com',
    senha:'123456'
};

const AuthReducer = (state = [], action) => {

    if (state.length == 0){
        return initialState;
    }

    if (action.type == 'editEmail'){
        return { ...state, email:action.payload.email };
    }

    if (action.type == 'editSenha'){
        return { ...state, senha:action.payload.senha }
    }

    if (action.type == 'cadastroSucesso'){
        alert('Cadastro com sucesso!');
        return state;
    }

    if (action.type == 'cadastroError'){
        alert('Erro: ' + action.payload.code);
        return state;
    }

    return state;

};

export default AuthReducer;