import React, { ButtonHTMLAttributes } from "react";

import {
  DialogTitle,
  DialogHeader,
  DialogContent,
  Dialog,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type FooterButtonType = React.ReactElement<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

interface ModalProps {
  children: React.ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
  footer?: boolean;
  footerBtn?: FooterButtonType;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  open,
  onClose,
  footer = false,
  footerBtn,
  className,
}) => {
  const onOpenChange = () => {
    onClose();
  };

  return (
    <Dialog open={open} modal onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "sm:max-w-[550px] overflow-auto transition-all duration-300",
          className
        )}
      >
        {/* translate-x-52 opacity-80 */}
        <DialogHeader className="justify-start">
          <DialogTitle className="text-center font-nunito text-base font-semibold">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="w-full border-b absolute top-20 border-border" />
        {/* children */}
        {children}
        {footer && <DialogFooter className="">{footerBtn}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};
