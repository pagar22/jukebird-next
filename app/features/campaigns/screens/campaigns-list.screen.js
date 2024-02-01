import React from "react";
import { useCampaigns } from "@/features/campaigns/api/useCampaigns";

export const CampaignsListScreen = async () => {
  const campaigns = await useCampaigns();

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
    </main>
  );
};
