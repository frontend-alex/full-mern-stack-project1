const login = 'http://localhost:5000/login'
const register = 'http://localhost:5000/register'

const useGetData = () => {

    const headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };

    const postRegister = (username, email, password, rePassword) => {
        return fetch(register, {
            method  : "POST",
            headers : headers,
            body    : JSON.stringify({ username, email, password, rePassword })
        }).then(res => res.json());
    }

    const postLogin = (email, password) => {
        return fetch(login, {
            method  : "POST",
            headers : headers,
            body    : JSON.stringify({email, password})
        }).then(res => res.json());
    }

    

    const getToken = () => {
        return fetch(login, {
          headers : {
            'auth' : localStorage.getItem('auth')
          }
        })
          .then((res) => res.json())
      }
    
      const logOutUser = () => {
         localStorage.removeItem('auth')
         window.location.reload();
      }
    return {
        postRegister,
        postLogin,
        getToken,
        logOutUser
    };

}

export default useGetData