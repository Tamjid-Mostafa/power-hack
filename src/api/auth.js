export const setAuthToken = user => {
    const currentUser = {
        email: user.email,
    }
    fetch(`https://power-hack-server-blond.vercel.app/user/${user?.email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          //Save token in LocalStorage
          localStorage.setItem('Power-Hack', data.token)
        })

}