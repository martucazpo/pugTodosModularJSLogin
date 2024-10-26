


const viewControllers = {
    showLanding: (req,res) => res.render("landing"),
    showLogin: (req,res) => {
        let data = {
            path: "/login",
            action: "/auth/login",
            btnTxt: "Login",
            inputs: [{name: "email"}, {name:"password"}]
        }
        return res.render("landing",data)
    },
    showRegistration: (req,res) => { 
        let data = {
            path: "/register",
            action: "/auth/register",
            btnTxt: "Register",
            inputs: [{name: "firstName"}, {name: "lastName"}, {name: "email"}, {name: "password"}, {name: "password2"}]
        }
        return res.render("landing", data)
    },
    showAppLanding: (req, res) => res.render(""),
}

export default viewControllers