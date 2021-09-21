import React, { FC, Suspense} from "react";
import Modal from "../../components/modal";

const ModalContainer:FC = () => {
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <Modal/>
    </Suspense>
  )
}

export default ModalContainer