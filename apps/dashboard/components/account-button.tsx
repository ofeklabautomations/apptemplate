"use client";

import { createClient } from "@/utils/update/client";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui";
import { Building, LogOut, User, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AccountButton() {
  const router = useRouter();

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  async function handleLogout() {
    setIsLoggingOut(true);
    const client = createClient();
    await client.auth.signOut();
    router.push("/auth/sign-in");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="cursor-pointer">
          <User className="w-[18px] h-[18px]" strokeWidth={2.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuGroup className="flex flex-col p-2">
          <h3 className="text-sm font-medium">John Doe</h3>
          <p className="text-xs text-muted-foreground">john@doe.com</p>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <div className="flex items-center justify-between w-full h-[24px]">
              <div>Account</div>
              <User className="w-[18px] h-[18px]" strokeWidth={2.5} />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <div className="flex items-center justify-between w-full h-[24px]">
              <div>Team settings</div>
              <Building className="w-[18px] h-[18px]" strokeWidth={2.5} />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={e => {
              e.preventDefault();
              handleLogout();
            }}
            disabled={isLoggingOut}
          >
            <div className="flex items-center justify-between w-full h-[24px]">
              <div>{isLoggingOut ? "Logging out..." : "Log out"}</div>
              <LogOut className="w-[18px] h-[18px]" strokeWidth={2.5} />
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="p-2">
          <Button className="cursor-pointer w-full h-8">Upgrade to Pro</Button>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
