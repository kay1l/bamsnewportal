"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CompanyItem = {
  id: string;
  name: string;
};

type CompanyListProps = {
  items: CompanyItem[];
};

const CompanyList: React.FC<CompanyListProps> = ({ items }) => {
  const router = useRouter();

  const handleCardClick = (id: string) => {
    router.push(`/traffic_control/contact_list`);
  };

  const handleEditClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); 
    router.push(`/traffic_control/company_update`);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id} className="bg-gray-200">
          <CardContent
            onClick={() => handleCardClick(item.id)}
            className="flex items-center justify-between p-2 transition"
          >
            <span className="font-bold text-md">{item.name}</span>
            <Button
              variant="ghost"
              onClick={(e) => handleEditClick(item.id, e)}>
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
  return <CompanyList items={companyData} />;
};

export default CompanyListPage;
