"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


import { 
    LayoutDashboard, 
    Calendar, 
    User, 
    CreditCard, 
    Settings 
  } from "lucide-react"; // Ensure these icons are available in lucide-react
  
  const montserrat = Montserrat({
    weight: "600", 
    subsets: ["latin"]
  });
  
  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-sky-500"
    },
    {
      label: "Plan",
      icon: Calendar, // Assuming "Plan" is the correct icon, replace with an appropriate icon name if different
      href: "/plan",
      color: "text-sky-500"
    },
    {
      label: "Profile",
      icon: User,
      href: "/profile",
      color: "text-sky-500"
    },
    {
      label: "Subscription",
      icon: CreditCard,
      href: "/Subscription",
      color: "text-sky-500"
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      color: "text-sky-500"
    }
  ];
  

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            alt="Logo"
                            src="/logo.png"
                        />
                    </div>
                    <h1 className={cn ("text-2xl font-bold", montserrat.className)}>
                    WeightAICoach
                </h1>
            </Link>
            <div className="space-y-1">
                {routes.map((route) =>(
                    <Link
                    href={route.href}
                    key={route.href}
                    className={cn ("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
                    >
                        <div className="flex items-center flex-1">
                            <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>

        </div>
        </div >
    );
}

export default Sidebar;