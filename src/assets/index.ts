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
            src: warning,
        },
        success: {
            title: 'Exito',
            alt: 'logo de exito, la operacion se ha realizado con exito',
            src: success,
        },
        redCar: {
            title: 'Logo de carrito rojo',
            alt: 'logo de carrito rojo simbolo de la empresa',
            src: redCar,
        },
        empty: {
            title: 'Vacio',
            alt: 'logo de vacio, no hay datos para mostrar',
            src: empty,
        },
        load: {
            title: 'Refrescar',
            alt: 'logo de refrescar, cargando datos...',
            src: load,
        },
        facebook: {
            title: 'Facebook',
            alt: 'logo de facebook, red social',
            src: facebook,
        },
        whatsapp: {
            title: 'Whatsapp',
            alt: 'logo de whatsapp, red social',
            src: whatsapp,
        },
        prostaeros: {
            title: 'Prostaeros',
            alt: 'publicad de prostateros, empresa de servicios de salud sexual masculina',
            src: prostaeros,
        },
        avatar: {
            title: 'avatar del usuario',
            alt: 'logo del usario',
            src: avatar,
        },
    },
});
export { assets };
