'use server';
import { ServiceProduct } from '@/mvc/services';

const service: ServiceProduct = ServiceProduct.getService();

export async function getAllProductsEnabled(): Promise<ProductDto[]> {
    try {
        const result = await service.getAllProductsEnabled();
        return result.data.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
}
export async function getAllProductsBytCategory({
    category,
}: {
    category: string;
}): Promise<ProductDto[]> {
    try {
        const result = await service.getAllProductsByCategory({ category });
        return result.data.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
}
export async function findProductById({ id }: { id: string }) {
    try {
        const result = await service.find({ id });
    } catch (error) {
        console.error('Ocurrio un error al obtener los productos por id', error);
        throw new Error('Ocurrio un error al obtener los productos por id');
    }
}
export async function getAllProductsBytCategoryAndLaboratory({
    category,
    laboratory,
}: {
    category: string;
    laboratory: string;
}): Promise<ProductDto[]> {
    try {
        const result = await service.getAllProductsByCategoryAndLaboratory({ category, laboratory });
        return result.data.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
}
export async function getAllProductsDisabled(): Promise<ProductDto[]> {
    try {
        const result = await service.getAllProductsDisabled();
        return result.data.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
}

export async function createProduct(product: ProductModel): Promise<ResponseDto> {
    try {
        const result = await service.create({ product, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
}

export async function editProduct(product: ProductModel): Promise<ResponseDto> {
    try {
        const result = await service.edit({ product, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
}

export async function enableProduct({
    id,
    product,
}: {
    id: string;
    product: string;
}): Promise<ResponseDto> {
    try {
        const result = await service.enable({ id, product, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
}

export async function disableProduct({
    id,
    product,
}: {
    id: string;
    product: string;
}): Promise<ResponseDto> {
    try {
        const result = await service.disable({ id, product, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
}
