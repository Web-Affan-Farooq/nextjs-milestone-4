import React from 'react';
import { SidebarContent, SidebarGroup, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Sidebar } from '@/components/ui/sidebar';
import { SidebarHeader } from '@/components/ui/sidebar';
import { SidebarFooter } from '@/components/ui/sidebar';

const Home = () => {
  return (
    <SidebarProvider>
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
    <SidebarTrigger/>
    </SidebarProvider>
  )
}

export default Home;