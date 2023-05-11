const login = 'http://localhost:5000/login'
const register = 'http://localhost:5000/register'
const edit = 'http://localhost:5000/edit';
const postCatalog = 'http://localhost:5000/post-catalog-item'

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

      const updateProfile = ( userPfp, bio, userId ) => {
        return fetch(edit, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ userPfp, bio, userId})
        }).then(res => res.json());
      }



      const postCatalogItem = ( imageUrl, title, description, price) => {
        return fetch(postCatalog , {
          method: "POST",
          headers: headers,
          body: JSON.stringify({ imageUrl, title, description, price})
        }).then(res => res.json());
      }

    return {
        postRegister,
        postLogin,
        getToken,
        logOutUser,
        updateProfile,
        postCatalogItem
    };

}

export default useGetData