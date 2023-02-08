import { mapRouteParams } from '@/utils/mapRouteParams';
import vm from '@/main';

export function setRouteParams(obj) {
  const query = mapRouteParams(obj);
  vm.$router.push({ query }).catch(() => {});
}
