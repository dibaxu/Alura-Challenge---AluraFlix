import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectForm(props) {
  const options = props.options || [
    { value: "Frontend", label: "Frontend" },
    { value: "Backend", label: "Backend" },
    { value: "Inovación y Gestión", label: "Inovación y Gestión" },
  ];
  // let inputProps = {};

  // // Si props.value está definido y no es nulo, incluirlo en inputProps
  // if (props.value !== undefined) {
  //   inputProps.value = props.value;
  // }
  return (
    <div className='flex flex-col  space-y-2'>
      <label htmlFor={props.label}>{props.label}</label>
      <Select
        required={props.required}
        id={props.label}
        name={props.label}
        {...props}
      >
        <SelectTrigger>
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
