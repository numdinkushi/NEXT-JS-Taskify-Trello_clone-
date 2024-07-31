'use client';

import { forwardRef } from "react";
import { useFormStatus } from "react-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import FormErrors from "./for-errors";

interface FormInputProps {
    id: string;
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    errors?: Record<string, string[]> | undefined;
    className?: string;
    defaultValue?: string;
    onBlur?: () => void;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
    id,
    label,
    type,
    required,
    placeholder,
    disabled,
    errors,
    className,
    defaultValue = "",
    onBlur

}, ref) => {
    const { pending } = useFormStatus();

    return (
        <div className="space-y-2">
            <div className="space-y-1">
                {
                    label ? (
                        <Label
                            htmlFor={id}
                            className="text-sx font-semibold text-neutral-700"
                        >
                            {label}
                        </Label>
                    ) : null
                }
                <Input
                    onBlur={onBlur}
                    defaultValue={defaultValue}
                    ref={ref}
                    required={required}
                    name={id}
                    id={id}
                    placeholder={placeholder}
                    type={type}
                    disabled={pending || disabled}
                    className={cn(
                        "text-sm px-2 py-1 h-7",
                        className,
                        // errors && errors[id] && "border-red-500",
                        // "border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    )}
                    aria-describedby={`${id}-error`}
                />
            </div>
            <FormErrors
                id={id}
                errors={errors}
            />
        </div>
    );

});

FormInput.displayName = "FormInput";