import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { useDispatch } from "react-redux"
import { app } from "../config/firebase"
import { setUser } from "./auth3"

const AuthDB = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)
    const dispatch = useDispatch()

    async function googleAuth() {
        try {
            const result = await signInWithPopup(auth, provider)
            GoogleAuthProvider.credentialFromResult(result)

            dispatch(setUser(result.user))
        } catch (_err) {
            console.info(_err)
        }
    }

    async function logout() {
        try {
            await signOut(auth)
                .finally(() => {
                    dispatch(setUser(null))
                })
        } catch (_err) {
            console.info(_err)
        }
    }

    return {
        googleAuth,
        logout
    }
}

export default AuthDB