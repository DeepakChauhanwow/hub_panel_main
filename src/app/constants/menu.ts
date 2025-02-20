import { environment } from 'src/environments/environment';
import { UserRole } from '../shared/auth.roles';
const adminRoot = environment.adminRoot;

export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
  roles?: UserRole[];
}

const data: IMenuItem[] = [
  {
    icon: 'iconsminds-bucket',
    label: 'menu.profile',
    to: `${adminRoot}/profile`,
  },
  {
    icon: 'iconsminds-bucket',
    label: 'menu.manage-vehicle',
    to: `${adminRoot}/manage-vehicle`,
  },
  {
    icon: 'iconsminds-bucket',
    label: 'menu.driver',
    to: `${adminRoot}/driver`,
  },
];
export default data;
