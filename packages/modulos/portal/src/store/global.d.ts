import type { RootState } from '@app/portal/src/store/index';

declare global {
  declare namespace Store {
    export interface State extends RootState { };
  }
}

export default global;
