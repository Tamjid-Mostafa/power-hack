import { useAuth } from "../context/AuthProvider"

export const setAuthToken = user => {


    const currentUser = {
        email: user.email,
    }
    fetch(`http://localhost:5000/user/${user?.email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      })
        .then(res => res.json())
        .then(data => {
          //Save token in LocalStorage
          
          localStorage.setItem('user', JSON.stringify(data))
          localStorage.setItem('power-hawk', data.token)
        })

}