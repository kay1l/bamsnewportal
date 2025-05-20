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
          url: "/traffic_control/notices",
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
          url: "/hygiene_management/notices",
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
