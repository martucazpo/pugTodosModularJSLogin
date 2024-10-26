


const viewControllers = {
    showLanding: (req,res) => res.render("landing"),
    showLogin: (req,res) => res.render("landing",{path: "/login"}),
    showRegistration: (req,res) => res.render("landing", {path: "/register"}),
    showAppLanding: (req, res) => res.render(""),
}

export default viewControllers