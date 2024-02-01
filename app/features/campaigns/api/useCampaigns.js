export const useCampaigns = async () => {
  const resp = await fetch("https://api.sewyseven.com/clubs?year=2022");
  const campagins = await resp.json();
  return campagins?.items;
};
