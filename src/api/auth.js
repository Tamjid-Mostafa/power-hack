export const setAuthToken = user => {

console.log(user)
    const currentUser = {
        email: user?.email,
    }
    const url = `https://power-hack-server-tamjid-mostafa.vercel.app/user/${user?.email}`
    console.log(url);
    fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      })
        .then(res => res.json())
        .then(data => {
          //Save token in LocalStorage
          console.log(data)
          localStorage.setItem('user', JSON.stringify(data))
          localStorage.setItem('power-hawk', data.token)
        })

}