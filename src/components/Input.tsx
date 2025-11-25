import { InputHTMLAttributes, forwardRef } from 'react';
import { AlertCircle } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', required, ...props }, ref) => {

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2 text-slate-300">
            {label}
            {required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          required={required}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
            error
              ? 'bg-slate-900 border-red-500 text-white placeholder-slate-500 focus:ring-red-500 focus:border-red-500'
              : 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:ring-primary focus:border-primary'
          } ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
          {...props}
        />
        {error && (
          <div className="flex items-start mt-1.5 text-red-400">
            <AlertCircle className="w-4 h-4 mr-1.5 mt-0.5 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-slate-400">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
