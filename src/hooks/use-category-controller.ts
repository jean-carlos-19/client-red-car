import { messageDialog, types } from '@/constants';
import { useDialog } from '@/hooks';
import { useCategory } from '@/hooks/use-category';
import { Item, Search, statusDialog } from '@/types';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useToastMessage } from './use-toast-message';

const useCategoryController = (searchTarget?: Search) => {
 const session = useSession();
 const { toastMessage } = useToastMessage();
 const {
  edit,
  find,
  create,
  search,
  enable,
  disable,
  listEnableds,
  listDisableds,
  existError,
  messageError,
 } = useCategory();
 const [category, setCategory] = useState<CategoryModel>({
  id: undefined,
  category: undefined,
  photo: undefined,
 });
 const {
  type,
  content,
  isActivate,
  decisition,
  resetDialog,
  handlerHidde,
  handlerAppear,
  handlerVerify,
 } = useDialog();
 const [detail, setDetail] = useState<CategoryDto>();
 const [target, setTarget] = useState<CategoryDto>();
 const [categories, setCategories] = useState<Item[]>([]);
 const [isEnable, setIsEnable] = useState<boolean>(false);
 const [isEdition, setEdition] = useState<boolean>(false);
 const [isLoading, setIsLoading] = useState<boolean>(true);
 const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(true);
 const [disabledCategories, setDisabledCategories] = useState<Item[]>([]);

 useEffect(() => {
  if (session.status === 'authenticated') console.log(session);
 }, [session.status]);

 useEffect(() => {
  if (searchTarget) handlerSearch(searchTarget);
 }, [searchTarget?.search]);

 useEffect(() => {
  handlerUpdateAll();
 }, []);

 /* show all disabled */
 const handlerOpenEnable = () => {
  setIsEnable(true);
 };
 /* hidde  all disabled */
 const handlerCloseEnable = () => {
  setIsEnable(false);
 };

 /* handler to disable one category */
 const handlerActionEnable = (id: string, category: string) => {
  handlerAppear(category, types.action.enable, messageDialog.category.enable);
  setCategory({ id, category });
 };

 /* handler to enable one category */
 const handlerActionDisable = (id: string, category: string) => {
  handlerAppear(category, types.action.eliminate, messageDialog.category.disable);
  setCategory({ id, category });
 };

 const handlerHiddeEdit = () => {
  setEdition(false);
  setCategory({
   id: undefined,
   category: undefined,
   photo: undefined,
  });
 };

 /* handler to display the screen edition */
 const handlerShowEdit = (id: string, name: string) => {
  setEdition(!isEdition);
  console.log(name);
  handlerFind(id);
 };

 /* update all category */
 const handlerUpdateAll = () => {
  handlerListEnableds();
  handlerListDisableds();
 };

 /* ------------------------------------------------------------------------------------------------ */

 /* create category */
 const handlerCreate = async (values: CategoryModel) => {
  setIsLoading(true);
  const rs = await create(values, session.data?.user.token as string);
  if (rs?.data) {
   toastMessage(rs.data.id as statusDialog, rs.data.message);
  }
  setIsLoading(false);
  handlerUpdateAll();
 };
 /* edit category */
 const handlerEdit = async (values: CategoryModel) => {
  setIsLoading(true);
  const rs = await edit(values, session.data?.user.token as string);
  if (rs?.data) toastMessage(rs.data.id as statusDialog, rs.data.message);
  setIsLoading(false);
  handlerHiddeEdit();
 };
 /* disable category */
 const handlerDisable = async (values: CategoryModel) => {
  const rs = await disable(values, session.data?.user.token as string);
  if (rs?.data) toastMessage(rs.data.id as statusDialog, rs.data.message);
  handlerHidde();
  handlerUpdateAll();
 };
 /* enable category */
 const handlerEnable = async (values: CategoryModel) => {
  const rs = await enable(values, session.data?.user.token as string);
  if (rs?.data) toastMessage(rs.data.id as statusDialog, rs.data.message);
  handlerHidde();
  handlerUpdateAll();
 };
 /* search all categories */
 const handlerSearch = async (value: Search) => {
  setIsLoadingSearch(true);
  const rs = await search(value);
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.id_category,
    name: item.category,
    photo: item.photo,
   }));
   setCategories(data);
  }

  setIsLoadingSearch(false);
 };

 const handlerFind = async (id: string) => {
  setIsLoading(true);
  const rs = await find(id);
  if (rs?.data) {
   const blob = await (await fetch(rs.data.data.photo!)).blob();
   const photo: File = new File([blob], 'foto', { type: blob.type });
   const data = rs.data.data;
   setCategory({
    id: data.id_category,
    category: data.category,
    photo,
    idphoto: data.idphoto,
   });
  }
  setIsLoading(false);
 };

 const handlerFindDetail = async (id: string) => {
  setIsLoadingSearch(true);
  const rs = await find(id);
  if (rs?.data) {
   const data = rs.data.data;
   setTarget(data);
  }
  setIsLoadingSearch(false);
 };
 /* show all disable */
 const handlerListDisableds = async () => {
  setIsLoadingSearch(true);
  const rs = await listDisableds();
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.id_category,
    name: item.category,
    photo: item.photo,
   }));
   setDisabledCategories(data);
  }
  setIsLoadingSearch(false);
 };
 /* show all enable */
 const handlerListEnableds = async () => {
  setIsLoadingSearch(true);
  const rs = await listEnableds();
  if (rs?.data) {
   const data = rs.data.data.map((item) => ({
    id: item.id_category,
    name: item.category,
    photo: item.photo,
   }));
   setCategories(data);
  }
  setIsLoadingSearch(false);
 };
 const handlerDeatil = async (id: string) => {
  await handlerFindDetail(id);
  setDetail(target);
 };
 const handlerCloseDetail = () => {
  setDetail(undefined);
 };

 /* ------------------------------------------------------------------------------------------------ */

 /* eliminating a category */
 if (decisition && type === types.action.eliminate && category?.id) {
  handlerDisable(category);
 }
 /* enabling a category */
 if (decisition && type === types.action.enable && category?.id) {
  handlerEnable(category);
 }

 const dialog = Object.freeze({
  isActivate,
  content,
  handlerAppear,
  handlerVerify,
  handlerHidde,
  resetAll: resetDialog,
 });
 return {
  dialog,
  detail,
  category,
  isEnable,
  isEdition,
  isLoading,
  categories,
  existError,
  messageError,
  isLoadingSearch,
  disabledCategories,
  handlerEdit,
  handlerCreate,
  handlerDeatil,
  handlerShowEdit,
  handlerHiddeEdit,
  handlerUpdateAll,
  handlerOpenEnable,
  handlerCloseDetail,
  handlerCloseEnable,
  handlerActionEnable,
  handlerActionDisable,
 };
};
export { useCategoryController };
