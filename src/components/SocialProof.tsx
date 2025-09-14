import { Shield, Users, Eye, Heart } from "lucide-react";

const SocialProof = () => {
  const proofs = [
    { icon: Users, text: "Hecho por tipsters" },
    { icon: Eye, text: "Basado en datos" },
    { icon: Shield, text: "Transparencia" },
    { icon: Heart, text: "Privacidad" }
  ];

  return (
    <section className="py-12 border-b border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {proofs.map((proof, index) => (
            <div key={index} className="flex items-center gap-3 text-muted-foreground hover:text-success smooth-transition">
              <proof.icon className="w-5 h-5" />
              <span className="font-medium">{proof.text}</span>
            </div>
          ))}
          <div className="text-warning font-bold text-sm border border-warning/30 px-3 py-1 rounded-full">
            +18 Juega con responsabilidad
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;