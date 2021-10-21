import { error } from '../../../../../models/error';

interface ModalState {
  type: string;
  postType: string;
  comment: string;
  isSuccessSaveFeedback: boolean | undefined;
  id: string;
  approveType: string;
  error: error | null;
}

export default ModalState;
