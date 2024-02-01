

export const useCampaigns = async () => {
    const resp = await fetch("https://api.sewyseven.com/clubs")
    const campagins = await resp.json()
    return campagins?.items
}