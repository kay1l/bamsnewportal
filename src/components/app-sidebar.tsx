"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
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

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Bams Group Home",
      logo: GalleryVerticalEnd,
      plan: "Bams.au",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],
  navMain: [
    {
      title: "Traffic Control",
      url: "#",
      icon: SquareTerminal,
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
      title: "Hygiene Management",
      url: "#",
      icon: Bot,
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
      title: "Security",
      url: "#",
      icon: BookOpen,
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
      icon: Settings2,
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
      icon: Settings2,
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
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Assets",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Admin",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Notices",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Enquiry",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Email",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Contacts",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },

    {
      title: "Hubspot",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Employment Hero",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Employee File",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
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
