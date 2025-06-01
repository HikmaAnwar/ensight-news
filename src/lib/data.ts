import { Article, SubscriptionPlan, Startup, Plan } from "./types";

export const getArticleBySlug = async (
  slug: string
): Promise<Article | null> => {
  const articles: Article[] = [
    {
      id: "1",
      slug: "ethiopia-financing-models-gerd",
      title:
        "Ethiopia Explores New Financing Models for GERD Completion and Infrastructure Push",
      category: "Economy",
      author: "John Abebe",
      date: "May 15, 2025",
      readTime: "8 min read",
      image: "/images/gerd-placeholder.png",
      description:
        "This article explores Ethiopia's innovative financing models for the Grand Ethiopian Renaissance Dam (GERD) and other infrastructure projects...",
      content:
        "This article explores Ethiopia's innovative financing models for the Grand Ethiopian Renaissance Dam (GERD) and other infrastructure projects...",
      href: "/ethiopia-financing-models-gerd",
      isPremium: false,
      caption: "Ethiopia Explores New Financing Models for GERD Completion",
    },
    {
      id: "2",
      slug: "ai-startups-2025",
      title: "AI Startups: The Next Big Thing in 2025",
      category: "Featured",
      author: "Sarah Tsegaye",
      date: "May 10, 2025",
      readTime: "4 min read",
      image: "/images/ai-startups.png",
      description:
        "Explore the rise of AI startups and their impact in 2025...",
      content: "Explore the rise of AI startups and their impact in 2025...",
      href: "/ai-startups-2025",
      isPremium: false,
      caption: "AI Startups: The Next Big Thing in 2025",
    },
  ];
  return articles.find((a) => a.slug === slug) || null;
};

export const getPopularArticles = async (): Promise<Article[]> => {
  return [
    {
      id: "1",
      slug: "ethiopia-financing-models-gerd",
      title:
        "Ethiopia Explores New Financing Models for GERD Completion and Infrastructure Push",
      category: "Economy",
      author: "John Abebe",
      date: "May 15, 2025",
      readTime: "8 min read",
      image: "/images/gerd-placeholder.png",
      description:
        "This article explores Ethiopia's innovative financing models for the Grand Ethiopian Renaissance Dam (GERD) and other infrastructure projects...",
      content:
        "This article explores Ethiopia's innovative financing models for the Grand Ethiopian Renaissance Dam (GERD) and other infrastructure projects...",
      href: "/ethiopia-financing-models-gerd",
      isPremium: false,
      caption: "Ethiopia Explores New Financing Models for GERD Completion",
    },
    {
      id: "2",
      slug: "ai-startups-2025",
      title: "AI Startups: The Next Big Thing in 2025",
      category: "Featured",
      author: "Sarah Tsegaye",
      date: "May 10, 2025",
      readTime: "4 min read",
      image: "/images/ai-startups.png",
      description:
        "Explore the rise of AI startups and their impact in 2025...",
      content: "Explore the rise of AI startups and their impact in 2025...",
      href: "/ai-startups-2025",
      isPremium: false,
      caption: "AI Startups: The Next Big Thing in 2025",
    },
  ];
};

