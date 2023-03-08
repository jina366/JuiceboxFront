const BASE = "https://juicebox-x5yw.onrender.com/api"

export const getAllPost = async () => {
    try {
        const response = await fetch(`${BASE}/posts`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const registerAccount = async (username, password, name, location) => {
    try {
        const response = await fetch(
            `${BASE}/users/register`,
            {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify({
                users: {
                    username: username,
                    password: password,
                    name: name,
                    location: location
                },
              }), 
            }
        )
        const result = await response.json()
        return result;
    } catch (error) {
        console.log(error)
    }
}