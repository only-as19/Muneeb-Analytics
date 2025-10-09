import {Input as ShadCnInput} from "@/lib"
import Button from "../button";
import type { InputHTMLAttributes, ReactNode } from "react"


interface TInput extends Omit<InputHTMLAttributes<HTMLInputElement>,'type'>{
    label?: string;
    value?: string;
    InputType?:string;
    customClass?: string;
    isRequired?:boolean;
    button?:{
        buttonLabel?:string;
        buttonVariant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
        buttoOnClick?: (value?: any) => void;
        buttonIcon?:ReactNode
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
    isRequired,
    ...rest
}) => {
  return (
    <div className={`flex ${label ? "grid" : "flex"} grid-col-1 w-full items-center gap-1`}>
        {label && <label htmlFor={name}
        className="font-semibold">{label}{isRequired && (<span className="text-red-500">*</span>)}</label>}
        
      <ShadCnInput
        name={name}
        type={InputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${customClass} w-full focus-visible:ring-muted-foreground/10 `}
        {...rest}
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
