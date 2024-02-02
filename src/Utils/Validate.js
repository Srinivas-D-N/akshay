export const checkValidate = (email, password)=>{
  const  isEmailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
  const  isPasswordRegex=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    if(!isEmailRegex) return "email id is not correct"
   if(!isPasswordRegex) return "password is not correct"
   return null;
} 