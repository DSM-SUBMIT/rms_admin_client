import { error } from '../../../../../models/error';

interface ChangePasswordState {
  oldPassword: string;
  newPassword: string;
  checkPassword: string;
  error: error | null;
  isSuccessChangePassword: string|null;
}

export default ChangePasswordState