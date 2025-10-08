import {Input as ShadCnInput} from "@/lib"
import Button from "../button";
import type { InputHTMLAttributes } from "react"


interface TInput extends Omit<InputHTMLAttributes<HTMLInputElement>,'type'>{
    label?: string;
    value?: string;
    InputType:string;
    customClass?: string;
    button?:{
        buttonLabel?:string;
        buttonVariant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
        buttoOnClick?: (value?: any) => void
    },
}

const Input:React.FC<TInput> = ({
    label,
    value,
    customClass,
    InputType = 'text',
    button,
    name,
    placeholder,
    onChange,
    ...rest
}) => {
  return (
    <div className={`${label ? "grid" : "flex"} w-full max-w-sm items-center`}>
        {label && <label htmlFor={name}>{label}</label>}
      <ShadCnInput
        name={name}
        type={InputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${customClass}`}
      />
      {button && (
        <Button 
        label={button.buttonLabel}
        variant={button.buttonVariant}
        onClick={()=> button.buttoOnClick?.(value)}
        />
      )}
    </div>
  )
}

export default Input
