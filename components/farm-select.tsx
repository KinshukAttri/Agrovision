import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const farmLocations = [
  {
    id: "all",
    label: "All Locations",
    value: "all"
  },
  {
    id: "us-la",
    label: "United States – Los Angeles, California",
    value: "us-la"
  },
  {
    id: "peru-lima",
    label: "Peru – Lima",
    value: "peru-lima"
  },
  {
    id: "mexico-jalisco",
    label: "Mexico – Jalisco",
    value: "mexico-jalisco"
  },
  {
    id: "morocco-drz",
    label: "Morocco – Dr Zmel",
    value: "morocco-drz"
  },
  {
    id: "uk-london",
    label: "UK – London",
    value: "uk-london"
  },
  {
    id: "egypt-abou",
    label: "Egypt – Abou Sultan",
    value: "egypt-abou"
  },
  {
    id: "china-yunnan",
    label: "China – Yunnan (Kunming City)",
    value: "china-yunnan"
  },
  {
    id: "india-uttarakhand",
    label: "India – Uttarakhand",
    value: "india-uttarakhand"
  }
]

interface FarmSelectProps {
  value: string
  onValueChange: (value: string) => void
}

export function FarmSelect({ value, onValueChange }: FarmSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[220px] bg-white/90 border border-gray-200 text-gray-900 h-8 text-xs">
        <SelectValue placeholder="Select a farm location" />
      </SelectTrigger>
      <SelectContent className="bg-white border border-gray-200">
        <SelectGroup>
          <SelectLabel className="text-gray-600 font-medium text-xs">Farm Locations</SelectLabel>
          {farmLocations.map((location) => (
            <SelectItem 
              key={location.id} 
              value={location.value}
              className="text-gray-800 hover:bg-gray-100 text-xs"
            >
              {location.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
} 