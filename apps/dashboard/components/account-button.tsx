"use client";

import UpgradeButton from "@/components/upgrade-dialog";
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
import useSWR from "swr";

export default function AccountButton() {
  const router = useRouter();

  const { data: subscriptionData } = useSWR(
    "subscriptions-update",
    async () => {
      const client = createClient();
      const { data, error } = await client.billing.getSubscriptions();
      if (error) {
        throw new Error("Failed to fetch subscriptions");
      }
      return data;
    }
  );

  const { data: accountData } = useSWR("account-update", async () => {
    const client = createClient();
    const { data, error } = await client.auth.getUser();
    if (error) {
      throw new Error("Failed to fetch subscriptions");
    }
    return data;
  });

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  async function handleLogout() {
    setIsLoggingOut(true);
    const client = createClient();
    await client.auth.signOut();
    router.push("/auth/sign-in");
  }

  const showPaidContent =
    subscriptionData?.subscriptions != null &&
    subscriptionData.subscriptions.length > 0 &&
    subscriptionData.subscriptions[0].status === "active";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="cursor-pointer">
          <User className="w-[18px] h-[18px]" strokeWidth={2.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuGroup className="flex flex-col p-2">
          <h3 className="text-sm font-medium">
            {accountData?.user?.user_metadata?.name ??
              accountData?.user?.email ??
              "User"}
          </h3>
          <p className="text-xs text-muted-foreground">
            {accountData?.user?.email}
          </p>
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
        {!showPaidContent && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="p-2">
              <UpgradeButton className="w-full h-8" />
            </DropdownMenuGroup>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
