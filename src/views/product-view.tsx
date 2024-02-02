import { Actions } from '@/actions';
import { CustomProductForm, CustomTabs } from '@/atomic/components';
import ListProduct from '@/atomic/components/product/list-product';
import SearchProduct from '@/atomic/components/product/search-product';
import CustomViewDisabled from '@/atomic/components/shared/custom-view-disabled';
import { data, types } from '@/constants';

const { pages } = data.screens.dashboard;
const { forms } = data.screens.dashboard;

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
    <CustomTabs
     itemFocus={tab}
     isLoading={isLoad}
     items={categories.map((category) => category.name as string)}
     returnItem={handlerTab}
    />
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
    <ListProduct data={products} />
   </div>
  </div>
 );
};

export { ProductView };
