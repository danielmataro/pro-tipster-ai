import { TrendingUp, Users, Target, Calculator } from "lucide-react";

const CommunityResults = () => {
  const results = [
    {
      icon: Target,
      label: "Win Rate (30 días)",
      value: "78.4",
      unit: "%",
      color: "success"
    },
    {
      icon: TrendingUp,
      label: "Yield (30 días)",
      value: "+14.2",
      unit: "%",
      color: "success"
    },
    {
      icon: Users,
      label: "Usuarios activos",
      value: "2,847",
      unit: "",
      color: "warning"
    },
    {
      icon: Calculator,
      label: "Apuestas analizadas",
      value: "47,382",
      unit: "",
      color: "warning"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            Resultados reales de la comunidad
          </h2>
          <p className="text-xl text-muted-foreground">
            Datos verificables, transparencia total
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {results.map((result, index) => (
            <div key={index} className="stats-card text-center group">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                result.color === 'success' ? 'success-gradient' : 'warning-gradient'
              } ${result.color === 'success' ? 'glow-success' : 'glow-warning'}`}>
                <result.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-1">
                <div className="data-number text-3xl">
                  {result.value}{result.unit}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {result.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto border border-warning/30 rounded-lg p-4 bg-warning/5">
            <strong>Nota legal:</strong> Rendimientos pasados no garantizan resultados futuros. 
            +18 Juega con responsabilidad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityResults;