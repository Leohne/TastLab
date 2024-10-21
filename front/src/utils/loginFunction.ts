import { loginResponse } from "../interfaces"

const loginFunction = async (user: string, password: string): Promise<loginResponse> => {
    const fetchRequest = await fetch('/testUser/db.json');
    const response = await fetchRequest.json()

    const findUser = response.find((u: { username: string, password: string }) => u.username === user && u.password === password)
    if (findUser) {
        return { status: true, message: 'login successful' }
    } else {
        return { status: false, message: 'login failed (but successfully)... keep it up, you are a wonderfull human being, and you deserve to be loved' }
    }

}
export default loginFunction;










