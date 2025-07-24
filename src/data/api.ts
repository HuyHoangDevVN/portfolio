export async function getPortfolioData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl)
    throw new Error(
      "API URL not set. Please set NEXT_PUBLIC_API_URL in your .env.local file."
    );
  const res = await fetch(`${apiUrl}`);
  if (!res.ok) throw new Error("Failed to fetch portfolio data");
  return res.json();
}
