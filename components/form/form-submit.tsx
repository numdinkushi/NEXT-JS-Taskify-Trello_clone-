'use client';

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface FormSubmitProps {
    children: React.ReactNode;
    pending?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "ghost" | "secondary" | "link" | "primary",
}

export const FormSubmit = ({
    children,
    disabled,
    className,
    variant="primary"
}: FormSubmitProps) => {
    const { pending } = useFormStatus();

    return (
        <Button
            disabled={pending || disabled}
            type="submit"
            variant={variant}
            size='sm'
            className={cn(className)}
        >
            {children}
        </Button>
    );
};

export default FormSubmit;