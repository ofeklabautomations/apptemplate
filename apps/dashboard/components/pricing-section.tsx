"use client";

import React, { useState } from "react";
import { ProductWithPrices } from "@updatedev/js";
import { Button } from "@repo/ui";
import ProductCard from "@/components/product-card";
import { createClient } from "@/utils/update/client";

export default function PricingSection({
  product,
}: {
  product: ProductWithPrices;
}) {
  const [loading, setLoading] = useState<"month" | "year" | null>(null);
  const [selected, setSelected] = useState<"month" | "year">("month");

  async function handleUpgrade(interval: "month" | "year") {
    setLoading(interval);
    const priceId = product.prices.find(p => p.interval === interval)?.id;
    if (!priceId) {
      setLoading(null);
      return;
    }
    const client = createClient();
    const redirectUrl = `${window.location.origin}/dashboard`;
    const { data, error } = await client.billing.createCheckoutSession(
      priceId,
      {
        redirect_url: redirectUrl,
      }
    );

    if (error) {
      setLoading(null);
      return;
    }

    window.location.href = data.url;
  }

  function getCurrencySymbol(currency: string) {
    switch (currency) {
      case "usd":
        return "$";
      case "eur":
        return "€";
      case "gbp":
        return "£";
      default:
        return currency;
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-2">
        {product.prices.map((price, index) => {
          const symbol = getCurrencySymbol(price.currency);
          const displayPrice = price.unit_amount
            ? `${symbol}${(price.unit_amount / 100).toFixed(2)}`
            : "Custom";

          return (
            <ProductCard
              key={index}
              title={price.interval === "month" ? "Monthly" : "Yearly"}
              displayPrice={displayPrice}
              interval={price.interval}
              selected={selected === price.interval}
              onClick={() => setSelected(price.interval as "month" | "year")}
            />
          );
        })}
      </div>
      <Button
        className="w-full mt-4"
        onClick={() => handleUpgrade(selected)}
        disabled={loading === selected}
      >
        {loading === selected ? "Upgrading..." : "Upgrade"}
      </Button>
    </div>
  );
}
