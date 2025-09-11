import {
  Sheet as ShadcnSheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/lib";
import type { ReactNode } from "react";
import { Button } from "../ui";

interface SheetProps {
  triggerIcon?: ReactNode;
  triggerLabel?: string;
  triggerClasses?: string;
  sheetHeader: {
    headerTitle: string;
    showHeaderTitle: boolean;
    headerImage?: string;
    headerDescription?: string;
    headerImageClasses?: string;
  };
  children: ReactNode;
  sheetFooter: {
    buttonLabel?: string;
    onClick?: () => void;
  };
}
const Sheet: React.FC<SheetProps> = ({
  triggerIcon,
  triggerClasses,
  triggerLabel,
  sheetHeader,
  sheetFooter,
  children,
}) => {
  return (
    <ShadcnSheet>
      <SheetTrigger asChild>
        <Button
          label={triggerLabel}
          icon={triggerIcon}
          className={`${triggerClasses} md:hidden`}
          variant="default"
        />
      </SheetTrigger>
      <SheetContent className="text-primary">
        <SheetHeader>
          <SheetTitle className={sheetHeader.showHeaderTitle ? "block":"hidden"}>{sheetHeader.headerTitle}</SheetTitle>
          {sheetHeader.headerImage && (
            <img
              src={sheetHeader.headerImage}
              alt="Muneeb Analytic"
              className={`${sheetHeader.headerImageClasses} w-full max-w-24`}
            />
          )}
          {sheetHeader.headerDescription && (
            <SheetDescription>{sheetHeader.headerDescription}</SheetDescription>
          )}
        </SheetHeader>
        {children}
        <SheetFooter>
          {sheetFooter.buttonLabel && (
            <Button
              label={sheetFooter.buttonLabel}
              onClick={sheetFooter.onClick}
            />
          )}
          <SheetClose asChild>
            <Button variant="outline" label="Close" customClasses="border-dark-secondary"/>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </ShadcnSheet>
  );
};

export default Sheet;
