import { Card, Title, Text, Button, Group } from "@mantine/core";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}

const plans: Plan[] = [
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

export function SubscriptionPlans() {
  return (
    <section className="bg-background py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <Title
          order={2}
          className="text-text-primary text-center mb-4 animate-fade-in-up"
        >
          Choose Your Plan
        </Title>
        <Text className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          Select the plan that best suits your needs and start exploring
          actionable business intelligence today.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`border border-border shadow-card p-6 flex flex-col ${
                plan.isHighlighted
                  ? "bg-surface-emphasis border-primary-accent"
                  : "bg-surface"
              }`}
              radius="md"
            >
              <Title order={3} className="text-text-primary mb-2">
                {plan.name}
              </Title>
              <Text className="text-text-secondary text-2xl font-bold mb-4">
                {plan.price}
              </Text>
              <Text className="text-text-muted mb-6 flex-1">
                {plan.description}
              </Text>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-text-secondary flex items-start"
                  >
                    <span className="text-primary-accent mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`${
                  plan.isHighlighted
                    ? "bg-primary-accent text-text-light"
                    : "bg-surface-alt text-text-primary"
                } hover:bg-primary-accent hover:text-text-light`}
                fullWidth
              >
                Select Plan
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
