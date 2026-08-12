export function TextField({
  label,
  name,
  type = 'text',
  required,
  error,
  ...rest
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        aria-invalid={!!error}
        className="mt-1.5 w-full border bg-[var(--paper)] px-4 py-3 text-sm text-navy outline-none focus:border-[var(--accent-deep)]"
        style={{ borderColor: 'var(--rule)' }}
        {...rest}
      />
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}

export function TextAreaField({
  label,
  name,
  required,
  error,
  ...rest
}: {
  label: string
  name: string
  required?: boolean
  error?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <span className="text-sm">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={3}
        aria-invalid={!!error}
        className="mt-1.5 w-full border bg-[var(--paper)] px-4 py-3 text-sm text-navy outline-none focus:border-[var(--accent-deep)]"
        style={{ borderColor: 'var(--rule)' }}
        {...rest}
      />
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}

export function SelectField({
  label,
  name,
  required,
  options,
  error,
  ...rest
}: {
  label: string
  name: string
  required?: boolean
  options: { value: string; label: string }[]
  error?: string
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <span className="text-sm">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        aria-invalid={!!error}
        className="mt-1.5 w-full border bg-[var(--paper)] px-4 py-3 text-sm text-navy outline-none focus:border-[var(--accent-deep)]"
        style={{ borderColor: 'var(--rule)' }}
        {...rest}
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}

export function HoneypotField() {
  return (
    <input
      type="text"
      name="honeypot"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
    />
  )
}
