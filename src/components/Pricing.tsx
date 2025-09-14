import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Zap } from "lucide-react";

const Pricing = () => {
  const features = [
    "Pronósticos multi-mercado (1X2, Over/Under, Hándicap, Corners, Tarjetas)",
    "Comparador de cuotas en tiempo real",
    "ML personalizado que aprende de tu histórico",
    "Estadísticas avanzadas por temporada",
    "Análisis xG, corners y tarjetas detallado",
    "Gestión de stake sugerida",
    "Alertas de value bets en tiempo real",
    "Soporte técnico prioritario",
    "Acceso a la comunidad premium"
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            Tu ventaja competitiva te espera
          </h2>
          <p className="text-xl text-muted-foreground">
            Acceso completo a la plataforma más avanzada
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card-gradient rounded-3xl p-8 lg:p-12 relative overflow-hidden card-shadow">
            {/* Background Effect */}
            <div className="absolute inset-0 success-gradient opacity-5" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Zap className="w-4 h-4" />
                  Acceso Completo
                </div>
                <h3 className="text-3xl font-black mb-2">AI TIPSTER PRO</h3>
                <p className="text-muted-foreground">
                  Todo lo que necesitas para apostar con ventaja
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="success-gradient p-1 rounded-full mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center space-y-4">
                <a
                  href="https://wa.me/34653554023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pro-button-primary w-full inline-flex items-center justify-center gap-2 text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Adquirir por WhatsApp
                </a>
                
                <p className="text-sm text-muted-foreground">
                  Te ayudamos a activarlo en minutos
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-bold text-success">24/7</div>
                    <div className="text-xs text-muted-foreground">Soporte</div>
                  </div>
                  <div>
                    <div className="font-bold text-success">SSL</div>
                    <div className="text-xs text-muted-foreground">Seguridad</div>
                  </div>
                  <div>
                    <div className="font-bold text-success">GDPR</div>
                    <div className="text-xs text-muted-foreground">Privacidad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;