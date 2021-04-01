const TextField = (props: {
  placeholder: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  value: string,
  type: string
}) => 
  <input {...props} />;

  export default TextField;
