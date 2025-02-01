import { Modal } from 'antd';


interface Props {
  isModalOpen: boolean;
  onClose: () => void;
}
const AddNewProductsForm = (props: Props) => {

  const handleCancel = () => {
    props.onClose();
  };

  return (
    <>
      
      <Modal title="Basic Modal" open={props.isModalOpen} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default AddNewProductsForm;