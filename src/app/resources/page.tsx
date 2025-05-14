import Head from "next/head";
import Image from "next/image";

export default function resources() {
  return (
    <div className="min-h-screen bg-gray-50 shadow-lg">
      <Head>
        <title>Ensight Intelligence Hub</title>
        <meta
          name="description"
          content="Your central access point for in-depth reports, timely data insights, and critical economic analysis."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Ensight Intelligence Hub
          </h1>
          <p className="text-gray-600 mb-8">
            Your central access point for in-depth reports, timely data
            insights, and critical economic analysis from Ensight experts.
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center mb-4">
              <span className="mr-2">💡</span> Featured Insight
            </h2>
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:w-1/2">
                <Image
                  src="https://via.placeholder.com/600x400?text=Ocean+Image"
                  alt="Ocean scene"
                  className="w-full h-48 md:h-full object-cover"
                  width={600}
                  height={300}
                />
              </div>
              <div className="md:w-1/2 p-4 bg-blue-50 flex flex-col justify-center">
                <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-0.5 rounded mb-1 whitespace-nowrap">
                  SPECIAL REPORT
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  AI’s Impact on Emerging Market Economies
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  How Artificial Intelligence is reshaping industries,
                  investments, and policy in emerging markets. Explore
                  opportunities and challenges.
                </p>
                <button className="bg-red-500 text-white text-sm px-3 py-1.5 rounded hover:bg-red-600 w-fit">
                  Read Full Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Our Latest Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="https://via.placeholder.com/400x200?text=Silhouette+Feet"
                alt="Silhouette of feet"
                className="w-full h-48 object-cover"
                width={400}
                height={200}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Ethiopia Country Report - Q4 2024
                </h3>
                <p className="text-gray-600 mt-2">
                  Comprehensive overview of Ethiopias political, economic, and
                  business environment, with forecasts and risk assessments.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Published: Nov 15, 2024
                </p>
                <button className="mt-4 text-blue-600 hover:underline">
                  Download PDF
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="https://via.placeholder.com/400x200?text=Coastal+Scene"
                alt="Coastal scene"
                className="w-full h-48 object-cover"
                width={400}
                height={200}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Global Economic Outlook 2025
                </h3>
                <p className="text-gray-600 mt-2">
                  Analysis of key global trends, inflation forecasts, and
                  geopolitical factors shaping the year ahead.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Published: Dec 01, 2024
                </p>
                <button className="mt-4 text-blue-600 hover:underline">
                  View Summary
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="https://via.placeholder.com/400x200?text=Deer+Landscape"
                alt="Deer in hazy landscape"
                className="w-full h-48 object-cover"
                width={400}
                height={200}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Supply Chain Resilience in Volatile Times
                </h3>
                <p className="text-gray-600 mt-2">
                  Strategies for businesses to navigate disruptions and build
                  more robust global supply chains.
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Published: Oct 28, 2024
                </p>
                <button className="mt-4 text-blue-600 hover:underline">
                  Read Insight
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Data & Ensights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="text-lg font-semibold text-gray-900">
                Weekly Market Snapshot
              </h3>
              <p className="text-gray-600 mt-2">
                Key commodity prices, currency movements, and equity index
                performance from the past week.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Updated: May 10, 2025
              </p>
              <button className="mt-4 text-blue-600 hover:underline">
                View Data
              </button>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-2xl mb-2">💡</div>
              <h3 className="text-lg font-semibold text-gray-900">
                Understanding Forex Liberalization
              </h3>
              <p className="text-gray-600 mt-2">
                A concise explainer on the implications and processes involved
                in liberalizing a foreign exchange regime.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Article: Nov 05, 2024
              </p>
              <button className="mt-4 text-blue-600 hover:underline">
                Read Ensight
              </button>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-2xl mb-2">📜</div>
              <h3 className="text-lg font-semibold text-gray-900">
                Inflation Tracker: Africa Focus
              </h3>
              <p className="text-gray-600 mt-2">
                Monthly updates on inflation rates across key African economies,
                with comparative analysis.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Updated: Dec 05, 2024
              </p>
              <button className="mt-4 text-blue-600 hover:underline">
                Access Tracker
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Date Hub & Archive
            </h2>
            <p className="text-gray-600 mb-4">
              Key upcoming dates and access to archived materials.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                <div>
                  <span className="inline-block bg-blue-900 text-white px-3 py-1 rounded mr-2">
                    Dec 18
                  </span>
                  <span className="text-gray-900">
                    Webinar: 2025 Africa Outlook
                  </span>
                </div>
                <button className="text-blue-600 hover:underline">
                  Register
                </button>
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                <div>
                  <span className="inline-block bg-blue-900 text-white px-3 py-1 rounded mr-2">
                    Jan 10
                  </span>
                  <span className="text-gray-900">
                    Release: Q1 Global Commodity Forecast
                  </span>
                </div>
                <button className="text-blue-600 hover:underline">
                  Details
                </button>
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                <div>
                  <span className="inline-block bg-blue-900 text-white px-3 py-1 rounded mr-2">
                    Archive
                  </span>
                  <span className="text-gray-900">
                    Access All Past Reports & Insights
                  </span>
                </div>
                <button className="text-blue-600 hover:underline">
                  Browse Archive
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
