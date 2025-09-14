import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, TrendingUp, Target, Clock } from "lucide-react";

const StatsModule = () => {
  const stats = [
    { label: "xG Promedio", value: "2.34", icon: Target, color: "success" },
    { label: "Corners/Partido", value: "11.2", icon: BarChart3, color: "warning" },
    { label: "Tarjetas/Partido", value: "4.8", icon: Clock, color: "destructive" },
    { label: "Racha Actual", value: "+5W", icon: TrendingUp, color: "success" }
  ];

  const teamComparison = [
    { metric: "xG", home: "2.1", away: "1.8" },
    { metric: "Goles", home: "1.9", away: "1.3" },
    { metric: "Corners", home: "6.2", away: "4.8" },
    { metric: "Tarjetas", home: "2.4", away: "2.1" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Estadísticas Avanzadas</h2>
          <p className="text-xl text-muted-foreground">
            Datos profundos para decisiones inteligentes
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <Select defaultValue="premier">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Seleccionar Liga" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="premier">Premier League</SelectItem>
              <SelectItem value="laliga">La Liga</SelectItem>
              <SelectItem value="bundesliga">Bundesliga</SelectItem>
              <SelectItem value="seriea">Serie A</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="2024">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Temporada" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024-25</SelectItem>
              <SelectItem value="2023">2023-24</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Equipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los equipos</SelectItem>
              <SelectItem value="city">Manchester City</SelectItem>
              <SelectItem value="arsenal">Arsenal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Key Stats */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Métricas Clave</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="stats-card text-center">
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 text-${stat.color}`} />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Glossary */}
            <div className="card-gradient p-4 rounded-xl border border-border/50">
              <h4 className="font-semibold mb-2 text-success">Mini-glosario</h4>
              <p className="text-sm text-muted-foreground">
                <strong>xG</strong> = Expected Goals: calidad de ocasiones de gol. 
                Más contexto, mejores decisiones.
              </p>
            </div>
          </div>

          {/* Team Comparison */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Comparativa H2H</h3>
            <div className="stats-card">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Manchester City</span>
                  <span className="text-muted-foreground">vs</span>
                  <span className="font-medium">Arsenal</span>
                </div>
              </div>

              <div className="space-y-3">
                {teamComparison.map((comp, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm text-muted-foreground mb-1">
                      <span>{comp.home}</span>
                      <span className="font-medium">{comp.metric}</span>
                      <span>{comp.away}</span>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="absolute left-0 top-0 h-full bg-success rounded-full"
                        style={{ width: `${(parseFloat(comp.home) / (parseFloat(comp.home) + parseFloat(comp.away))) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsModule;