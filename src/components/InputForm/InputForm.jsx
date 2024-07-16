import { Input } from "@/components/ui/input";

export default function InputForm(props) {
  // Crear un objeto para las props del input
  let inputProps = {};

  // Si props.value está definido y no es nulo, incluirlo en inputProps
  if (props.value !== undefined) {
    inputProps.value = props.value;
  }
  return (
    <div className='flex flex-col  space-y-2'>
      <label htmlFor={props.label}>{props.label}</label>
      <Input
        type={props.type}
        id={props.label}
        name={props.label}
        {...props}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
}