export const articles = [
  {
    id: "1",
    category: "TECH AND SCIENCE | DIGITAL",
    title: "Digital Transformation in Ethiopia: Progress and Potential",
    description: "Examining Ethiopia's journey towards a digital economy.",
    image: "/images/digital-transformation.jpg",
    href: "/tech-and-science/digital/transformation-progress",
    author: "Mesfin Belay",
    readTime: "9 min",
    slug: "digital-transformation-in-ethiopia-progress-and-potential",
    caption: "Digital Transformation in Ethiopia",
    isPremium: false,
    date: "may 15, 2025",
    content:
      "Ethiopia is undergoing a significant digital transformation, with the government investing in technology infrastructure and digital services to boost economic growth and improve public services. This article explores the progress made so far and the potential for further advancements in Ethiopia's digital landscape.",
  },
  {
    id: "2",
    category: "TECH AND SCIENCE | DIGITAL",
    title: "E-Commerce Boom in Ethiopia: Opportunities for Growth",
    description: "How e-commerce is reshaping Ethiopia's business landscape.",
    image: "/images/ecommerce-boom.jpg",
    href: "/tech-and-science/digital/ecommerce-growth",
    author: "Kalkidan Yohannes",
    readTime: "7 min",
    isPremium: true,
    slug: "e-commerce-boom-in-ethiopia-opportunities-for-growth",
    caption: "E-Commerce Boom in Ethiopia",
    content:
      "The e-commerce sector in Ethiopia is experiencing rapid growth, driven by increased internet penetration and a young, tech-savvy population. This article delves into the opportunities and challenges faced by e-commerce businesses in Ethiopia, highlighting success stories and future prospects.",
    date: "May 16, 2025",
  },
  {
    id: "3",
    category: "TECH AND SCIENCE | INNOVATION",
    title: "Ethiopia's Innovation Ecosystem: Startups and Beyond",
    description:
      "A look at how Ethiopia is fostering innovation through startups and tech hubs.",
    image: "/images/innovation-ecosystem.jpg",
    href: "/tech-and-science/innovation/startup-ecosystem",
    author: "Tsegaye Girma",
    readTime: "7 min",
    slug: "ethiopias-innovation-ecosystem-startups-and-beyond",
    caption: "Ethiopia's Innovation Ecosystem",
    isPremium: false,
    date: "May 17, 2025",
    content:
      "Ethiopia's innovation ecosystem is rapidly evolving, with a growing number of startups and tech hubs emerging across the country. This article explores the factors driving innovation in Ethiopia, including government support, access to funding, and a vibrant entrepreneurial culture.",
  },
  {
    id: "4",
    category: "TECH AND SCIENCE | INNOVATION",
    title: "The Role of AI in Ethiopia's Tech Revolution",
    description:
      "How artificial intelligence is shaping Ethiopia's technological advancements.",
    image: "/images/ai-revolution.jpg",
    href: "/tech-and-science/innovation/ai-revolution",
    author: "Aster Demissie",
    readTime: "8 min",
    isPremium: true,
    slug: "the-role-of-ai-in-ethiopias-tech-revolution",
    caption: "The Role of AI in Ethiopia's Tech Revolution",
    content:
      "Artificial intelligence is playing a crucial role in Ethiopia's tech revolution, with applications ranging from agriculture to healthcare. This article examines how AI is being integrated into various sectors and the potential it holds for driving economic growth and improving quality of life in Ethiopia.",
    date: "May 18, 2025",
  },
  {
    id: "5",
    category: "TECH AND SCIENCE | RESEARCH",
    title: "Scientific Research in Ethiopia: Building a Knowledge Economy",
    description:
      "How Ethiopia is investing in research to drive innovation and growth.",
    image: "/images/scientific-research.jpg",
    href: "/tech-and-science/research/knowledge-economy",
    author: "Getachew Tesfaye",
    readTime: "8 min",
    slug: "scientific-research-in-ethiopia-building-a-knowledge-economy",
    caption: "Scientific Research in Ethiopia",
    isPremium: false,
    date: "May 19, 2025",
    content:
      "Ethiopia is making significant strides in scientific research, with a focus on building a knowledge economy. This article explores the government's initiatives to promote research and development, the role of universities and research institutions, and the impact of scientific advancements on Ethiopia's socio-economic development.",
  },
  {
    id: "6",
    category: "TECH AND SCIENCE | RESEARCH",
    title: "Collaborative Research in Ethiopia: Global Partnerships",
    description:
      "Exploring Ethiopia's role in international research collaborations.",
    image: "/images/global-research.jpg",
    href: "/tech-and-science/research/global-partnerships",
    author: "Saba Wolde",
    readTime: "6 min",
    isPremium: true,
    slug: "collaborative-research-in-ethiopia-global-partnerships",
    caption: "Collaborative Research in Ethiopia",
    content:
      "Ethiopia is increasingly becoming a hub for international research collaborations, attracting global partners to work on various projects. This article highlights the benefits of collaborative research, the challenges faced, and the success stories that showcase Ethiopia's potential as a research destination.",
    date: "May 20, 2025",
  },
  {
    id: "7",
    category: "FINANCE | CAPITAL MARKETS",
    title: "Ethiopian Stock Exchange Sees Record Trading Volume",
    description:
      "The Ethiopian Stock Exchange has reported a record trading volume of 1 billion birr in the last quarter.",
    image: "/images/stock-exchange.jpg",
    href: "/finance/capital-markets/ethiopian-stock-exchange-record",
    author: "Amina Abdi",
    readTime: "5 min",
    slug: "ethiopian-stock-exchange-sees-record-trading-volume",
    caption: "Ethiopian Stock Exchange Trading Volume",
    content:
      "The Ethiopian Stock Exchange has experienced unprecedented growth, with a record trading volume of 1 billion birr in the last quarter. This surge is attributed to increased investor confidence and the introduction of new financial instruments.",
    isPremium: false,
    date: "May 21, 2025",
  },
  {
    id: "8",
    category: "FINANCE | CAPITAL MARKETS",
    title: "New Regulations for Foreign Investors in Ethiopian Capital Markets",
    description:
      "The Ethiopian government has introduced new regulations to attract foreign investors to the capital markets.",
    image: "/images/foreign-investors.jpg",
    href: "/finance/capital-markets/foreign-investors-regulations",
    author: "Samuel Tesfaye",
    readTime: "7 min",
    isPremium: true,
    slug: "new-regulations-for-foreign-investors-in-ethiopian-capital-markets",
    caption: "Foreign Investors in Ethiopian Capital Markets",
    content:
      "In a bid to attract foreign investment, the Ethiopian government has implemented new regulations for foreign investors in the capital markets. These regulations aim to create a more transparent and investor-friendly environment, boosting confidence in Ethiopia's financial markets.",
    date: "May 22, 2025",
  },
  {
    id: "9",
    category: "FINANCE | BANKING",
    title: "Commercial Bank of Ethiopia Implements AI for Risk...",
    description:
      "How Ethiopia's largest bank is using artificial intelligence to streamline...",
    image: "/images/banking-atm.jpg",
    href: "/finance/banking/commercial-bank-ethiopia-ai",
    author: "Elias Mengistu",
    readTime: "9 min",
    slug: "commercial-bank-of-ethiopia-implements-ai-for-risk",
    caption: "AI in Ethiopian Banking Sector",
    content:
      "The Commercial Bank of Ethiopia is at the forefront of integrating artificial intelligence into its operations, particularly in risk management and customer service. This article explores how AI is transforming the banking sector in Ethiopia, enhancing efficiency and customer experience.",
    isPremium: false,
    date: "May 23, 2025",
  },
  {
    id: "10",
    category: "FINANCE | BANKING",
    title: "Regional Banks Expand Branch Network Despite Digital Push",
    description:
      "Why physical banking locations remain crucial in Ethiopia’s developing finan...",
    image: "/images/banking-money.jpg",
    href: "/finance/banking/regional-banks-expansion",
    author: "Hiwot Bekele",
    readTime: "7 min",
    isPremium: true,
    slug: "regional-banks-expand-branch-network-despite-digital-push",
    caption: "Regional Banks in Ethiopia",
    content:
      "Despite the rapid digitalization of banking services in Ethiopia, regional banks continue to expand their physical branch networks. This article examines the reasons behind this trend, including the need for accessibility in rural areas and the importance of personal customer service.",
    date: "May 24, 2025",
  },
  {
    id: "11",
    category: "FINANCE | FINTECH",
    title: "Ethiopia's Fintech Revolution: A Deep Dive",
    description:
      "Exploring the rapid growth of fintech in Ethiopia and its impact on the economy.",
    image: "/images/fintech.jpg",
    href: "/finance/fintech/ethiopia-fintech-revolution",
    author: "Liya Tesfaye",
    readTime: "8 min",
    slug: "ethiopias-fintech-revolution-a-deep-dive",
    caption: "Ethiopia's Fintech Revolution",
    content:
      "Ethiopia is witnessing a fintech revolution, with numerous startups emerging to provide innovative financial solutions. This article explores the growth of fintech in Ethiopia, the challenges faced by startups, and the potential for future development in the sector.",
    isPremium: false,
    date: "May 25, 2025",
  },
  {
    id: "12",
    category: "FINANCE | FINTECH",
    title: "The Rise of Mobile Payments in Ethiopia",
    description:
      "How mobile payment solutions are transforming the financial landscape in Ethiopia.",
    image: "/images/mobile-payments.jpg",
    href: "/finance/fintech/mobile-payments-ethiopia",
    author: "Daniel Assefa",
    readTime: "6 min",
    slug: "the-rise-of-mobile-payments-in-ethiopia",
    caption: "Mobile Payments in Ethiopia",
    content:
      "Mobile payment solutions are rapidly gaining popularity in Ethiopia, driven by the need for convenient and accessible financial services. This article examines the factors contributing to the rise of mobile payments, the key players in the market, and the implications for traditional banking.",
    isPremium: true,
    date: "May 26, 2025",
  },
  {
    id: "13",
    category: "FINANCE | INVESTMENT",
    title: "Ethiopia's Investment Landscape: Opportunities and Challenges",
    description:
      "An in-depth analysis of the current investment climate in Ethiopia.",
    image: "/images/investment.jpg",
    href: "/finance/investment/ethiopia-investment-landscape",
    author: "Amina Abdi",
    readTime: "8 min",
    slug: "ethiopias-investment-landscape-opportunities-and-challenges",
    caption: "Ethiopia's Investment Landscape",
    content:
      "Ethiopia's investment landscape is evolving, with significant opportunities in various sectors such as agriculture, manufacturing, and renewable energy. This article provides an in-depth analysis of the current investment climate, highlighting the challenges faced by investors and the government's efforts to create a more conducive environment.",
    isPremium: false,
    date: "May 27, 2025",
  },
  {
    id: "14",
    category: "FINANCE | INVESTMENT",
    title: "Foreign Direct Investment in Ethiopia: Trends and Insights",
    description:
      "A comprehensive overview of foreign direct investment trends in Ethiopia.",
    image: "/images/foreign-direct-investment.jpg",
    href: "/finance/investment/foreign-direct-investment-ethiopia",
    author: "Samuel Tesfaye",
    readTime: "7 min",
    isPremium: true,
    slug: "foreign-direct-investment-in-ethiopia-trends-and-insights",
    caption: "Foreign Direct Investment in Ethiopia",
    content:
      "Foreign direct investment (FDI) is playing a crucial role in Ethiopia's economic development. This article explores the trends in FDI, the sectors attracting the most investment, and the challenges faced by foreign investors in the Ethiopian market.",
    date: "May 28, 2025",
  },
  {
    id: "15",
    category: "ECONOMY | TRADE",
    title: "Ethiopia's Trade Agreements: Boosting Global Reach",
    description:
      "A look at how trade agreements are enhancing Ethiopia's global market presence.",
    image: "/images/trade-agreements.jpg",
    href: "/economy/trade/ethiopia-global-trade",
    author: "Dawit Kebede",
    readTime: "7 min",
    slug: "ethiopias-trade-agreements-boosting-global-reach",
    caption: "Ethiopia's Trade Agreements",
    content:
      "Ethiopia is actively pursuing trade agreements to expand its global market reach. This article examines the impact of these agreements on Ethiopia's economy, the sectors benefiting the most, and the challenges faced in implementing trade policies.",
    isPremium: false,
    date: "May 29, 2025",
  },
  {
    id: "16",
    category: "ECONOMY | TRADE",
    title: "Challenges in Ethiopia's Export Sector",
    description:
      "Examining the hurdles faced by Ethiopia's export industry and potential solutions.",
    image: "/images/export-challenges.jpg",
    href: "/economy/trade/export-challenges",
    author: "Liya Tadesse",
    readTime: "8 min",
    isPremium: true,
    slug: "challenges-in-ethiopias-export-sector",
    caption: "Challenges in Ethiopia's Export Sector",
    content:
      "Ethiopia's export sector faces several challenges, including infrastructure deficits, regulatory hurdles, and market access issues. This article explores these challenges in detail and discusses potential solutions to enhance Ethiopia's export competitiveness.",
    date: "May 30, 2025",
  },
  {
    id: "17",
    category: "ECONOMY | POLICIES",
    title: "Ethiopia's Economic Policies: A New Era of Reform",
    description:
      "Exploring the latest economic policy reforms shaping Ethiopia's future.",
    image: "/images/economic-policies.jpg",
    href: "/economy/policies/ethiopias-economic-policies-a-new-era-of-reform",
    author: "Yared Lemma",
    readTime: "9 min",
    slug: "ethiopias-economic-policies-a-new-era-of-reform",
    caption: "Ethiopia's Economic Policies",
    content:
      "Ethiopia's economic policies are undergoing significant changes as the government aims to boost growth and attract foreign investment. This article explores the latest reforms, their implications for various sectors, and the overall impact on Ethiopia's economic landscape.",
    isPremium: false,
    date: "May 31, 2025",
  },
  {
    id: "18",
    category: "ECONOMY | POLICIES",
    title: "Impact of Monetary Policy on Ethiopia's Economy",
    description:
      "An analysis of how monetary policies are influencing Ethiopia's economic landscape.",
    image: "/images/monetary-policy.jpg",
    href: "/economy/policies/impact-of-monetary-policy-on-ethiopias-economy",
    author: "Selamawit Gebremedhin",
    readTime: "6 min",
    isPremium: true,
    slug: "impact-of-monetary-policy-on-ethiopias-economy",
    caption: "Impact of Monetary Policy on Ethiopia's Economy",
    content:
      "The Ethiopian central bank's monetary policy decisions are crucial in shaping the country's economic environment. This article analyzes the impact of recent monetary policies on inflation, interest rates, and overall economic stability in Ethiopia.",
    date: "June 1, 2025",
  },
  {
    id: "19",
    category: "ECONOMY | JOBS",
    title: "Job Creation in Ethiopia: Opportunities and Challenges",
    description:
      "Exploring the dynamics of job creation in Ethiopia's evolving economy.",
    image: "/images/job-creation.jpg",
    href: "/economy/jobs/creation-opportunities",
    author: "Fitsum Abera",
    readTime: "8 min",
    slug: "job-creation-in-ethiopia-opportunities-and-challenges",
    caption: "Job Creation in Ethiopia",
    content:
      "Ethiopia's economy is undergoing significant changes, leading to new job creation opportunities. This article examines the sectors driving job growth, the challenges faced in creating sustainable employment, and the government's initiatives to address unemployment.",
    isPremium: false,
    date: "June 2, 2025",
  },
  {
    id: "20",
    category: "ECONOMY | JOBS",
    title: "Youth Employment in Ethiopia: Strategies for Success",
    description:
      "Addressing the critical issue of youth unemployment in Ethiopia.",
    image: "/images/youth-employment.jpg",
    href: "/economy/jobs/youth-employment",
    author: "Rahel Teshome",
    readTime: "6 min",
    isPremium: true,
    slug: "youth-employment-in-ethiopia-strategies-for-success",
    caption: "Youth Employment in Ethiopia",
    content:
      "Youth unemployment is a pressing issue in Ethiopia, with a significant portion of the population struggling to find work. This article explores the strategies being implemented to tackle youth unemployment, including skills training programs, entrepreneurship initiatives, and government policies aimed at creating more job opportunities.",
    date: "June 3, 2025",
  },
  {
    id: "21",
    category: "ECONOMY | INFLATION",
    title: "Understanding Inflation Trends in Ethiopia",
    description:
      "A deep dive into the factors driving inflation in Ethiopia's economy.",
    image: "/images/inflation-trends.jpg",
    href: "/economy/inflation/trends",
    author: "Tewodros Alemayehu",
    readTime: "8 min",
    slug: "understanding-inflation-trends-in-ethiopia",
    caption: "Understanding Inflation Trends in Ethiopia",
    content:
      "Inflation has been a significant concern for Ethiopia's economy in recent years. This article analyzes the key factors contributing to inflation, including supply chain disruptions, currency fluctuations, and government policies. It also discusses the implications of rising inflation on consumers and businesses in Ethiopia.",
    isPremium: false,
    date: "June 4, 2025",
  },
  {
    id: "22",
    category: "ECONOMY | INFLATION",
    title: "Coping with Inflation: Strategies for Ethiopian Businesses",
    description:
      "Practical strategies for businesses to navigate inflationary pressures.",
    image: "/images/business-inflation.jpg",
    href: "/economy/inflation/business-strategies",
    author: "Hiwot Bekele",
    readTime: "6 min",
    isPremium: true,
    slug: "coping-with-inflation-strategies-for-ethiopian-businesses",
    caption: "Coping with Inflation in Ethiopia",
    content:
      "As inflation continues to rise, Ethiopian businesses are facing increased costs and reduced profit margins. This article provides practical strategies for businesses to cope with inflation, including cost-cutting measures, pricing strategies, and supply chain optimization. It also highlights success stories of businesses that have effectively managed inflationary pressures.",
    date: "June 5, 2025",
  },
  {
    id: "23",
    category: "ECONOMY | GROWTH",
    title: "Ethiopia's Economic Growth: Past and Future",
    description:
      "A review of Ethiopia's economic growth trajectory and future prospects.",
    image: "/images/economic-growth.jpg",
    href: "/economy/growth/past-future",
    author: "Elias Worku",
    readTime: "9 min",
    slug: "ethiopias-economic-growth-past-and-future",
    caption: "Ethiopia's Economic Growth",
    content:
      "Ethiopia has experienced remarkable economic growth over the past decade, driven by investments in infrastructure, agriculture, and manufacturing. This article reviews the key milestones in Ethiopia's economic growth trajectory, the challenges faced along the way, and the prospects for future growth in a rapidly changing global economy.",
    isPremium: false,
    date: "June 6, 2025",
  },
  {
    id: "24",
    category: "ECONOMY | GROWTH",
    title: "Sectoral Contributions to Ethiopia's GDP Growth",
    description:
      "Breaking down the key sectors driving Ethiopia's economic expansion.",
    image: "/images/gdp-growth.jpg",
    href: "/economy/growth/sectoral-contributions",
    author: "Zewditu Mengesha",
    readTime: "7 min",
    isPremium: true,
    slug: "sectoral-contributions-to-ethiopias-gdp-growth",
    caption: "Sectoral Contributions to Ethiopia's GDP Growth",
    content:
      "Ethiopia's GDP growth is supported by various sectors, each contributing to the overall economic expansion. This article analyzes the contributions of key sectors such as agriculture, manufacturing, and services to Ethiopia's GDP growth, highlighting the trends and challenges faced by each sector.",
    date: "June 7, 2025",
  },
  {
    id: "25",
    category: "ECONOMY | DEVELOPMENT",
    title: "Sustainable Development Goals in Ethiopia",
    description:
      "How Ethiopia is aligning with global sustainable development objectives.",
    image: "/images/sustainable-development.jpg",
    href: "/economy/development/sustainable-goals",
    author: "Mekonnen Hailu",
    readTime: "10 min",
    slug: "sustainable-development-goals-in-ethiopia",
    caption: "Sustainable Development Goals in Ethiopia",
    content:
      "Ethiopia is committed to achieving the Sustainable Development Goals (SDGs) set by the United Nations. This article explores Ethiopia's progress towards the SDGs, the challenges faced in implementation, and the strategies being employed to ensure sustainable development across various sectors.",
    isPremium: false,
    date: "June 8, 2025",
  },
  {
    id: "26",
    category: "ECONOMY | DEVELOPMENT",
    title: "Urban Development in Ethiopia: Opportunities and Risks",
    description:
      "Analyzing the rapid urban growth in Ethiopia and its implications.",
    image: "/images/urban-development.jpg",
    href: "/economy/development/urban-growth",
    author: "Betelhem Assefa",
    readTime: "7 min",
    isPremium: true,
    slug: "urban-development-in-ethiopia-opportunities-and-risks",
    caption: "Urban Development in Ethiopia",
    content:
      "Ethiopia is experiencing rapid urbanization, with cities expanding at an unprecedented rate. This article examines the opportunities and risks associated with urban development in Ethiopia, including infrastructure challenges, housing shortages, and the need for sustainable urban planning.",
    date: "June 9, 2025",
  },
  {
    id: "27",
    category: "BUSINESS | MARKETS",
    title: "Ethiopia's Coffee Market: Trends and Opportunities",
    description:
      "An in-depth analysis of the coffee market in Ethiopia, exploring current trends and future opportunities.",
    image: "/images/news.jpg",
    href: "/business/markets/ethiopias-coffee-market-trends-and-opportunities",
    author: "Amina Tesfaye",
    readTime: "10 min",
    slug: "ethiopia-coffee-market-trends-opportunities",
    caption: "Ethiopia's Coffee Market Trends",
    content:
      "Ethiopia, known as the birthplace of coffee, has a rich coffee culture and a growing market. This article delves into the current trends in Ethiopia's coffee market, including export opportunities, challenges faced by farmers, and the impact of global demand on local production.",
    isPremium: false,
    date: "June 10, 2025",
  },
  {
    id: "28",
    category: "BUSINESS | MARKETS",
    title: "The Rise of E-commerce in Ethiopia",
    description:
      "Exploring the growth of e-commerce in Ethiopia and its impact on traditional retail.",
    image: "/images/news.jpg",
    href: "/business/markets/rise-ecommerce-ethiopia",
    author: "Samuel Abebe",
    readTime: "8 min",
    isPremium: true,
    slug: "the-rise-of-e-commerce-in-ethiopia",
    caption: "The Rise of E-commerce in Ethiopia",
    content:
      "E-commerce is rapidly gaining traction in Ethiopia, driven by increased internet penetration and a young, tech-savvy population. This article examines the factors contributing to the rise of e-commerce in Ethiopia, the challenges faced by online retailers, and the potential for future growth in the sector.",
    date: "June 11, 2025",
  },
  {
    id: "29",
    category: "BUSINESS | POLICY & REGULATION",
    title: "Ethiopia's New Tax Law: Implications for Businesses",
    description:
      "A comprehensive overview of the new tax regulations and their impact on...",
    image: "/images/tax-law.jpg",
    href: "/business/policy-regulation/ethiopia-tax-law",
    author: "Amina Tesfaye",
    readTime: "8 min",
    slug: "ethiopias-new-tax-law-implications-for-businesses",
    caption: "Ethiopia's New Tax Law",
    content:
      "Ethiopia has introduced new tax regulations aimed at improving revenue collection and simplifying the tax system. This article provides a comprehensive overview of the new tax law, its implications for businesses, and the potential challenges in implementation. It also discusses how the new regulations align with Ethiopia's economic development goals.",
    isPremium: false,
    date: "June 12, 2025",
  },
  {
    id: "30",
    category: "BUSINESS | POLICY & REGULATION",
    title: "New Trade Agreements in East Africa: What You Need to Know",
    description:
      "An analysis of the recent trade agreements and their potential effects on...",
    image: "/images/trade-agreements.jpg",
    href: "/business/policy-regulation/east-africa-trade-agreements",
    author: "Samuel Abebe",
    readTime: "7 min",
    isPremium: true,
    slug: "new-trade-agreements-in-east-africa-what-you-need-to-know",
    caption: "New Trade Agreements in East Africa",
    content:
      "East Africa is witnessing a wave of new trade agreements aimed at enhancing regional integration and boosting economic growth. This article analyzes the recent trade agreements, their potential effects on businesses and consumers, and the challenges that may arise in implementing these agreements. It also highlights the opportunities for cross-border trade and investment in the region.",
    date: "June 13, 2025",
  },
  {
    id: "31",
    category: "BUSINESS | POLICY & REGULATION",
    title: "The Future of Digital Currency in Africa",
    description:
      "Exploring the rise of digital currencies and their implications for...",
    image: "/images/digital-currency.jpg",
    href: "/business/policy-regulation/digital-currency-africa",
    author: "Fatima Ibrahim",
    readTime: "6 min",
    slug: "the-future-of-digital-currency-in-africa",
    caption: "The Future of Digital Currency in Africa",
    content:
      "Digital currencies are gaining traction across Africa, with several countries exploring the potential of central bank digital currencies (CBDCs) and cryptocurrencies. This article explores the rise of digital currencies in Africa, their implications for financial inclusion, monetary policy, and the challenges of regulation. It also discusses the potential benefits and risks associated with the adoption of digital currencies in the continent.",
    isPremium: true,
    date: "June 14, 2025",
  },
  {
    id: "32",
    category: "BUSINESS | STARTUPS",
    title: "PayStack Secures $200M to Expand Across Africa",
    description:
      "Fintech startup PayStack raises significant funding to fuel its growth...",
    image: "/images/paystack-startup.jpg",
    href: "/business/startups/paystack-expansion",
    author: "Sarah Johnson",
    readTime: "6 min",
    slug: "paystack-secures-200m-to-expand-across-africa",
    caption: "PayStack Expansion Across Africa",
    content:
      "PayStack, a leading fintech startup in Africa, has secured $200 million in funding to expand its operations across the continent. This article discusses the implications of this funding for PayStack's growth strategy, the competitive landscape in the African fintech sector, and the potential impact on digital payments in Africa.",
    isPremium: true,
    date: "June 15, 2025",
  },
  {
    id: "33",
    category: "BUSINESS | STARTUPS",
    title: "Flutterwave Partners with Local Banks for Growth",
    description:
      "Flutterwave collaborates with regional banks to enhance payment solutions...",
    image: "/images/flutterwave-startup.jpg",
    href: "/business/startups/flutterwave-partnership",
    author: "Michael Okoro",
    readTime: "5 min",
    isPremium: true,
    slug: "flutterwave-partners-with-local-banks-for-growth",
    caption: "Flutterwave Partnership with Local Banks",
    content:
      "Flutterwave, a prominent fintech startup, has announced partnerships with several local banks to enhance its payment solutions across Africa. This article explores the strategic significance of these partnerships, the benefits for customers and businesses, and the potential for Flutterwave to strengthen its position in the African fintech market.",
    date: "June 16, 2025",
  },
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "free",
    title: "Free Access",
    description:
      "Stay informed with our publicly available articles and weekly highlights.",
    price: "Always Free",
    features: [
      "Read selected free articles weekly",
      "Access public topic pages",
      "Receive general newsletter (optional)",
      "Limited archive access",
    ],
    buttonText: "Continue Free",
    buttonLink: "#main-content",
  },
];

export const relatedArticles: Article[] = [
  {
    id: "1",
    category: "Technology",
    title: "The Future of AI",
    description: "Exploring advancements in artificial intelligence.",
    image: "/images/logo-red.png",
    author: "John Doe",
    readTime: "5 min",
    isPremium: true,
    slug: "the-future-of-ai",
    date: "may 1, 2025",
    content:
      "In this article, we explore the future of AI and its implications.",
    href: "/articles/the-future-of-ai",
    caption: "The Future of AI",
  },
  {
    id: "2",
    category: "Science",
    title: "Quantum Computing Basics",
    description: "An introduction to quantum computing concepts.",
    image: "/images/logo-red.png",
    author: "Jane Smith",
    readTime: "4 min",
    isPremium: false,
    slug: "quantum-computing-basics",
    date: "may 2, 2025",
    content:
      "This article provides a basic understanding of quantum computing.",
    href: "/articles/quantum-computing-basics",
    caption: "Quantum Computing Basics",
  },
  {
    id: "3",
    category: "Innovation",
    title: "Next-Gen Robotics",
    description: "How robotics are transforming industries.",
    image: "/images/author-placeholder.jpg",
    author: "Alex Johnson",
    readTime: "6 min",
    isPremium: true,
    slug: "next-gen-robotics",
    date: "may 3, 2025",
    content:
      "This article discusses the advancements in robotics and their applications.",
    href: "/articles/next-gen-robotics",
    caption: "Next-Gen Robotics",
  },
];

