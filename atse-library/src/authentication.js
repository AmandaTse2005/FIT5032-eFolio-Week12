//Implement a simple authentication system (use hardcoded credentials for now).
import { ref } from 'vue'

export const isAuthenticated = ref(false)

export const login = () => {
    isAuthenticated.value = true
}

//Show a logout option for authenticated users.
export const logout = () => {
    isAuthenticated.value = false
}