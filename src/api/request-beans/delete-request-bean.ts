import { Storage } from '@/utils/Storage';
import { fetchRequestBeans } from './fetch-request-beans';
import { RequestBean } from '@/types/RequestBean';

export const deleteRequestBean = (id: number): readonly RequestBean[] => {
  const requestBeans = fetchRequestBeans().filter((item) => item.id !== id);
  Storage.requestBeans.setValue(requestBeans);
  return requestBeans;
}