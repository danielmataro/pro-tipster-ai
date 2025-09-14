import { Brain, Zap, Shield, Target } from "lucide-react";

const ProBrain = () => {
  const features = [
    {
      icon: Brain,
      title: "Ensemble + Bayes",
      description: "Múltiples modelos trabajando en conjunto para máxima precisión"
    },
    {
      icon: Zap,
      title: "ML Adaptativo",
      description: "Aprende y ajusta sesgos en tiempo real según tu perfil de riesgo"
    },
    {
      icon: Target,
      title: "Value Detection",
      description: "Detecta value bets con algoritmos avanzados de probabilidad"
    },
    {
      icon: Shield,
      title: "Gestión de Stake",
      description: "Recomienda apuestas según tu bankroll y tolerancia al riesgo"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black mb-6">
                Cerebro <span className="success-gradient bg-clip-text text-transparent">pro</span> dentro
              </h2>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Nacido en el barro de las apuestas profesionales. Ensemble + bayes + ML para 
                ajustar sesgos, detectar value bets y recomendar stake según tu perfil de riesgo.
              </p>
              <p className="text-lg font-medium mt-4">
                No vendemos humo: <span className="text-success">explicamos el porqué con datos</span>.
              </p>
            </div>

            {/* Technical Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent/10 smooth-transition group">
                  <div className="success-gradient p-3 rounded-xl glow-success">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="card-gradient rounded-2xl p-8 card-shadow">
              <div className="space-y-6">
                {/* Algorithm Visualization */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full success-gradient mb-4 glow-success">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Motor de Decisión</h3>
                  <p className="text-muted-foreground">IA Avanzada + Datos Reales</p>
                </div>

                {/* Data Flow */}
                <div className="space-y-4">
                  {[
                    { label: "Datos históricos", value: "500K+ partidos" },
                    { label: "Actualizaciones", value: "Tiempo real" },
                    { label: "Precisión del modelo", value: "87.3%" },
                    { label: "Value bets detectadas", value: "15-20/día" }
                  ].map((stat, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-accent/10 rounded-lg">
                      <span className="font-medium">{stat.label}</span>
                      <span className="text-success font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 stats-card">
              <div className="text-xs font-semibold text-muted-foreground">Precisión ML</div>
              <div className="text-xl font-black text-success">87.3%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProBrain;