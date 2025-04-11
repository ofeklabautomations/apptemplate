import AccountButton from "@/components/account-button";
import UpgradeButton from "@/components/upgrade-dialog";
import Link from "next/link";

export default function ConsoleNav() {
  return (
    <div className="min-h-navbar-height sticky top-0 bg-background z-50 flex items-center w-full border-b">
      <div className="max-w-console-width mx-auto flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="text-2xl font-bold">Acme</div>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <UpgradeButton />
          <AccountButton />
        </div>
      </div>
    </div>
  );
}
