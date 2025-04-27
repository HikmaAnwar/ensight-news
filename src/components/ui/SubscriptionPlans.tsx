import { Card, Title, Text } from "@mantine/core";
import { SharedButton } from "@/components/ui/SharedButton";

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
    <section className="bg-background py-6">
      <div className="max-w-[1200px] mx-auto px-4">
        <Title
          order={2}
          className="text-primary text-center text-3xl font-semibold mb-4 animate-fade-in-up"
        >
          Choose Your Plan
        </Title>
        <Text className="text-secondary text-2xl text-center mb-12 max-w-2xl mx-auto">
          Select the plan that best suits your needs and start exploring
          actionable business intelligence today.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`border border-border shadow-md rounded-2xl p-6 flex flex-col ${
                plan.isHighlighted
                  ? "bg-surface-emphasis border-primary-accent"
                  : "bg-surface"
              }`}
              radius="md"
            >
              <Title order={3} className="text-primary mb-2">
                {plan.name}
              </Title>
              <Text className="text-secondary text-2xl font-bold mb-4">
                {plan.price}
              </Text>
              <Text className="text-muted mb-6 flex-1">{plan.description}</Text>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-secondary flex items-start">
                    <span className="text-primary-accent mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <SharedButton
                className={`${
                  plan.isHighlighted
                    ? "bg-primary-accent text-light"
                    : "bg-surface-alt text-primary"
                } hover:bg-primary-accent hover:text-light`}
                fullWidth
                rounded
                variant="filled"
              >
                Select Plan
              </SharedButton>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
