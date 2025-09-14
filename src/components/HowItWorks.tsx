import { Link2, Target, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Link2,
      title: "Conecta ligas y casas",
      description: "Selecciona tus ligas favoritas y conecta las casas de apuestas que usas para comparar cuotas en tiempo real."
    },
    {
      icon: Target,
      title: "Recibe pronósticos inteligentes",
      description: "Obtén pronósticos con probabilidad, valor esperado y nivel de riesgo basados en análisis avanzado de datos."
    },
    {
      icon: TrendingUp,
      title: "Apuesta con criterio",
      description: "El ML aprende de tu estilo y optimiza sugerencias personalizadas para maximizar tu rendimiento."
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Cómo funciona</h2>
          <p className="text-xl text-muted-foreground">3 pasos para tu ventaja competitiva</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="stats-card w-20 h-20 mx-auto flex items-center justify-center group-hover:glow-success">
                  <step.icon className="w-10 h-10 text-success" />
                </div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-success to-transparent" />
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;