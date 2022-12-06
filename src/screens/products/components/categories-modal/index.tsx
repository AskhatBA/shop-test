import { FC, ReactElement, useEffect, useState } from "react";
import { getProductCategories } from "../../../../api/products.api";
import Modal from "../../../../components/modal";
import { StyledCategoriesModal } from "./styles";

type CategoriesModalProps = {
  isOpen: boolean;
  close: () => void;
};

const CategoriesModal: FC<CategoriesModalProps> = ({
  isOpen,
  close,
}): ReactElement | null => {
  const [categories, setCategories] = useState<string[]>();

  const loadCategories = async (): Promise<void> => {
    const categoriesResponse = await getProductCategories();
    setCategories(categoriesResponse);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  if (!categories) return null;

  return (
    <Modal isOpen={isOpen} close={close}>
      <StyledCategoriesModal>
        <ul>
          {categories.map((category) => (
            <li key={category} onClick={close}>
              {category}
            </li>
          ))}
        </ul>
      </StyledCategoriesModal>
    </Modal>
  );
};

export default CategoriesModal;
