import Layout from './(layouts)/layout-3/layout';
import { getWeather } from '@/lib/api';

export default async function HomePage() {
  const weather = await getWeather();

  return (
    <Layout>
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Weather Data</h1>

        <div className="space-y-4">
          {weather.map((item: any, index: number) => (
            <div 
              key={index} 
              className="border"
            >
              <p><strong>Date:</strong> {item.date}</p>
              <p><strong>Temp (C):</strong> {item.temperatureC}</p>
              <p><strong>Temp (F):</strong> {item.temperatureF}</p>
              <p><strong>Summary:</strong> {item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
