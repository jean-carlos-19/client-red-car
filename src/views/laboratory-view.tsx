import { Actions } from '@/actions';
import { CustomLaboratoryForm, CustomLoading } from '@/atomic/components';
import ListLaboratory from '@/atomic/components/laboratory/list-laboratory';
import SearchLaboratory from '@/atomic/components/laboratory/search-laboratory';
import CustomViewDisabled from '@/atomic/components/shared/custom-view-disabled';
import { data, types } from '@/constants';
import { Suspense } from 'react';

const { pages } = data.screens.dashboard;

const LaboratoryView = ({
 laboratories,
 disabled,
}: {
 laboratories: LaboratoryDto[];
 disabled: LaboratoryDto[];
}) => {
 return (
  <div className=" flex-row-start-stretch overflow-y-auto">
   {/* laboratory form  */}
   <div className="flex-1 p-8">
    <CustomLaboratoryForm type={types.form.create} send={Actions.Laboratory.create} />
   </div>

   <div className="flex-col-start-stretch p-8">
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
     {/*search form*/}
     <SearchLaboratory />
     {/*button show laboratories eliminated*/}
     <CustomViewDisabled
      variant={types.variant.button.secondary}
      title={pages.category.buttons.load}
      type={types.button.icon}
      href={'/dashboard/laboratory/disabled'}
      icon={types.icon.elimited}
      text={String(disabled.length)}
     />
    </div>
    {/*laboratories list*/}
    <Suspense fallback={<CustomLoading variant="list-vertical" />}>
     <ListLaboratory />
    </Suspense>
   </div>
  </div>
 );
};

export { LaboratoryView };
