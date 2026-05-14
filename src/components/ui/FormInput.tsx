"use client";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  dark?: boolean;
}
interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  dark?: boolean;
}
interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  dark?: boolean;
}

export function FormInput({ label, dark = true, ...props }: FormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className={dark ? "form-label" : "form-label-light"}>{label}</label>
      <input className={dark ? "form-input" : "form-input-light"} {...props} />
    </div>
  );
}

export function FormTextarea({ label, dark = true, ...props }: FormTextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className={dark ? "form-label" : "form-label-light"}>{label}</label>
      <textarea className={`${dark ? "form-input" : "form-input-light"} min-h-[120px] resize-y`} {...props} />
    </div>
  );
}

export function FormSelect({ label, options, dark = true, ...props }: FormSelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className={dark ? "form-label" : "form-label-light"}>{label}</label>
      <select className={`${dark ? "form-input bg-navy/40" : "form-input-light"}`} {...props}>
        <option value="">Select one...</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
