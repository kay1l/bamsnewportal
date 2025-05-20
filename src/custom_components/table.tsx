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
import { Pencil, Trash, ChevronRight } from "lucide-react";
const datas = [
  {
    ref_num: "5502",
    project: "Most Bless Nights 2025 Week 5",
    client: "Liverpool City Council",
    contact: "Kelly Standley",
    mobile: "02 8711 7641",
    status: "Quote",
  },
  {
    ref_num: "5451",
    project: "161 MacPherson Street Bronte",
    client: "LP Constructions",
    contact: "Lawrence Paulraj",
    mobile: "0433634727",
    status: "Quote",
  },
  {
    ref_num: "5401",
    project: "Traffic Control and Cleaning Culvert",
    client: "INHOUSE CONSULTING ENGINEERS PTY LTD",
    contact: "Wesley Folitarik",
    mobile: "0414 064 869",
    status: "Quote",
  },
  {
    ref_num: "5273",
    project: "Astra Palm Beach/ Avalon",
    client: "Astra Limousines",
    contact: "Guido Merlino",
    mobile: "132121",
    status: "Quote",
  },
  {
    ref_num: "5173",
    project: "Goodman Greenacre",
    client: "Quasar Group",
    contact: "Serge Younan",
    mobile: "8853 5600",
    status: "Quote",
  },
  {
    ref_num: "5153",
    project: "Unity Walk 2024 Traffic Control",
    client: "turbans4austrilia",
    contact: "Amar Signh",
    mobile: "0432 017 000",
    status: "Quote",
  },
  {
    ref_num: "5029",
    project: "Tempe High School",
    client: "Kool Water Plumbing Pty Ltd",
    contact: "Harry",
    mobile: "0418963237",
    status: "Quote",
  },
];

export function CustomTable() {
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
            <TableCell>{data.contact}</TableCell>
            <TableCell>{data.mobile}</TableCell>
            <TableCell>
              <Select defaultValue={data.status}>
                <SelectTrigger className="w-[100px] text-xs">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="text-xs" value="Quote">Quote</SelectItem>
                  <SelectItem className="text-xs" value="In Progress">In Progress</SelectItem>
                  <SelectItem className="text-xs" value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>

            <TableCell className="flex gap-2 text-right">
              <Button variant="outline" size="icon">
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
