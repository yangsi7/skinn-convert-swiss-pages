
import React from "react";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Continuous Monitoring",
      skiin: true,
      holter: false,
      event: false,
    },
    {
      feature: "14-Day Wear Period",
      skiin: true,
      holter: false,
      event: true,
    },
    {
      feature: "No Adhesives or Wires",
      skiin: true,
      holter: false,
      event: false,
    },
    {
      feature: "Washable & Reusable",
      skiin: true,
      holter: false,
      event: false,
    },
    {
      feature: "Real-time Data Transmission",
      skiin: true,
      holter: false,
      event: true,
    },
    {
      feature: "AI-powered Arrhythmia Detection",
      skiin: true,
      holter: false,
      event: true,
    },
    {
      feature: "Patient Comfort for Long-term Wear",
      skiin: true,
      holter: false,
      event: false,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">Comparison</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            How SKIIN Compares
          </h2>
          <p className="text-lg text-muted-foreground">
            See how SKIIN Smart Garments compare to traditional cardiac monitoring solutions
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-myant-lightgreen text-foreground">
                <th className="py-4 px-6 text-left w-1/3">Feature</th>
                <th className="py-4 px-6 text-center">
                  <span className="font-bold text-myant-darkgreen">SKIIN</span>
                  <br />
                  <span className="text-sm font-normal">Smart Garment</span>
                </th>
                <th className="py-4 px-6 text-center">
                  <span className="font-bold">Holter Monitor</span>
                  <br />
                  <span className="text-sm font-normal">Traditional</span>
                </th>
                <th className="py-4 px-6 text-center">
                  <span className="font-bold">Event Monitor</span>
                  <br />
                  <span className="text-sm font-normal">Patch-based</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-myant-gray/20"}
                >
                  <td className="py-4 px-6 border-t">{row.feature}</td>
                  <td className="py-4 px-6 text-center border-t">
                    {row.skiin ? (
                      <Check className="inline-block text-green-500 w-5 h-5" />
                    ) : (
                      <X className="inline-block text-red-500 w-5 h-5" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center border-t">
                    {row.holter ? (
                      <Check className="inline-block text-green-500 w-5 h-5" />
                    ) : (
                      <X className="inline-block text-red-500 w-5 h-5" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center border-t">
                    {row.event ? (
                      <Check className="inline-block text-green-500 w-5 h-5" />
                    ) : (
                      <X className="inline-block text-red-500 w-5 h-5" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
