import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Garantiza ganancias?",
      answer: "No. Ofrecemos ventaja informada y disciplina basada en datos, pero las apuestas siempre conllevan riesgo. Nuestro objetivo es mejorar tu toma de decisiones con información precisa y análisis avanzado. +18 - Juega con responsabilidad."
    },
    {
      question: "¿De dónde salen los datos?",
      answer: "Obtenemos datos de proveedores deportivos profesionales y cuotas en tiempo real de las principales casas de apuestas. Combinamos estadísticas oficiales, xG, métricas avanzadas y análisis de mercado para generar nuestros pronósticos."
    },
    {
      question: "¿Qué ligas cubre?",
      answer: "Cubrimos las principales ligas europeas: Premier League, La Liga, Bundesliga, Serie A, Ligue 1, así como competiciones internacionales como Champions League y Europa League. La cobertura se amplía constantemente según la demanda."
    },
    {
      question: "¿Qué es yield?",
      answer: "El yield es el rendimiento porcentual sobre el total apostado. Por ejemplo, si apostaste 1000€ y ganaste 1150€, tu yield es del +15%. Es la métrica más importante para medir la rentabilidad real de un tipster."
    },
    {
      question: "¿Cómo aprende el ML?",
      answer: "El machine learning analiza tu histórico de apuestas de forma completamente privada para entender tu perfil de riesgo, preferencias de mercados y patrones de comportamiento. Esto permite personalizar las recomendaciones y mejorar la precisión con el tiempo."
    },
    {
      question: "¿Privacidad de mis datos?",
      answer: "Todos los datos están cifrados y protegidos bajo normativa GDPR. No vendemos información a terceros y tienes control total sobre tus datos. El análisis de ML se realiza de forma anónima y segura."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Preguntas frecuentes</h2>
          <p className="text-xl text-muted-foreground">
            Resolvemos tus dudas más comunes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-gradient border border-border/50 rounded-xl px-6 hover-lift"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-success smooth-transition py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;