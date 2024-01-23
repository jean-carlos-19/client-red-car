import { validationCategory } from './validate-category';
import { validationLaboratory } from './validate-laboratory';
import { validateLogin } from './validate-login';
import { validationProduct } from './validate-product';
import { validateRegister } from './validate-register';
import { validationSearch } from './validate-search';

const validate = Object.freeze({
 login: validateLogin,
 search: validationSearch,
 register: validateRegister,
 product: validationProduct,
 category: validationCategory,
 laboratory: validationLaboratory,
});
export { validate };
