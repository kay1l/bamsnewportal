"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ContactItem = {
  id: string;
  name: string;
};

type ContactListProps = {
  items: ContactItem[];
};

const CompanyList: React.FC<ContactListProps> = ({ items }) => {
  const router = useRouter();

  const handleCardClick = (id: string) => {
    router.push(`/security/job_create_with_client`);
  };

  const handleEditClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); 
    router.push(`/security/contact_update`);
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

const contactData: ContactItem[] = [
  { id: "1", name: "Liam Flower" }, 
];

const ContactListPage: React.FC = () => {
  return <CompanyList items={contactData} />;
};

export default ContactListPage;
