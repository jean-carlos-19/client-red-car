import { useState } from 'react';

const useAuth = () => {
 const [loginEntity] = useState<LoginModel>({
  password: undefined,
  user: undefined,
 });

 const [registerEntity] = useState<RegisterModel>({
    password: undefined,
    user: undefined,
    email: undefined,
    cedula  : undefined,
    names   : undefined,
   });

 return { loginEntity, registerEntity };
};
export { useAuth };
