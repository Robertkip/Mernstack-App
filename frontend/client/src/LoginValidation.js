const validation = (values) => {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!values.email || values.email.trim() === "") {
        errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Invalid email format";
    } else {
        errors.email = "";
    }

    if (!values.password || values.password.trim() === "") {
        errors.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
        errors.password = "Password must contain at least one digit, one lowercase and one uppercase letter, and be 6-20 characters long";
    } else {
        errors.password = "";
    }

    return errors;
};

export default validation;