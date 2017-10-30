import {Icons} from './icons';

export interface Options {
  timeOut?: number;
  showProgressBar?: boolean;
  pauseOnHover?: boolean;
  lastOnBottom?: boolean;
  clickToClose?: boolean;
  maxLength?: number;
  maxStack?: number;
  preventDuplicates?: boolean;
  preventLastDuplicates?: boolean | string;
  theClass?: string;
  rtl?: boolean;
  animate?: 'fromBottom' | 'fromRight' | 'fromLeft' | 'rotate' | 'scale';
  icons?: Icons;
  position?: ['top' | 'bottom', 'right' | 'left'];
}
