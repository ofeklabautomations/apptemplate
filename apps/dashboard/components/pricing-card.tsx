import { Button } from "@repo/ui";

export default function PricingCard({
  title,
  description,
  loading,
  features,
  price,
  interval,
  savePercentage,
  buttonText = "Upgrade Now",
  onClick,
  selected,
  disabled,
}: {
  title: string;
  description: string;
  loading?: boolean;
  features: string[];
  price: string;
  interval: string;
  savePercentage?: number;
  buttonText?: string;
  onClick: () => void;
  selected?: boolean;
  disabled?: boolean;
}) {
  return (
    <div
      className={`w-full p-6 rounded-xl border ${selected ? "border-primary" : "border-border"} bg-card hover:shadow-md transition-all duration-200`}
    >
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          {selected && (
            <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          )}
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm text-muted-foreground">/{interval}</span>
        </div>

        {savePercentage && (
          <div className="inline-block px-3 py-1 text-sm bg-emerald-100 text-emerald-700 rounded-full">
            Save {savePercentage}%
          </div>
        )}

        <p className="text-sm text-muted-foreground">{description}</p>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <Button
          className="w-full"
          size="lg"
          onClick={onClick}
          variant={selected ? "default" : "outline"}
          disabled={loading || disabled}
        >
          {loading ? "Loading..." : buttonText}
        </Button>
      </div>
    </div>
  );
}
