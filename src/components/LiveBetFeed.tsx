import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, Filter, Clock } from "lucide-react";

const LiveBetFeed = () => {
  const bets = [
    {
      match: "Manchester City vs Arsenal",
      market: "Over 2.5 Goles",
      probability: 78.4,
      avgOdds: 1.85,
      expectedValue: 12.3,
      risk: "medium",
      time: "15:30"
    },
    {
      match: "Barcelona vs Real Madrid",
      market: "1X2 - Barcelona",
      probability: 65.2,
      avgOdds: 2.10,
      expectedValue: 8.7,
      risk: "low",
      time: "16:00"
    },
    {
      match: "Liverpool vs Chelsea",
      market: "Corners Over 9.5",
      probability: 71.8,
      avgOdds: 1.92,
      expectedValue: 15.1,
      risk: "high",
      time: "17:30"
    },
    {
      match: "Bayern Munich vs Dortmund",
      market: "Ambos equipos marcan",
      probability: 82.1,
      avgOdds: 1.75,
      expectedValue: 9.4,
      risk: "low",
      time: "18:45"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'success';
      case 'medium': return 'warning';
      case 'high': return 'destructive';
      default: return 'muted';
    }
  };

  const getRiskBg = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-success/10 text-success';
      case 'medium': return 'bg-warning/10 text-warning';
      case 'high': return 'bg-destructive/10 text-destructive';
      default: return 'bg-muted/10 text-muted-foreground';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            Feed de apuestas con valor
          </h2>
          <p className="text-xl text-muted-foreground">
            Oportunidades en tiempo real
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las ligas</SelectItem>
              <SelectItem value="premier">Premier League</SelectItem>
              <SelectItem value="laliga">La Liga</SelectItem>
              <SelectItem value="bundesliga">Bundesliga</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="5">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">EV mínimo: 5%</SelectItem>
              <SelectItem value="10">EV mínimo: 10%</SelectItem>
              <SelectItem value="15">EV mínimo: 15%</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Más filtros
          </Button>
        </div>

        {/* Bets Table */}
        <div className="card-gradient rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border/50">
                <tr className="text-left">
                  <th className="p-4 font-semibold">Partido</th>
                  <th className="p-4 font-semibold">Mercado</th>
                  <th className="p-4 font-semibold">Prob. IA</th>
                  <th className="p-4 font-semibold">Cuota Media</th>
                  <th className="p-4 font-semibold">EV (%)</th>
                  <th className="p-4 font-semibold">Riesgo</th>
                  <th className="p-4 font-semibold">Hora</th>
                  <th className="p-4 font-semibold">Acción</th>
                </tr>
              </thead>
              <tbody>
                {bets.map((bet, index) => (
                  <tr key={index} className="border-b border-border/20 hover:bg-accent/5 smooth-transition">
                    <td className="p-4">
                      <div className="font-medium">{bet.match}</div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline">{bet.market}</Badge>
                    </td>
                    <td className="p-4">
                      <span className="font-bold text-success">{bet.probability}%</span>
                    </td>
                    <td className="p-4 font-mono">{bet.avgOdds}</td>
                    <td className="p-4">
                      <span className="font-bold text-warning">+{bet.expectedValue}%</span>
                    </td>
                    <td className="p-4">
                      <Badge className={getRiskBg(bet.risk)}>
                        {bet.risk}
                      </Badge>
                    </td>
                    <td className="p-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {bet.time}
                      </div>
                    </td>
                    <td className="p-4">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Eye className="w-4 h-4" />
                        Ver detalle
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveBetFeed;