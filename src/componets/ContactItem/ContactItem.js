import { useDeleteContactMutation } from '../../redux/contact_slice';
import s from './ContatcItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      <span>
        {name}: {number}
      </span>
      <button
        className={s.btn}
        type="submit"
        name={name}
        disabled={isDeleting}
        onClick={() => deleteContact(id)}
      >
        <span className={s.btn__name}>
          {isDeleting ? 'Deleting...' : 'Delete'}
        </span>
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
