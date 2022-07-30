import { useDeleteContactMutation } from '../../redux/contact_slice';
import s from './ContatcItem.module.css';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '380px',
  position: 'center-top',
  failure: {
    background: '#00bfff',
    textColor: '#fff',
  },
});

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting, isSuccess }] =
    useDeleteContactMutation();

  return (
    <>
      {isSuccess && Notiflix.Notify.failure(`You deleted ${name} contact`)}
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
