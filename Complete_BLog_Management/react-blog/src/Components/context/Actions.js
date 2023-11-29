export const LoginStart = (userCredentials)=>({
    type:'LOGIN_START',
})


export const LoginSuccess = (user)=>({

    type:'LOGIN_SUCCESS',
    payload: user,
})

export const LoginFailure = (user)=>({
     
    type:'LOGIN_FAILURE',
});


export const Logout = () =>({
    type:'LOGOUT',
})


export const Updatestart = (userCredentials)=>({
    type:'Update_START',
});

export const  UpdateSuccess = (user)=({
    type:'Update_SUCCESS',
    payload: user,
})
export const UpdateFailure = (user)=({  
    type:'Update_FAILURE',
     })    
