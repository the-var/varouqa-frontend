export async function getWeather() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/weatherforecast`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return res.json();
}
