const BASE = "https://juicebox-x5yw.onrender.com/api/posts/"

export const getAllPost = async () => {
    try {
        const response = await fetch(BASE, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}