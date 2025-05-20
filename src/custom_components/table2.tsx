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
    ref_num: "5563",
    project: "59/18 Oxford Street, Darlinghurst Fire Damage",
    client: "Century 21 City Quarter",
    contact: "Olesya Kucherenko",
    email: "olesya.kucherenko@cityquarter.com",
    mobile: "0477077494",
    status: "Quote",
  },
  {
    ref_num: "5556",
    project: "109 Menangle Road",
    client: "JV Constructions",
    contact: "Alex Said",
    email: "alex.said@jvconstructions.com",
    mobile: "0434 880 764",
    status: "Quote",
  },
  {
    ref_num: "5530",
    project: "RBS - Montessori Academy St. Mary’s",
    client: "RBS - Raguz Building Services",
    contact: "Bea Sunglao",
    email: "bea.sunglao@raguzbuild.com",
    mobile: "0450 862 172",
    status: "Quote",
  },
  {
    ref_num: "5529",
    project: "TEXCO CONSTRUCTION (NSW) PTY LTD",
    client: "TEXCO CONSTRUCTION (NSW) PTY LTD",
    contact: "Alexa Hamm",
    email: "alexa.hamm@texco.com.au",
    mobile: "0448 674 356",
    status: "Quote",
  },
  {
    ref_num: "5503",
    project: "Subway Kogarah Deep Clean",
    client: "Subway Kogarah",
    contact: "Dips Patel",
    email: "dips.patel@subwaykogarah.com",
    mobile: "0420640110",
    status: "Quote",
  },
  {
    ref_num: "5495",
    project: "QT Sydney kitchen clean",
    client: "QT Hotels and Resorts Pty Limited",
    contact: "Emily Russo",
    email: "emily.russo@qthotels.com",
    mobile: "0451 132 734",
    status: "Quote",
  },
  {
    ref_num: "5494",
    project: "22 Point Street Pyrmont",
    client: "FiDEM Property Construction",
    contact: "Joseph Eskander",
    email: "joseph.eskander@fidemproperty.com",
    mobile: "0433 805 742",
    status: "Quote",
  },
];

export function CustomTable2() {
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
                  <SelectItem className="text-xs" value="Quote">
                    Quote
                  </SelectItem>
                  <SelectItem className="text-xs" value="In Progress">
                    In Progress
                  </SelectItem>
                  <SelectItem className="text-xs" value="Completed">
                    Completed
                  </SelectItem>
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
