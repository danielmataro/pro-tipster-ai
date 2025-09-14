import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Parece tener 1.000 analistas cribando valor por mí.",
      author: "Carlos M.",
      league: "Premier League",
      avatar: "CM"
    },
    {
      text: "Mi yield se consolidó; dejé de perseguir cuotas.",
      author: "Ana R.",
      league: "La Liga",
      avatar: "AR"
    },
    {
      text: "Me da disciplina: stake sugerido, riesgo y porqué del pick.",
      author: "Miguel Ángel",
      league: "Bundesliga",
      avatar: "MA"
    },
    {
      text: "El ML personalizado cambió mi forma de apostar completamente.",
      author: "David P.",
      league: "Serie A",
      avatar: "DP"
    },
    {
      text: "Transparencia total. Win rate y yield auditables en tiempo real.",
      author: "Laura S.",
      league: "Premier League",
      avatar: "LS"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            Testimonios de tipsters y usuarios
          </h2>
          <p className="text-xl text-muted-foreground">
            La comunidad habla por sí misma
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="stats-card group hover-lift">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-success mb-4 opacity-50" />
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg font-medium mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full success-gradient flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.league}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;