import "../App.css"; // Make sure to create and style this CSS file

const PrimaryButton = ({ onClick, children }) => (
  <button className="primary-button" onClick={onClick}>
    {children}
  </button>
);

const SecondaryButton = ({ onClick, children }) => (
  <button className="secondary-button" onClick={onClick}>
    {children}
  </button>
);

const DangerButton = ({ onClick, children }) => (
  <button className="danger-button" onClick={onClick}>
    {children}
  </button>
);

const SuccessButton = ({ onClick, children }) => (
  <button className="success-button" onClick={onClick}>
    {children}
  </button>
);

export { PrimaryButton, SecondaryButton, DangerButton, SuccessButton };
