import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CompanyItem = {
  id: string;
  name: string;
};

type CompanyListProps = {
  items: CompanyItem[];
  onEdit: (id: string) => void;
};

const CompanyList: React.FC<CompanyListProps> = ({ items, onEdit }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id} className="bg-gray-200">
          <CardContent className="flex items-center justify-between p-2">
            <span className="font-bold text-md">{item.name}</span>
            <Button variant="ghost" onClick={() => onEdit(item.id)}>
              Edit
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const companyData: CompanyItem[] = [
  { id: "1", name: "z TC Company" },
  { id: "2", name: "na" },
];

const CompanyListPage: React.FC = () => {
  const handleEdit = (id: string) => {
    console.log("Editing company with ID:", id);
  };

  return <CompanyList items={companyData} onEdit={handleEdit} />;
};

export default CompanyListPage;
