"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  FileText,
  Download,
  Calculator,
  DollarSign,
  MapPin,
  Users,
  UserPlus,
  Book,
  Check,
  Key,
  Timer,
  Layout,
  File,
  Folder,
  DollarSignIcon,
  Image,
  Mail,
  UploadCloud,
  Trash2,
  X,
} from "lucide-react";

// Mock data for files
const files = [
  {
    id: 1,
    name: "site_plan.pdf",
    date: "2024-04-10",
    owner: "John Doe",
    active: true,
  },
  {
    id: 2,
    name: "job_images.zip",
    date: "2024-04-08",
    owner: "Alice Smith",
    active: false,
  },
  {
    id: 3,
    name: "invoice_001.pdf",
    date: "2024-04-12",
    owner: "John Doe",
    active: true,
  },
  {
    id: 4,
    name: "employee_list.xlsx",
    date: "2024-03-30",
    owner: "Alice Smith",
    active: true,
  },
  {
    id: 5,
    name: "contract_template.docx",
    date: "2024-04-05",
    owner: "Bob Johnson",
    active: false,
  },
  {
    id: 6,
    name: "meeting_notes.docx",
    date: "2024-04-15",
    owner: "David Lee",
    active: true,
  },
  {
    id: 7,
    name: "project_plan.pptx",
    date: "2024-04-01",
    owner: "Carla Davis",
    active: true,
  },
  {
    id: 8,
    name: "design_mockups.psd",
    date: "2024-04-07",
    owner: "Alice Smith",
    active: false,
  },
  {
    id: 9,
    name: "budget_report.xlsx",
    date: "2024-04-11",
    owner: "Bob Johnson",
    active: true,
  },
  {
    id: 10,
    name: "product_photos.zip",
    date: "2024-04-13",
    owner: "Carla Davis",
    active: false,
  },
  {
    id: 11,
    name: "sales_data.csv",
    date: "2024-04-09",
    owner: "David Lee",
    active: true,
  },
  {
    id: 12,
    name: "feedback_form.pdf",
    date: "2024-04-14",
    owner: "John Doe",
    active: true,
  },
];

// Tool options shown on the grid
const tools = [
  { icon: <FileText className="w-8 h-8" />, label: "Reference Card" },
  { icon: <Download className="w-8 h-8" />, label: "Enquiry Form" },
  { icon: <Calculator className="w-8 h-8" />, label: "Costing Calculator" },
  { icon: <DollarSign className="w-8 h-8" />, label: "Quotation" },
  { icon: <MapPin className="w-8 h-8" />, label: "Traffic Management Plan" },
  { icon: <Users className="w-8 h-8" />, label: "Contractors" },
  { icon: <UserPlus className="w-8 h-8" />, label: "Staffing" },
  { icon: <Book className="w-8 h-8" />, label: "Handbook" },
  { icon: <Check className="w-8 h-8" />, label: "WHNS" },
  { icon: <Key className="w-8 h-8" />, label: "Assets Register" },
  { icon: <Timer className="w-8 h-8" />, label: "Run Register" },
  { icon: <Layout className="w-8 h-8" />, label: "Dockets" },
  { icon: <File className="w-8 h-8" />, label: "Memos" },
  { icon: <Folder className="w-8 h-8" />, label: "Incidents / Accidents" },
  { icon: <DollarSignIcon className="w-8 h-8" />, label: "Invoicing" },
  { icon: <Folder className="w-8 h-8" />, label: "Client Supplied Documents" },
  { icon: <Image className="w-8 h-8" />, label: "Photos / Videos" },
  { icon: <Mail className="w-8 h-8" />, label: "Correspondence" },
];

export function JobToolsGrid() {
  const [open, setOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<null | {
    label: string;
    icon: ReactNode;
  }>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleCardClick = (tool: { label: string; icon: ReactNode }) => {
    setSelectedTool(tool);
    setOpen(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleFileUpload = () => {
    console.log("File uploaded:", file);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 max-w-7xl mx-auto">
        {tools.map((tool, index) => (
          <Card
            key={index}
            onClick={() => handleCardClick(tool)}
            className="flex items-center justify-center flex-col p-6 cursor-pointer hover:shadow-md transition"
          >
            <div className="mb-2 text-black">{tool.icon}</div>
            <CardContent className="p-0 text-center font-medium text-sm">
              {tool.label}
            </CardContent>
          </Card>
        ))}
      </div>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <div className="mx-auto w-full max-w-7xl px-4 py-6">
            <div className="w-full text-center">
              <DrawerTitle className=" mb-4 text-2xl font-semibold text-gray-800">
                <span className="text-primary">
                  {selectedTool?.label ?? "Tool"}
                </span>
              </DrawerTitle>
            </div>

            <Button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 text-black hover:bg-gray-300"
            >
              <X className="w-6 h-6" />
            </Button>

            <div className="grid grid-cols-12 gap-6">
              <div
                className="col-span-12 md:col-span-4 border border-dashed rounded-md p-6 text-center text-gray-500 cursor-pointer relative"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <UploadCloud className="mx-auto mb-2" />
                <p>Drag and drop files here or click to browse</p>

                <input
                  id="file-upload"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />

                {file && (
                  <div className="mt-4">
                    <p>Selected File: {file.name}</p>
                    <Button onClick={handleFileUpload} className="mt-4 w-full">
                      Upload
                    </Button>
                  </div>
                )}
              </div>

              {/* Right: File Table with Scroll */}
              <div className="col-span-12 md:col-span-8 overflow-auto max-h-96">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2">Preview</th>
                      <th className="p-2">Name</th>
                      <th className="p-2">Created Date</th>
                      <th className="p-2">Owner</th>
                      <th className="p-2">Actions</th>
                      <th className="p-2">Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((file) => (
                      <tr key={file.id} className="border-b">
                        <td className="p-2">
                          <div className="w-10 h-10 bg-gray-200 rounded" />
                        </td>
                        <td className="p-2">{file.name}</td>
                        <td className="p-2">{file.date}</td>
                        <td className="p-2">{file.owner}</td>
                        <td className="p-2 flex gap-2">
                          <Button variant="outline" size="icon">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="destructive" size="icon">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </td>
                        <td className="p-2">
                          <Switch checked={file.active} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
