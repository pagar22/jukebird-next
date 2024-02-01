export const useCampaigns = async (page = 1) => {
  const resp = await fetch(
    `https://api.sewyseven.com/clubs/?year=2022&page_size=${page}`
  );
  const campagins = await resp.json();
  console.log(campagins);
  return campagins?.items;
};
