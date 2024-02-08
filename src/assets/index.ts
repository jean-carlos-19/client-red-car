import empty from '@/public/assets/empty.png';
import facebook from '@/public/assets/facebook.png';
import load from '@/public/assets/load.png';
import prostaeros from '@/public/assets/prosta-eros.jpg';
import redCar from '@/public/assets/red-car.png';
import success from '@/public/assets/success.png';
import avatar from '@/public/assets/user-avatar.svg';
import warning from '@/public/assets/warning.png';
import whatsapp from '@/public/assets/whatsapp-removebg-preview.png';

const assets = Object.freeze({
    images: {
        warning: {
            title: 'Advertencia',
            alt: 'logo de advertencia, ha ocurrido un error',
            src: warning.src,
            width: warning.width,
            height: warning.height
        },
        success: {
            title: 'Exito',
            alt: 'logo de exito, la operacion se ha realizado con exito',
            src: success.src,
            width: success.width,
            height: success.height
        },
        redCar: {
            title: 'Logo de carrito rojo',
            alt: 'logo de carrito rojo simbolo de la empresa',
            src: redCar.src,
            width: redCar.width,
            height: redCar.height
        },
        empty: {
            title: 'Vacio',
            alt: 'logo de vacio, no hay datos para mostrar',
            src: empty.src,
            width: empty.width,
            height: empty.height
        },
        load: {
            title: 'Refrescar',
            alt: 'logo de refrescar, cargando datos...',
            src: load.src,
            width: load.width,
            height: load.height
        },
        facebook: {
            title: 'Facebook',
            alt: 'logo de facebook, red social',
            src: facebook.src,
            width: facebook.width,
            height: facebook.height
        },
        whatsapp: {
            title: 'Whatsapp',
            alt: 'logo de whatsapp, red social',
            src: whatsapp.src,
            width: whatsapp.width,
            height: whatsapp.height
        },
        prostaeros: {
            title: 'Prostaeros',
            alt: 'publicad de prostateros, empresa de servicios de salud sexual masculina',
            src: prostaeros.src,
            width: prostaeros.width,
            height: prostaeros.height
        },
        avatar: {
            title: 'avatar del usuario',
            alt: 'logo del usario',
            src: avatar.src,
            width: avatar.width,
            height: avatar.height
        },
    },
});
export { assets };
