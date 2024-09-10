import PropTypes from 'prop-types';

/**
 * Alert Component.
 * 
 * Shows an alert message.
 * 
 * @param {Object} Alert - The props of the component.
 * @param {string} Alert.message - The alert message to display.
 * @param {'info' | 'success' | 'warn' | 'error'} Alert.type - The type of the alert. (e.g., 'success', 'error').
 * @param {function} Alert.onClose - Function to call when the alert is closed.
 * @returns {JSX.Element}
 * 
 * @author Jonas Schwind
 * @version 1.2.0
 */
function Alert({ message, type = 'info', onClose }) {
  
  /** @type {string} */
  let alertClass = '';

  // HACK: Predefindes class strings to circumvent tailwind purge
  if (type === 'success') {
    alertClass = 'alert alert-success shadow-lg';
  } else if (type === 'error') {
    alertClass = 'alert alert-error shadow-lg';
  } else {
    alertClass = 'alert alert-info shadow-lg';
  }

  return (
    <div className={alertClass}>
      <div>
        <span>{message}</span>
      </div>
      <button className="btn btn-sm btn-circle btn-ghost" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default Alert;
