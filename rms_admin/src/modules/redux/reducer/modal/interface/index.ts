interface ModalState {
  type: string;
  postType: string;
  comment: string;
  isSuccessSaveFeedback: boolean | undefined;
  id: string;
  approveType: string;
}

export default ModalState;
