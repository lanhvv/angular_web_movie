import {RoleModel} from "./role.model";

export class LoginModel {
  name !: string;
  roles !: RoleModel[];
  token !: string;
}
