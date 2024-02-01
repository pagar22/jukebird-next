"use client";
import React, { useState } from "react";
import { useCampaigns } from "@/features/campaigns/api/useCampaigns";

export const CampaignsListScreen = async () => {
  const [page, setPage] = useState(1);
  const campaigns = await useCampaigns(page);

  return (
    <main>
      <h1>Welcome Back Player One!</h1>
      <ul>
        {campaigns &&
          campaigns?.map((item) => {
            console.log(item.badge_url);
            return (
              <>
                <img
                  src={`${item.badge_url}.png`}
                  alt="campaign"
                  style={{ height: 30, width: 30 }}
                />
                <p>{item.name}</p>
              </>
            );
          })}
      </ul>
      {/* <button onClick={() => setPage(page + 1)}>Next Page</button> */}
    </main>
  );
};
