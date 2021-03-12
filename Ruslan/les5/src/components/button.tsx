const Button = ({
  label,
  onClick,
  disabled
}: {
  label: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  disabled: boolean
}) => (
  <button
    onClick={onClick}
    className="buttons"
    disabled={disabled}>
    {label}
  </button>
);

export default Button;
