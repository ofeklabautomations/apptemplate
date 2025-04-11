import { cn } from "@/utils/styles";
import { Button } from "@repo/ui";

export default function ProductCard({
  title,
  displayPrice,
  interval,
  selected,
  onClick,
}: {
  title: string;
  displayPrice: string;
  interval: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="w-full p-4 rounded-xl border bg-card shadow-sm hover:shadow-md hover:bg-muted transition-all duration-200"
      onClick={onClick}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "w-[16px] h-[16px] border rounded-full flex items-center justify-center bg-muted"
            )}
          >
            {selected && (
              <div
                className={cn("w-[12px] h-[12px] rounded-full bg-primary")}
              />
            )}
          </div>
          <h2 className="font-medium text-foreground">{title}</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-baseline">
            <span className="font-medium text-foreground">{displayPrice}</span>
            {interval != null && (
              <span className="text-sm text-muted-foreground">/{interval}</span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
