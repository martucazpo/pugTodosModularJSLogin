import authControllers from "./authControllers.js"
import todoControllers from "./todoControllers.js"
import viewControllers from "./viewControllers.js"

const controllers ={
    createUser: authControllers.createAUser,
    deleteUser: authControllers.deleteAUser,
    updateUser: authControllers.updateAUser,
    login: authControllers.loginAUser,
    logout: authControllers.logoutAUser,
    createTodo: todoControllers.createATodo,
    deleteTodo: todoControllers.deleteATodo,
    updateTodo: todoControllers.updateATodo,
    showLanding: viewControllers.showLanding,
    showLogin: viewControllers.showLogin,
    showRegistration: viewControllers.showRegistration,
    showAppLanding: viewControllers.showAppLanding
}

export default controllers