import { Check, X } from "lucide-react";

const Comparison = () => {
  const features = [
    "Varios mercados (1X2, Over/Under, hándicap, corners, tarjetas, goles)",
    "Explica el porqué (xG, forma, H2H, tarjetas, corners)",
    "ML personalizado con tu histórico",
    "Conexión de cuotas en tiempo real y alertas de valor",
    "Transparencia: Win Rate y Yield auditables",
    "Escalabilidad (como 1.000 analistas)",
    "Gestión de stake sugerida"
  ];

  const competitors = [
    "AI TIPSTER PRO",
    "Grupos de picks/Telegram",
    "IA genérica", 
    "Tipster individual"
  ];

  const comparison = [
    [true, false, false, false],
    [true, false, false, true],
    [true, false, false, false],
    [true, false, false, false],
    [true, false, false, false],
    [true, false, false, false],
    [true, false, false, false]
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            Por qué es distinto a las alternativas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No somos otro grupo de picks. Somos tu motor de decisión.
          </p>
        </div>

        <div className="card-gradient rounded-2xl p-8 overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="comparison-row font-bold text-lg border-b-2 border-success/50">
              <div className="text-left">Características</div>
              {competitors.map((competitor, index) => (
                <div key={index} className={`text-center ${index === 0 ? 'text-success' : ''}`}>
                  {competitor}
                </div>
              ))}
            </div>

            {/* Features */}
            {features.map((feature, featureIndex) => (
              <div key={featureIndex} className="comparison-row">
                <div className="text-left font-medium">{feature}</div>
                {comparison[featureIndex].map((hasFeature, compIndex) => (
                  <div key={compIndex} className="flex justify-center">
                    {hasFeature ? (
                      <Check className="w-6 h-6 text-success" />
                    ) : (
                      <X className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;