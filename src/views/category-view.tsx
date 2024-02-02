import { Actions } from '@/actions';
import { CustomCategoryForm } from '@/atomic/components';
import ListCategory from '@/atomic/components/category/list-Category';
import SearchCategory from '@/atomic/components/category/search-category';
import CustomViewDisabled from '@/atomic/components/shared/custom-view-disabled';
import { data, types } from '@/constants';

const { pages } = data.screens.dashboard;
const CategoryView = async ({
 categories,
 disabled,
}: {
 categories: CategoryDto[];
 disabled: CategoryDto[];
}) => {
 return (
  <div className="flex-row-start-stretch overflow-y-auto">
   {/* category form  */}
   <div className="flex-1 p-8">
    <CustomCategoryForm type={types.form.create} send={Actions.category.create} />
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
    <ListCategory data={categories} />
   </div>
  </div>
 );
};

export { CategoryView };
