import { createLaboratory } from '@/actions/laboratories';
import CustomLaboratoryForm from '@/atomic/components/laboratory/custom-laboratory-form';
import ListLaboratory from '@/atomic/components/laboratory/list-laboratory';
import SearchLaboratory from '@/atomic/components/laboratory/search-laboratory';
import CustomLoading from '@/atomic/components/shared/custom-loading';
import CustomViewDisabled from '@/atomic/components/shared/custom-view-disabled';
import { data, types } from '@/constants';
import { Suspense } from 'react';

const { pages } = data.screens.dashboard;

export default function LaboratoryView({
 laboratories,
 disabled,
}: {
 laboratories: LaboratoryDto[];
 disabled: LaboratoryDto[];
}) {
 return (
  <div className=" flex-row-start-stretch overflow-y-auto">
   {/* laboratory form  */}
   <div className="flex-1 p-8">
    <CustomLaboratoryForm type={types.form.create} send={createLaboratory} />
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
}

export { LaboratoryView };
