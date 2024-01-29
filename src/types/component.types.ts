import { AnyObjectSchema } from 'yup';
import {
 Item,
 ModalSetting,
 Search,
 dialogSetting,
 statusButton,
 statusForm,
 statusIcon,
 variantButton,
 variantLoading,
} from './common.types';

/*  */
interface CustomSelectProps {
 isRequeried?: boolean;
 label: string;
 value: string | undefined;
 data: Item[];
 id: string;
 handlerChange: (value: string) => void;
}
interface CustomProgressBarProps {
 items: number[];
 posiition: number;
 handlerItem: (position: number) => void;
}
interface CustomListProps {
 data: Item[];
 isLoading: boolean;
 handlerEdit?: (id: string, name: string) => void;
 handlerDelete?: (id: string, name: string) => void;
 handlerEnable?: (id: string, name: string) => void;
 handlerDetail?: (id: string) => void;
}
interface CustomHeaderProps {
 list: string[];
 target: number;
 hanlderTarget: (target: number) => void;
}
interface CustomDetailsCategoryProps {
 isLoading: boolean;
 data: CategoryDto;
 handlerClose?: () => void;
}
interface CustomDetailsProductProps {
 isLoading: boolean;
 data: ProductDto;
 handlerClose?: () => void;
}
interface CustomTabsProps {
 items: string[];
 isLoading?: boolean;
 className?: string;
 itemFocus: string;
 returnItem: (item: string) => void;
}
interface CustomItemTabsProps {
 isActive: boolean;
 item: string;
 returnItem: (item: string) => void;
}
/*  */
interface CustomItemProps {
 text: string;
 title: string;
 className?: string;
}
/*  */
interface PosterProps {
 id: string;
 label: string;
 type: statusForm;
 urlImage: string;
 disabled?: boolean;
 value: File | undefined;
 messageError: string | undefined;
 validation: boolean | undefined | '';
 handlerChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
 hanhandlerBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
}
interface CustomCategoryFormProps {
 isLoading: boolean;
 entity: CategoryModel;
 type: statusForm;
 handlerSubmit: (values: CategoryModel) => void;
 validationSchema: AnyObjectSchema;
}
interface CustomProductFormProps {
 isLoading: boolean;
 type: statusForm;
 entity: ProductModel;
 validationSchema: AnyObjectSchema;
 handlerSubmit: (values: ProductModel) => void;
}
interface CustomSearchFormProps {
 entity: Search;
 placeholder: string;
 validationSchema: AnyObjectSchema;
 handlerSubmit: (values: { search: string }) => void;
}

interface CustomLaboratoryFormProps {
 isLoading: boolean;
 entity: LaboratoryModel;
 type: statusForm;
 handlerSubmit: (values: LaboratoryModel) => void;
 validationSchema: AnyObjectSchema;
}

interface CustomButtonIconProps {
 type:
  | 'view'
  | 'edit'
  | 'hidde'
  | 'expand'
  | 'default'
  | 'refresh'
  | 'disabled'
  | 'arrow-left'
  | 'eliminated'
  | 'eye';
 className?: string;
 text?: string;
 handlerPress?: () => void;
}

interface IconProps {
 type: statusIcon;
}
interface CustomDialogProps {
 setting: dialogSetting;
}

interface CustomButtonProps {
 title: string;
 text?: string;
 icon?: statusIcon;
 type: statusButton;
 className?: string;
 isDisable?: boolean;
 variant?: variantButton;
 handlerPress?: () => void;
}
interface CustomTextAreaProps {
 id: string;
 label?: string;
 isDisable: boolean;
 placeholder: string;
 isRequeried?: boolean;
 value: string | undefined;
 validation: boolean | undefined | '';
 messageError: string | undefined;
 handlerChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
 hanhandlerBlur: React.FocusEventHandler<HTMLTextAreaElement> | undefined;
}
interface CustomInputProps {
 id: string;
 label?: string;
 isDisable: boolean;
 placeholder: string;
 isRequeried?: boolean;
 value: string | undefined;
 validation: boolean | undefined | '';
 messageError: string | undefined;
 handlerChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
 hanhandlerBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
}
interface CustomPhotoProps {
 className?: string;
 title: string;
 src: string;
 width: number;
 height: number;
}
interface CustomModalProps {
 setting: ModalSetting;
}
interface CustomLoginFormProps {
 entity: LoginModel;
 validation: AnyObjectSchema;
 hnalderSubmit: (value: LoginModel) => void;
}
interface CustomRegisterFormProps {
 entity: Omit<RegisterModel, 'token'>;
 validation: AnyObjectSchema;
 hnalderSubmit: (value: Omit<RegisterModel, 'token'>) => void;
}
interface CustomMessageErrorProps {
 message: string;
}
interface CustomHeaderUserProps {
 user: string;
}
interface CustomLoadingProps {
 variant?: variantLoading;
}
export type {
 CustomButtonIconProps,
 CustomButtonProps,
 CustomCategoryFormProps,
 CustomDetailsCategoryProps,
 CustomDetailsProductProps,
 CustomDialogProps,
 CustomHeaderProps,
 CustomHeaderUserProps,
 CustomInputProps,
 CustomItemProps,
 CustomItemTabsProps,
 CustomLaboratoryFormProps,
 CustomListProps,
 CustomLoadingProps,
 CustomLoginFormProps,
 CustomMessageErrorProps,
 CustomModalProps,
 CustomPhotoProps,
 CustomProductFormProps,
 CustomProgressBarProps,
 CustomRegisterFormProps,
 CustomSearchFormProps,
 CustomSelectProps,
 CustomTabsProps,
 CustomTextAreaProps,
 IconProps,
 PosterProps,
};
