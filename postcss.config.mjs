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
      <span className="text-sm text-stone-700">
        {label}
        {required && <span className="text-clay-500"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        aria-invalid={!!error}
        className="mt-1.5 w-full rounded-lg border border-stone-900/15 bg-white px-4 py-3 text-sm text-stone-900 outline-none focus:border-vivra-600"
        {...rest}
      />
      {error && <span className="mt-1 block text-xs text-clay-500">{error}</span>}
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
      <span className="text-sm text-stone-700">
        {label}
        {required && <span className="text-clay-500"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={3}
        aria-invalid={!!error}
        className="mt-1.5 w-full rounded-lg border border-stone-900/15 bg-white px-4 py-3 text-sm text-stone-900 outline-none focus:border-vivra-600"
        {...rest}
      />
      {error && <span className="mt-1 block text-xs text-clay-500">{error}</span>}
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
      <span className="text-sm text-stone-700">
        {label}
        {required && <span className="text-clay-500"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        aria-invalid={!!error}
        className="mt-1.5 w-full rounded-lg border border-stone-900/15 bg-white px-4 py-3 text-sm text-stone-900 outline-none focus:border-vivra-600"
        {...rest}
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <span className="mt-1 block text-xs text-clay-500">{error}</span>}
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
