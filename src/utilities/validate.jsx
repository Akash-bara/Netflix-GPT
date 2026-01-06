export const checkValidData =(email,password,name)=>{
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z\s]{2,}$/.test(name); // Used when email parameter is actually name during sign up
    if(!isEmailValid) return "Email is not Valid";
    if(!isPasswordValid) return "Password is not Valid";
    if(!isNameValid) return "Name is not Valid";
}