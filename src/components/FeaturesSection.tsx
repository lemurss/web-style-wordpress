import { Award, Truck, Shield, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Handcrafted with the finest materials for lasting comfort and style.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary worldwide delivery on all orders over $200.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your transactions are protected with bank-level encryption.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy for your peace of mind.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 hero-gradient border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center space-y-4 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl card-gradient border border-border/50 glow-shadow">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
