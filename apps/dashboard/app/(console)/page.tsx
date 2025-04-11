import { createClient } from "@/utils/update/server";
import ConsoleHomeClient from "./page.client";

export default async function Console() {
  const client = await createClient();
  const { data, error } = await client.billing.getSubscriptions();
  if (error) {
    return <div>Error fetching subscriptions</div>;
  }
  return <ConsoleHomeClient subscriptionData={data.subscriptions} />;
}
