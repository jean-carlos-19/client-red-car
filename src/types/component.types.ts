import { AnyObjectSchema } from 'yup';
import { statusButton, statusIcon } from '@/constants';
import { CategoryModel, LaboratoryModel, ProductModel } from '@/mvc/models';
import {
 ModalSetting,
 Photo,
 dialogSetting,
 Message,
 typesForm,
 Item,
 Search,
} from './common.types';

/*  */
interface CustomSelectProps {
 isRequeried?: boolean;
 stylyLabel: string;
 stylySelect: string;
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
 handlerEdit?: (id: number, name: string) => void;
 handlerDelete?: (id: number, name: string) => void;
 handlerEnable?: (id: number, name: string) => void;
}
interface CustomHeaderProps {
 list: string[];
 target: number;
 hanlderTarget: (target: number) => void;
}
interface PosterProps {
 id: string;
 type: typesForm;
 disabled?: boolean;
 value: File | undefined;
 messageError: string | undefined;
 validation: boolean | undefined | '';
 handlerChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
 hanhandlerBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
 setUrlImageLocal: (image: string) => void;
}
interface CustomCategoryFormProps {
 entity: CategoryModel;
 type: typesForm;
 handlerSubmit: (values: CategoryModel) => void;
 validationSchema: AnyObjectSchema;
}
interface CustomProductFormProps {
 type: typesForm;
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
 entity: LaboratoryModel;
 type: typesForm;
 handlerSubmit: (values: LaboratoryModel) => void;
 validationSchema: AnyObjectSchema;
}

interface CustomButtonIconProps {
 type:
  | 'view'
  | 'eliminated'
  | 'default'
  | 'disabled'
  | 'hidde'
  | 'arrow-left'
  | 'refresh'
  | 'expand'
  | 'edit'
  | 'eye';
 className?: string;
 text?: string;
 handlerPress?: () => void;
}

interface IconProps {
 type: statusIcon;
 color: string;
 size: number;
 strokeWidth: number;
}
interface CustomDialogProps {
 setting: dialogSetting;
}
interface CustomItemProps {
 id: number;
 title: string;
 buttons: CustomButtonProps[];
 handlerItem?: () => void;
 handlerEnable?: (id: number, name: string) => void;
 handlerEdit?: (id: number, name: string) => void;
 handlerEliminate?: (id: number, name: string) => void;
}
interface CustomButtonProps {
 type: statusButton;
 title: string;
 isDisable?: boolean;
 stylyButton?: string;
 stylyText?: string;
 text?: string;
 icon?: IconProps;
 handlerPress?: () => void;
}
interface CustomInputProps {
 id: string;
 label?: string;
 className: string;
 stylyText: string;
 styleLabel: string;
 isDisable: boolean;
 placeholder: string;
 isRequeried?: boolean;
 value: string | undefined;
 validation: boolean | undefined | '';
 messageError: string | undefined;
 handlerChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
 hanhandlerBlur: React.FocusEventHandler<HTMLTextAreaElement> | undefined;
}
interface CustomLoadingProps {
 colorText: string;
 message: Message;
 background: string;
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
export type {
 CustomLaboratoryFormProps,
 CustomCategoryFormProps,
 CustomProductFormProps,
 CustomProgressBarProps,
 CustomSearchFormProps,
 CustomButtonIconProps,
 CustomLoadingProps,
 CustomDialogProps,
 CustomButtonProps,
 CustomHeaderProps,
 CustomSelectProps,
 CustomInputProps,
 CustomPhotoProps,
 CustomModalProps,
 CustomListProps,
 CustomItemProps,
 PosterProps,
 IconProps,
};