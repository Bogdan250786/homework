const TextField = (props: {
  placeholder: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  value: string
}) => 
  <input {...props} />;

  export default TextField;