export const startups: Startup[] = [
  {
    id: "1",
    name: "PayStack",
    description: "Simplifying payments across Africa.",
    image: "/images/paystack-logo.png",
    href: "/business/startups/paystack",
  },
  {
    id: "2",
    name: "Flutterwave",
    description: "Seamless payment solutions for businesses.",
    image: "/images/flutterwave-logo.png",
    href: "/business/startups/flutterwave",
  },
  {
    id: "3",
    name: "Andela",
    description: "Connecting African tech talent globally.",
    image: "/images/andela-logo.png",
    href: "/business/startups/andela",
  },
  {
    id: "4",
    name: "Chipper Cash",
    description: "Cross-border money transfers made easy.",
    image: "/images/chipper-cash-logo.png",
    href: "/business/startups/chipper-cash",
  },
];

export const plans: Plan[] = [
  {
    name: "Free",
    price: "$0/month",
    description: "Get started with basic access to Ensight’s insights.",
    features: [
      "Access to weekly newsletters",
      "Limited article access",
      "Community forum access",
    ],
  },
  {
    name: "Standard",
    price: "$15/month",
    description: "Unlock more insights for professionals.",
    features: [
      "Full article access",
      "Weekly newsletters",
      "Exclusive reports",
      "Priority support",
    ],
    isHighlighted: true,
  },
  {
    name: "Premium",
    price: "$30/month",
    description: "Comprehensive access for industry leaders.",
    features: [
      "All Standard features",
      "Real-time data dashboards",
      "Personalized insights",
      "Dedicated account manager",
    ],
  },
];

