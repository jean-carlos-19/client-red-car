import { createCategory } from '@/actions/categories';
import CustomCategoryForm from '@/atomic/components/category/custom-category-form';
import SearchCategory from '@/atomic/components/category/search-category';
import ListProduct from '@/atomic/components/product/list-product';
import CustomViewDisabled from '@/atomic/components/shared/custom-view-disabled';
import { data, types } from '@/constants';

const { pages } = data.screens.dashboard;
export default async function CategoryView({
 categories,
 disabled,
}: {
 categories: CategoryDto[];
 disabled: CategoryDto[];
}) {
 return (
  <div className="flex-row-start-stretch overflow-y-auto">
   {/* category form  */}
   <div className="flex-1 p-8">
    <CustomCategoryForm type={types.form.create} send={createCategory} />
   </div>
   <div className="flex-1 p-8 flex-col-start-stretch">
    {/*header search */}
    <div className="flex-row-center-center flex-initial">
     {/* button loading */}
     <CustomViewDisabled
      variant={types.variant.button.secondary}
      title={pages.category.buttons.load}
      type={types.button.icon}
      href={'/dashboard/category/disabled'}
      icon={types.icon.refresh}
     />
     {/* Search Form  */}
     <SearchCategory />
     {/*button show categories eliminated*/}
     <CustomViewDisabled
      variant={types.variant.button.secondary}
      title={pages.category.buttons.load}
      type={types.button.icon}
      href={'/dashboard/category/disabled'}
      icon={types.icon.elimited}
      text={String(disabled.length)}
     />
    </div>
    {/* list categories and detail one category  */}
    <ListProduct />
   </div>
  </div>
 );
}
