export default function Signupvalidation(Regisvalue) {
    const errors = {}

    if (Regisvalue.username === '') {
        errors.username = "Please Insert Your Username"
    }

    if (Regisvalue.username.length < 5) {
        errors.username = "Name must be 6 character"
    }

    if (Regisvalue.email === '') {
        errors.email = "Please Insert Your E mail"
    }

    if (Regisvalue.password === '') {
        errors.password = "Please Insert Your Password"
    }

    if (Regisvalue.confirmpassword === '') {
        errors.confirmpassword = "Please confirm your password"
    }

    return errors

}