export const recentAnalysis = [
  {
    id: "1",
    category: "TECH AND SCIENCE | DIGITAL",
    title: "Digital Transformation in Ethiopia: Progress and Potential",
    description: "Examining Ethiopia's journey towards a digital economy.",
    image: "/images/gerd-placeholder.jpg",
    href: "/tech-and-science/digital/transformation-progress",
    author: "Mesfin Belay",
    date: "May 15, 2025",
    readTime: "9 min",
    isPremium: false,
    slug: "digital-transformation-in-ethiopia-progress-and-potential",
    content: "",
    caption: "Digital Transformation in Ethiopia",
  },
  {
    id: "2",
    category: "TECH AND SCIENCE | DIGITAL",
    title: "E-Commerce Boom in Ethiopia: Opportunities for Growth",
    description: "How e-commerce is reshaping Ethiopia's business landscape.",
    image: "/images/frehiwot.jpg",
    href: "/tech-and-science/digital/ecommerce-growth",
    author: "Kalkidan Yohannes",
    date: "May 8, 2025",
    readTime: "7 min",
    isPremium: true,
    slug: "e-commerce-boom-in-ethiopia-opportunities-for-growth",
    content: "",
    caption: "E-Commerce Boom in Ethiopia",
  },
  {
    id: "3",
    category: "TECH AND SCIENCE | INNOVATION",
    title: "Ethiopia's Innovation Ecosystem: Startups and Beyond",
    description:
      "A look at how Ethiopia is fostering innovation through startups and tech hubs.",
    image: "/images/author-placeholder.jpg",
    href: "/tech-and-science/innovation/startup-ecosystem",
    author: "Tsegaye Girma",
    date: "May 1, 2025",
    isPremium: false,
    readTime: "7 min",
    slug: "ethiopias-innovation-ecosystem-startups-and-beyond",
    content: "",
    caption: "Ethiopia's Innovation Ecosystem",
  },
];

