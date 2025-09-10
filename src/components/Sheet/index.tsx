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
          className={`${triggerClasses}`}
          variant="default"
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{sheetHeader.headerTitle}</SheetTitle>
          {sheetHeader.headerImage && (
            <img
              src={sheetHeader.headerImage}
              alt="Muneeb Analytic"
              className={`${sheetHeader.headerImageClasses}`}
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
            <Button variant="outline" label="Close" />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </ShadcnSheet>
  );
};

export default Sheet;
