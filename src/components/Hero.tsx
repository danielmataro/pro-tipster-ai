import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Target, Brain, TrendingUp, BarChart3 } from "lucide-react";
import bettingWinner from "@/assets/betting-winner.jpg";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-warning/5" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                System prompts con{" "}
                <span className="success-gradient bg-clip-text text-transparent">
                  algoritmos profesionales
                </span>
                . Estadísticas de las principales ligas.
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                www.todoprompt.com - System prompts con algoritmos avanzados y estadísticas completas de LaLiga y principales competiciones.
              </p>
            </div>

            {/* Bullets */}
            <div className="space-y-4">
              {[
                {
                  icon: Target,
                  text: "Algoritmo líder con alta tasa de acierto y value detection"
                },
                {
                  icon: Brain,
                  text: "ML que aprende de tus apuestas y mejora el modelo"
                },
                {
                  icon: TrendingUp,
                  text: "Conexión a cuotas en vivo de las principales casas"
                },
                {
                  icon: BarChart3,
                  text: "Estadísticas avanzadas: xG, goles, corners, tarjetas, tendencias y más"
                }
              ].map((bullet, index) => (
                <div key={index} className="flex items-start gap-4 group hover-lift">
                  <div className="success-gradient p-2 rounded-lg glow-success">
                    <bullet.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg font-medium group-hover:text-success smooth-transition">
                    {bullet.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/34653554023"
                target="_blank"
                rel="noopener noreferrer"
                className="pro-button-primary inline-flex items-center justify-center gap-2 text-lg"
              >
                Solicitar información por WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href="https://wa.me/34653554023"
                target="_blank"
                rel="noopener noreferrer"
                className="pro-button-secondary inline-flex items-center justify-center gap-2 text-lg"
              >
                <Play className="w-5 h-5" />
                Ver cómo funciona
              </a>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={bettingWinner}
                alt="Persona ganando apuestas con móvil en mano"
                className="rounded-2xl shadow-2xl hover-lift border border-border/20"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 stats-card">
              <div className="text-sm font-semibold text-muted-foreground">Win Rate 30D</div>
              <div className="data-number">78.4%</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 stats-card">
              <div className="text-sm font-semibold text-muted-foreground">Yield 30D</div>
              <div className="data-number">+14.2%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;