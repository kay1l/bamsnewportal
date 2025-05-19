import { Input } from "@/components/ui/input"

export function SearchBar({ onChange }: { onChange: (value: string) => void }) {
  return (
    <Input
      type="text"
      placeholder="Search jobs..."
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-sm"
    />
  )
}
