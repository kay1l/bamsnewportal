"use client"

import * as React from "react"
import {
  GalleryVerticalEnd,
  Map,
  Droplets,
  ShieldCheck,
  Factory,
  Hammer,
  Car,
  Box,
  Settings,
  Bell,
  HelpCircle,
  Mail,
  UserPlus,
  Network,
  BadgeCheck,
  FileBadge2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import logoImage from "@/assets/logo.png"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Bams Group Home",
      logo: logoImage,
      plan: "Bams.au",
    },
  ],
  navMain: [
    {
      title: "Traffic Control",
      url: "#",
      icon: Map,
      items: [
        {
          title: "Jobs",
          url: "/traffic_control/jobs",
        },
        {
          title: "Contacts",
          url: "#",
        },
        {
          title: "Assets",
          url: "#",
        },
        {
          title: "Admin",
          url: "#",
        },
        {
          title: "Schedule of Rates",
          url: "#",
        },
        {
          title: "Pay Guide",
          url: "#",
        },
        {
          title: "Staffing ",
          url: "#",
        },
        {
          title: "Notices",
          url: "#",
        },
      ],
    },
    {
      title: "Hygiene Management",
      url: "#",
      icon: Droplets,
      items: [
        {
          title: "Jobs",
          url: "/hygiene_management/jobs",
        },
        {
          title: "Contacts",
          url: "#",
        },
        {
          title: "Assets",
          url: "#",
        },
        {
          title: "Admin",
          url: "#",
        },
        {
          title: "Schedule of Rates",
          url: "#",
        },
        {
          title: "Pay Guide",
          url: "#",
        },
        {
          title: "Staffing ",
          url: "#",
        },
        {
          title: "Notices",
          url: "#",
        },
      ],
    },
    {
      title: "Security",
      url: "#",
      icon: ShieldCheck,
      items: [
        {
          title: "Jobs",
          url: "#",
        },
        {
          title: "Contacts",
          url: "#",
        },
        {
          title: "Assets",
          url: "#",
        },
        {
          title: "Admin",
          url: "#",
        },
        {
          title: "Schedule of Rates",
          url: "#",
        },
        {
          title: "Pay Guide",
          url: "#",
        },
        {
          title: "Staffing ",
          url: "#",
        },
        {
          title: "Notices",
          url: "#",
        },
      ],
    },
    {
      title: "Manufacturing",
      url: "#",
      icon: Factory,
      items: [
        {
          title: "Jobs",
          url: "#",
        },
        {
          title: "Contacts",
          url: "#",
        },
        {
          title: "Assets",
          url: "#",
        },
        {
          title: "Admin",
          url: "#",
        },
        {
          title: "Schedule of Rates",
          url: "#",
        },
        {
          title: "Pay Guide",
          url: "#",
        },
        {
          title: "Staffing ",
          url: "#",
        },
        {
          title: "Notices",
          url: "#",
        },
      ],
    },
    {
      title: "Construction",
      url: "#",
      icon: Hammer,
      items: [
        {
          title: "Jobs",
          url: "#",
        },
        {
          title: "Contacts",
          url: "#",
        },
        {
          title: "Assets",
          url: "#",
        },
        {
          title: "Admin",
          url: "#",
        },
        {
          title: "Schedule of Rates",
          url: "#",
        },
        {
          title: "Pay Guide",
          url: "#",
        },
        {
          title: "Staffing ",
          url: "#",
        },
        {
          title: "Notices",
          url: "#",
        },
      ],
    },
    {
      title: "Vehicles",
      url: "https://au.mixtelematics.com/#/login",
      icon: Car,
    },
    {
      title: "Assets",
      url: "#",
      icon: Box,
      items: [
        {
          title: "Asset Scheduling",
          url: "#",
        },
        {
          title: "Asset Tracking",
          url: "#",
        },
        {
          title: "Asset Register",
          url: "#",
        },
      ],
    },
    {
      title: "Admin",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Hubspot",
          url: "#",
        },
        {
          title: "Profiles and Capability Statement",
          url: "#",
        },
        {
          title: "BMS Licenses",
          url: "#",
        },
        {
          title: "Bams Logs",
          url: "#",
        },
        {
          title: "Brochures & Flyers ",
          url: "#",
        },
        {
          title: "Business Cards",
          url: "#",
        },
        {
          title: "Human Capital",
          url: "#",
        },
        {
          title: "Insurances & Certificates",
          url: "#",
        },
        {
          title: "Bams Logos",
          url: "#",
        },
        {
          title: "Slideshows & Presentations",
          url: "#",
        },
        {
          title: "Stationary",
          url: "#",
        },
        {
          title: "Accreditation",
          url: "#",
        },
        {
          title: "Associations",
          url: "#",
        },
        {
          title: "Certifications",
          url: "#",
        },
        {
          title: "Licensee",
          url: "#",
        },
      ],
    },
    {
      title: "Notices",
      url: "#",
      icon: Bell,
    },
    {
      title: "Enquiry",
      url: "#",
      icon: HelpCircle,
    },
    {
      title: "Email",
      url: "https://outlook.office.com/mail/",
      icon: Mail,
    },
    {
      title: "Contacts",
      url: "#",
      icon: UserPlus,
      items: [
        {
          title: "All contacts",
          url: "#",
        },
        {
          title: "Clients",
          url: "#",
        },
        {
          title: "Suppliers",
          url: "#",
        },
        {
          title: "Contractors",
          url: "#",
        },
        {
          title: "Bams Employees",
          url: "#",
        },
      ],
    },

    {
      title: "Hubspot",
      url: "https://app.hubspot.com/login/?loginRedirectUrl=https%3A%2F%2Fapp.hubspot.com%2Fcontacts%2F8004478%2Fdeals%2Fboard%2Fview%2Fall%2F&authFailureReason=401%20Unauthorized&loginPortalId=8004478",
      icon: Network,
    },
    {
      title: "Employment Hero",
      url: "#",
      icon: BadgeCheck,
    },
    {
      title: "Employee File",
      url: "#",
      icon: FileBadge2,
    },
    
  ],

 
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />

      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
