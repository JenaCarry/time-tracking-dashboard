"use client";
import { ProfileData } from "@/components/ProfileData";
import { Profile } from "@/components/Profile";
import { useState } from "react";

export default function Home() {
  const [order, setOrder] = useState<"daily" | "weekly" | "monthly">("weekly");

  return (
    <main className="w-full flex flex-col gap-6 lg:grid lg:grid-cols-[255px_1fr] lg:max-w-5xl lg:gap-8">
      <Profile order={order} setOrder={setOrder} />
      <ProfileData order={order} />
    </main>
  );
}
