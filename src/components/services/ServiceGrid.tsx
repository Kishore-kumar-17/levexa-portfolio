import React from "react";
import { ServiceItem } from "@/types";
import { ServiceCard } from "./ServiceCard";

interface ServiceGridProps {
  services: ServiceItem[];
  variant?: "preview" | "detailed";
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  services,
  variant = "preview",
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${
        variant === "preview" ? "lg:grid-cols-4" : "lg:grid-cols-2"
      } gap-6 lg:gap-8`}
    >
      {services.map((service, idx) => (
        <ServiceCard
          key={service.id}
          service={service}
          variant={variant}
          index={idx}
        />
      ))}
    </div>
  );
};
