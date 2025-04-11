"use client";

import useSWR from "swr";
import { createClient } from "@/utils/update/client";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Skeleton,
} from "@repo/ui";
import PricingSection from "@/components/pricing-section";
import { ProductWithPrices, Subscription } from "@updatedev/js";
import { CheckCircle } from "lucide-react";

export default function UpgradeButton() {
  const { data: productData } = useSWR("products-update", async () => {
    const client = createClient();
    const { data, error } = await client.billing.getProducts();
    if (error) {
      throw new Error("Failed to fetch products");
    }
    return data;
  });

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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"}>Upgrade</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upgrade to Pro</DialogTitle>
          <DialogDescription>
            Unlock all features and get priority support.
          </DialogDescription>
        </DialogHeader>
        <Features />
        <InnerContent
          productData={productData != null ? productData.products : null}
          subscriptionData={
            subscriptionData != null ? subscriptionData.subscriptions : null
          }
        />
      </DialogContent>
    </Dialog>
  );
}

function Features() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-primary" />
        <p>Unlimited API requests</p>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-primary" />
        <p>Priority support</p>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-primary" />
        <p>Unlimited users</p>
      </div>
    </div>
  );
}

function InnerContent({
  productData,
  subscriptionData,
}: {
  productData: ProductWithPrices[] | null;
  subscriptionData: Subscription[] | null;
}) {
  if (productData == null || subscriptionData == null) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  const product = productData.length === 0 ? null : productData[0];

  if (product == null) {
    return <div>No product found</div>;
  }

  return <PricingSection product={product} />;
}
