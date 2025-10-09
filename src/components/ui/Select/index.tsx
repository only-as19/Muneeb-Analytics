import {
  Select as ShadcnSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/lib";

type Option = { label: string; value: string; disabled?: boolean };

interface selectProps{
  label?:string;
  placeholder?:string;
  value?:string;
  onChange?:(value: any) => void
  options?:Option[];
  className?:string;
  id?:string;
  groupLabel?:string
}

const Select:React.FC<selectProps> = ({
  label,
  value,
  className,
  placeholder,
  options,
  id,
  onChange,
  groupLabel
}) => {
  return (
    <div className={`${className}`}>
      {label && <label className="font-semibold">{label}</label>}
    <ShadcnSelect
    
    value={value}
    onValueChange={onChange}
    >
      <SelectTrigger
      id={id}
      className="w-full" 
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{groupLabel}</SelectLabel>
          {options?.map(option=>(
            <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </ShadcnSelect>
    </div>
  );
};

export default Select;
