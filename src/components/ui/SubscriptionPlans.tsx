import { Card, Title, Text } from "@mantine/core";
import { SharedButton } from "@/components/ui/SharedButton";
import { plans } from "@/lib/data";
import { Plan } from "@/lib/types";

export function SubscriptionPlans() {
  return (
    <section className=" py-6">
      <div className="max-w-[1200px] mx-auto px-4">
        <Title
          order={2}
          className="text-primary text-center text-3xl font-semibold mb-4 animate-fade-in-up"
        >
          Choose Your Plan
        </Title>
        <Text className="text-secondary text-lg text-center mb-12 max-w-2xl mx-auto">
          Select the plan that best suits your needs and start exploring
          actionable business intelligence today.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan: Plan) => (
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
