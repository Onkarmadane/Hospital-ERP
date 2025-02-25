const Alert = ({ type = 'success', message, onDismiss }) => {
    const styles = {
      success: 'bg-green-100 text-green-800',
      error: 'bg-red-100 text-red-800',
    };
    return (
      <div className={`p-4 rounded flex justify-between ${styles[type]}`}>
        <span>{message}</span>
        {onDismiss && <button onClick={onDismiss} className="ml-4">X</button>}
      </div>
    );
  };

  export default Alert
  // Usage: <Alert type="error" message="Failed!" onDismiss={() => setAlert(null)} />