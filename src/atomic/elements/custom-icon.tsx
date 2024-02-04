import { theme } from '@/atomic/theme';
import { types } from '@/constants';
import { IconProps } from '@/types';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import {
 HiArrowLeft,
 HiCheck,
 HiEye,
 HiEyeOff,
 HiInformationCircle,
 HiMenu,
 HiOutlinePlusCircle,
 HiPencil,
 HiPlusCircle,
 HiRefresh,
 HiTrash,
 HiXCircle,
} from 'react-icons/hi';

export default function CustomIcon(props: IconProps) {
 if (props.type === types.icon.menu) return <HiMenu size={30} color={theme.gray} />;
 if (props.type === types.icon.edit) return <HiPencil size={30} color={theme.gray} />;
 if (props.type === types.icon.enable) return <HiCheck size={30} color={theme.gray} />;
 if (props.type === types.icon.elimited) return <HiTrash size={30} color={theme.red} />;
 if (props.type === types.icon.close) return <HiXCircle size={50} color={theme.gray} />;
 if (props.type === types.icon.refresh) return <HiRefresh size={30} color={theme.gray} />;
 if (props.type === types.icon.create) return <HiPlusCircle size={0} color={theme.gray} />;
 if (props.type === types.icon.facebook) return <FaFacebook size={65} color={theme.blue} />;
 if (props.type === types.icon.goBack) return <HiArrowLeft size={30} color={theme.white} />;
 if (props.type === types.icon.whatsapp) return <FaWhatsapp size={65} color={theme.green} />;
 if (props.type === types.icon.plus) return <HiOutlinePlusCircle size={30} color={theme.white} />;
 if (props.type === types.icon.detail) return <HiInformationCircle size={30} color={theme.gray} />;
 if (props.type === types.icon.eye) return <HiEye size={30} color={theme.gray} />;
 if (props.type === types.icon.eyeOff) return <HiEyeOff size={30} color={theme.gray} />;
 return null;
}
