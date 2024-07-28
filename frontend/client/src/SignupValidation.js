function validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

    if (values.username.trim() === "") {
        error.username = "Name should not be empty";
    } else {
        error.username = "";
    }

    if (values.email.trim() === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email format is invalid";
    } else {
        error.email = "";
    }

    if (values.password.trim() === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must be between 8 to 20 characters, and contain at least one numeric digit, one lowercase and one uppercase letter";
    } else {
        error.password = "";
    }

    return error;
}

export default validation;