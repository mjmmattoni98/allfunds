"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarMenu } from "./Sidebar";

export default function NavbarComponent() {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-primary dark:bg-background dark:text-white text-sm py-4 dark:border-gray-600 border-b border-gray-600">
      <nav
        className="max-w-full w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger className="text-white mt-2">
                  <Menu />
                </SheetTrigger>
                <SheetContent side={"left"} className="w-[300px] sm:w-[340px]">
                  <SheetHeader>
                    <SheetTitle className="text-left text-xl font-bold ml-3">
                      Las mejores noticias de la Web
                    </SheetTitle>
                    <SheetDescription>
                      <SidebarMenu />
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <a
              className="flex-none text-xl ml-4 font-semibold text-white"
              href="/"
            >
              Las mejores noticias de la Web
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
