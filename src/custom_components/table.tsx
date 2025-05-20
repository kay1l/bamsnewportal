import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { useRouter } from "next/navigation";



const datas = [
  {
    ref_num: "5502",
    project: "Most Bless Nights 2025 Week 5",
    client: "Liverpool City Council",
    contact: "Kelly Standley",
    email: "kelly.standley@liverpoolcitycouncil.com", 
    mobile: "02 8711 7641",
    status: "Quote",
  },
  {
    ref_num: "5451",
    project: "161 MacPherson Street Bronte",
    client: "LP Constructions",
    contact: "Lawrence Paulraj",
    email: "lawrence.paulraj@lpconstructions.com", 
    mobile: "0433634727",
    status: "Quote",
  },
  {
    ref_num: "5401",
    project: "Traffic Control and Cleaning Culvert",
    client: "INHOUSE CONSULTING ENGINEERS PTY LTD",
    contact: "Wesley Folitarik",
    email: "wesley.folitarik@inhouseconsulting.com", 
    mobile: "0414 064 869",
    status: "Quote",
  },
  {
    ref_num: "5273",
    project: "Astra Palm Beach/ Avalon",
    client: "Astra Limousines",
    contact: "Guido Merlino",
    email: "guido.merlino@astralimousines.com", 
    mobile: "132121",
    status: "Quote",
  },
  {
    ref_num: "5173",
    project: "Goodman Greenacre",
    client: "Quasar Group",
    contact: "Serge Younan",
    email: "serge.younan@quasargroup.com", 
    mobile: "8853 5600",
    status: "Quote",
  },
  {
    ref_num: "5153",
    project: "Unity Walk 2024 Traffic Control",
    client: "turbans4austrilia",
    contact: "Amar Signh",
    email: "amar.signh@turbans4austrilia.com", 
    mobile: "0432 017 000",
    status: "Quote",
  },
  {
    ref_num: "5029",
    project: "Tempe High School",
    client: "Kool Water Plumbing Pty Ltd",
    contact: "Harry",
    email: "harry@koolwaterplumbing.com", 
    mobile: "0418963237",
    status: "Quote",
  },
];


export function CustomTable() {
  const router = useRouter();
  const handleButtonEditClick = () => {
    router.push('/traffic_control/job_update')
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Ref#</TableHead>
          <TableHead>Project</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Mobile</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {datas.map((data) => (
          <TableRow key={data.ref_num}>
            <TableCell className="font-medium">{data.ref_num}</TableCell>
            <TableCell>{data.project}</TableCell>
            <TableCell>{data.client}</TableCell>
            <TableCell>
  <div className="font-medium">{data.contact}</div>
  <div className="text-xs text-muted-foreground">{data.email}</div>
</TableCell>
            <TableCell>{data.mobile}</TableCell>
            <TableCell>
              <Select defaultValue={data.status}>
                <SelectTrigger className="w-[100px] text-xs">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="text-xs" value="Quote">Quote</SelectItem>
                  <SelectItem className="text-xs" value="Quoting">Quoting</SelectItem>
                  <SelectItem className="text-xs" value="Quote Pending">Quote Pending</SelectItem>
                  <SelectItem className="text-xs" value="Live Job">Live Job</SelectItem>
                  <SelectItem className="text-xs" value="Ongoing Job">Ongoing Job</SelectItem>
                  <SelectItem className="text-xs" value="Job Completed">Job Completed</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>

            <TableCell className="flex gap-2 text-right">
              <Button onClick={handleButtonEditClick} variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="destructive" size="icon">
                <Trash className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
