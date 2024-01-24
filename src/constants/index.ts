import { typesAction } from '@/constants/action';
import { typesButton, typesVariantButton } from '@/constants/button';
import data from '@/constants/data.json';
import { typesStatusDialog } from '@/constants/dialog';
import { typesForm } from '@/constants/form';
import { typesIcon } from '@/constants/icon';
import { images } from '@/constants/images';
import { variant } from '@/constants/loading';
import { messageDialog } from '@/constants/message';
import { response } from '@/constants/response';

const types = Object.freeze({
 icon: typesIcon,
 form: typesForm,
 button: typesButton,
 action: typesAction,
 dialog: typesStatusDialog,
 variant: {
  button: typesVariantButton,
 },
 respone: response,
 loading: variant,
});

export { data, images, messageDialog, types };