export const trustedPartners = [
  {
    name: "Global Corp",
    logo: "/images/global-corp-logo.png",
  },
  {
    name: "Africa Insights",
    logo: "/images/africa-insights-logo.png",
  },
  {
    name: "Eco Solutions",
    logo: "/images/eco-solutions-logo.png",
  },
  {
    name: "Tech Innovators",
    logo: "/images/tech-innovators-logo.png",
  },
  {
    name: "Finance Group",
    logo: "/images/finance-group-logo.png",
  },
];

export const navItems = [
  {
    label: "Business",
    submenu: [
      { label: "Startups", href: "/business/startups" },
      { label: "Markets", href: "/business/markets" },
      { label: "Policy & Regulation", href: "/business/policy-regulation" },
    ],
  },
  {
    label: "Finance",
    submenu: [
      { label: "Banking", href: "/finance/banking" },
      { label: "Investment", href: "/finance/investment" },
      { label: "Fintech", href: "/finance/fintech" },
      { label: "Capital Markets", href: "/finance/capital-markets" },
    ],
  },
  {
    label: "Economy",
    submenu: [
      { label: "Policies", href: "/economy/policies" },
      { label: "Trade", href: "/economy/trade" },
      { label: "Development", href: "/economy/development" },
      { label: "Inflation", href: "/economy/inflation" },
      { label: "Growth", href: "/economy/growth" },
      { label: "Jobs", href: "/economy/jobs" },
    ],
  },
  {
    label: "Tech and Science",
    submenu: [
      { label: "Innovation", href: "/technology/innovation" },
      { label: "Digital", href: "/technology/digital" },
      { label: "Research", href: "/technology/research" },
    ],
  },
  {
    label: "Corporate",
    href: "/corporate",
    submenu: [],
  },
  {
    label: "Analysis",
    href: "/analysis",
    submenu: [],
    badge: "WEEKLY",
  },
  {
    label: "Resources",
    href: "/resources",
    submenu: [],
  },
];

export const Footermenus = [
  {
    title: "Explore",
    items: [
      { label: "Business", href: "/business" },
      { label: "Finance", href: "/finance" },
      { label: "Infrastructure", href: "/infrastructure" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
];
