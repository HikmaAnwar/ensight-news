import Head from "next/head";
import Image from "next/image";

export default function Resources() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
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
          <h1
            className="text-4xl font-bold"
            style={{ color: "var(--color-blueblack-white)" }}
          >
            Ensight Intelligence Hub
          </h1>
          <p className="mt-2" style={{ color: "var(--color-muted)" }}>
            Your central access point for in-depth reports, timely data
            insights, and critical economic analysis from Ensight experts.
          </p>

          <div className="mt-6">
            <h2
              className="text-2xl font-semibold flex items-center mb-4"
              style={{ color: "var(--color-blueblack-white)" }}
            >
              <span className="mr-2">💡</span> Featured Insight
            </h2>
            <div
              className="flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <div className="md:w-1/2">
                <Image
                  src="https://via.placeholder.com/600x400?text=Ocean+Image"
                  alt="Ocean scene"
                  className="w-full h-48 md:h-full object-cover"
                  width={600}
                  height={300}
                />
              </div>
              <div
                className="md:w-1/2 p-4 flex flex-col justify-center"
                style={{ backgroundColor: "var(--color-surface-alt)" }}
              >
                <span
                  className="inline-block text-center w-30 text-xs font-semibold px-2 py-0.5 rounded mb-1 whitespace-nowrap"
                  style={{
                    backgroundColor: "#facc15",
                    color: "var(--color-blueblack-white)",
                  }}
                >
                  SPECIAL REPORT
                </span>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: "var(--color-blueblack-white)" }}
                >
                  AI’s Impact on Emerging Market Economies
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: "var(--color-secondary)" }}
                >
                  How Artificial Intelligence is reshaping industries,
                  investments, and policy in emerging markets. Explore
                  opportunities and challenges.
                </p>
                <button
                  className="text-sm px-3 py-1.5 rounded w-fit"
                  style={{
                    backgroundColor: "var(--color-primary-accent)",
                    color: "var(--color-light)",
                  }}
                >
                  Read Full Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "var(--color-blueblack-white)" }}
          >
            Our Latest Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="rounded-lg shadow-md overflow-hidden"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <Image
                src="https://via.placeholder.com/400x200?text=Silhouette+Feet"
                alt="Silhouette of feet"
                className="w-full h-48 object-cover"
                width={400}
                height={200}
              />
              <div className="p-4">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--color-blueblack-white)" }}
                >
                  Ethiopia Country Report - Q4 2024
                </h3>
                <p className="mt-2" style={{ color: "var(--color-muted)" }}>
                  Comprehensive overview of Ethiopias political, economic, and
                  business environment, with forecasts and risk assessments.
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Published: Nov 15, 2024
                </p>
                <button
                  className="mt-4"
                  style={{
                    color: "var(--color-blue)",
                    textDecoration: "underline",
                  }}
                >
                  Download PDF
                </button>
              </div>
            </div>

            <div
              className="rounded-lg shadow-md overflow-hidden"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <Image
                src="https://via.placeholder.com/400x200?text=Coastal+Scene"
                alt="Coastal scene"
                className="w-full h-48 object-cover"
                width={400}
                height={200}
              />
              <div className="p-4">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--color-blueblack-white)" }}
                >
                  Global Economic Outlook 2025
                </h3>
                <p className="mt-2" style={{ color: "var(--color-muted)" }}>
                  Analysis of key global trends, inflation forecasts, and
                  geopolitical factors shaping the year ahead.
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Published: Dec 01, 2024
                </p>
                <button
                  className="mt-4"
                  style={{
                    color: "var(--color-blue)",
                    textDecoration: "underline",
                  }}
                >
                  View Summary
                </button>
              </div>
            </div>

            <div
              className="rounded-lg shadow-md overflow-hidden"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <Image
                src="https://via.placeholder.com/400x200?text=Deer+Landscape"
                alt="Deer in hazy landscape"
                className="w-full h-48 object-cover"
                width={400}
                height={200}
              />
              <div className="p-4">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--color-blueblack-white)" }}
                >
                  Supply Chain Resilience in Volatile Times
                </h3>
                <p className="mt-2" style={{ color: "var(--color-muted)" }}>
                  Strategies for businesses to navigate disruptions and build
                  more robust global supply chains.
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Published: Oct 28, 2024
                </p>
                <button
                  className="mt-4"
                  style={{
                    color: "var(--color-blue)",
                    textDecoration: "underline",
                  }}
                >
                  Read Insight
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "var(--color-blueblack-white)" }}
          >
            Data & Ensights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: "var(--color-surface-alt)" }}
            >
              <div className="text-2xl mb-2">📈</div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--color-blueblack-white)" }}
              >
                Weekly Market Snapshot
              </h3>
              <p className="mt-2" style={{ color: "var(--color-muted)" }}>
                Key commodity prices, currency movements, and equity index
                performance from the past week.
              </p>
              <p
                className="text-sm mt-2"
                style={{ color: "var(--color-secondary)" }}
              >
                Updated: May 10, 2025
              </p>
              <button
                className="mt-4"
                style={{
                  color: "var(--color-blue)",
                  textDecoration: "underline",
                }}
              >
                View Data
              </button>
            </div>

            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: "var(--color-surface-alt)" }}
            >
              <div className="text-2xl mb-2">💡</div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--color-blueblack-white)" }}
              >
                Understanding Forex Liberalization
              </h3>
              <p className="mt-2" style={{ color: "var(--color-muted)" }}>
                A concise explainer on the implications and processes involved
                in liberalizing a foreign exchange regime.
              </p>
              <p
                className="text-sm mt-2"
                style={{ color: "var(--color-secondary)" }}
              >
                Article: Nov 05, 2024
              </p>
              <button
                className="mt-4"
                style={{
                  color: "var(--color-blue)",
                  textDecoration: "underline",
                }}
              >
                Read Ensight
              </button>
            </div>

            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: "var(--color-surface-alt)" }}
            >
              ,<div className="text-2xl mb-2">📜</div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--color-blueblack-white)" }}
              >
                Inflation Tracker: Africa Focus
              </h3>
              <p className="mt-2" style={{ color: "var(--color-muted)" }}>
                Monthly updates on inflation rates across key African economies,
                with comparative analysis.
              </p>
              <p
                className="text-sm mt-2"
                style={{ color: "var(--color-secondary)" }}
              >
                Updated: Dec 05, 2024
              </p>
              <button
                className="mt-4"
                style={{
                  color: "var(--color-blue)",
                  textDecoration: "underline",
                }}
              >
                Access Tracker
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "var(--color-blueblack-white)" }}
            >
              Date Hub & Archive
            </h2>
            <p className="mb-4" style={{ color: "var(--color-muted)" }}>
              Key upcoming dates and access to archived materials.
            </p>
            <div className="space-y-4">
              <div
                className="flex items-center justify-between p-4 rounded-lg shadow-md"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded mr-2"
                    style={{
                      backgroundColor: "var(--color-background)",
                      color: "var(--color-blueblack-white)",
                    }}
                  >
                    Dec 18
                  </span>
                  <span style={{ color: "var(--color-blueblack-white)" }}>
                    Webinar: 2025 Africa Outlook
                  </span>
                </div>
                <button
                  style={{
                    color: "var(--color-blue)",
                    textDecoration: "underline",
                  }}
                >
                  Register
                </button>
              </div>
              <div
                className="flex items-center justify-between p-4 rounded-lg shadow-md"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded mr-2"
                    style={{
                      backgroundColor: "var(--color-background)",
                      color: "var(--color-blueblack-white)",
                    }}
                  >
                    Jan 10
                  </span>
                  <span style={{ color: "var(--color-blueblack-white)" }}>
                    Release: Q1 Global Commodity Forecast
                  </span>
                </div>
                <button
                  style={{
                    color: "var(--color-blue)",
                    textDecoration: "underline",
                  }}
                >
                  Details
                </button>
              </div>
              <div
                className="flex items-center justify-between p-4 rounded-lg shadow-md"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded mr-2"
                    style={{
                      backgroundColor: "var(--color-background)",
                      color: "var(--color-blueblack-white)",
                    }}
                  >
                    Archive
                  </span>
                  <span style={{ color: "var(--color-blueblack-white)" }}>
                    Access All Past Reports & Insights
                  </span>
                </div>
                <button
                  style={{
                    color: "var(--color-blue)",
                    textDecoration: "underline",
                  }}
                >
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
