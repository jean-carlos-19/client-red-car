'use client';
import CustomIcon from '@/atomic/components/shared/custom-icon';
import { types } from '@/constants';
import { CustomButtonProps, variantButton } from '@/types';

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

export default function CustomButton(props: CustomButtonProps) {
 const { styles } = getVariantButton(props.variant);

 /* default */
 if (props.type === types.button.default)
  return (
   <button
    type="button"
    className={
     props.isDisable ? 'p-4 bg-gray-400 rounded-xl cursor-not-allowed' : `${styles.container}`
    }
    disabled={props.isDisable}
    onClick={props.handlerPress}
    title={props.title}
   >
    <p className={`${styles.button} ${props.className}`}>{props.text}</p>
   </button>
  );
 /* icon  */
 if (props.type === types.button.icon && props.icon)
  return (
   <button
    type="button"
    title={props.title}
    className={`${styles.container} ${props.className} p-2`}
    onClick={props.handlerPress}
   >
    <CustomIcon type={props.icon} />
   </button>
  );

 /* icon and text */
 if (props.type === types.button.iconText && props.icon)
  return (
   <button
    className={`${styles.container} ${props.className} p-2`}
    onClick={props.handlerPress}
    title={props.title}
   >
    <p className={styles.button}>{props.text}</p>
    <CustomIcon type={props.icon} />
   </button>
  );
 return null;
}
