"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JobToolsGrid } from "@/custom_components/jobfile";
export default function Jobs() {
  const router = useRouter();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-800">
              Job File: 5502 - Most Bless Nights 2025 Week 5
            </h1>
            <div className="mt-4 flex justify-center">
              {/* Sheet Trigger Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="cursor-pointer">View Job Details</Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Job Tools</SheetTitle>
                    <SheetDescription>
                      Here you can manage additional tools or files related to
                      this job.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-4">
                    Insert job tool form or content here.
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <JobToolsGrid />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
