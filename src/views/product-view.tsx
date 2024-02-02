import { Actions } from '@/actions';
import { CustomLoading, CustomProductForm } from '@/atomic/components';
import ListProduct from '@/atomic/components/product/list-product';
import SearchProduct from '@/atomic/components/product/search-product';
import TabProduct from '@/atomic/components/product/tab-product';
import CustomViewDisabled from '@/atomic/components/shared/custom-view-disabled';
import { data, types } from '@/constants';
import { Suspense } from 'react';

const { pages } = data.screens.dashboard;

const ProductView = ({
 categories,
 laboratories,
 disabled,
 products,
}: {
 categories: CategoryDto[];
 laboratories: LaboratoryDto[];
 products: ProductDto[];
 disabled: ProductDto[];
}) => {
 return (
  <div className=" flex-row-start-stretch overflow-y-auto">
   {/* product form */}
   <div className="flex-1 w-[50%] p-8">
    <CustomProductForm
     categories={categories}
     laboratories={laboratories}
     type={types.form.create}
     send={Actions.product.create}
    />
   </div>

   <div className="flex-col-start-stretch w-[50%] p-8">
    {/* Tabs */}
    <Suspense fallback={<CustomLoading variant="list-horizontal" />}>
     <TabProduct />
    </Suspense>
    {/* header Search */}
    <div className="flex-row-center-center flex-initial">
     {/* button refresh */}
     <CustomViewDisabled
      variant={types.variant.button.secondary}
      title={pages.category.buttons.load}
      type={types.button.icon}
      href={'/dashboard/laboratory/disabled'}
      icon={types.icon.elimited}
      text={String(disabled.length)}
     />
     {/* input Search */}
     <SearchProduct />
     {/* button delete */}
     <CustomViewDisabled
      variant={types.variant.button.secondary}
      title={pages.category.buttons.load}
      type={types.button.icon}
      href={'/dashboard/laboratory/disabled'}
      icon={types.icon.elimited}
      text={String(disabled.length)}
     />
    </div>

    {/* list products  and detail one product */}
    <Suspense fallback={<CustomLoading variant="list-vertical" />}>
     <ListProduct />
    </Suspense>
   </div>
  </div>
 );
};

export { ProductView };
