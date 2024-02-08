import CustomIcon from '@/atomic/components/shared/custom-icon';
import { types } from '@/constants';
import { CustomViewDisabledProps, variantButton } from '@/types';
import Link from 'next/link';

const getVariantButton = (
 variant: variantButton | undefined,
): { styles: { container: string; button: string } } => {
 const styles = { container: '', button: '' };
 if (variant === undefined) return { styles };
 if (variant === types.variant.button.primary) {
  return {
   styles: {
    container: 'btn-primary',
    button: 'btn-text-primary',
   },
  };
 }
 if (variant === types.variant.button.secondary) {
  return {
   styles: {
    container: 'btn-secondary',
    button: 'btn-text-secondary',
   },
  };
 }
 if (variant === types.variant.button.disabled) {
  return {
   styles: {
    container: 'btn-disabled',
    button: 'btn-text-disabled',
   },
  };
 }
 return { styles };
};

export default function CustomViewDisabled(props: CustomViewDisabledProps) {
 const { styles } = getVariantButton(props.variant);

 /* icon  */
 if (props.type === types.button.icon && props.icon)
  return (
   <Link
    type="button"
    title={props.title}
    className={`${styles.container} ${props.className} p-2`}
    href={props.href}
   >
    <CustomIcon type={props.icon} />
   </Link>
  );

 /* icon and text */
 if (props.type === types.button.iconText && props.icon)
  return (
   <Link
    className={`${styles.container} ${props.className} p-2`}
    href={props.href}
    title={props.title}
   >
    <p className={styles.button}>{props.text}</p>
    <CustomIcon type={props.icon} />
   </Link>
  );
 return null;
}
