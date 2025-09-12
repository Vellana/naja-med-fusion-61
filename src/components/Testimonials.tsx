import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  totalSlides: number;
}

const testimonials = [
    { id: 1, name: "Sarah Mitchell", title: "Food & Wine Magazine", text: "NAJA has masterfully bridged the Mediterranean and American culinary worlds. The lamb with pomegranate BBQ glaze is pure genius!" },
    { id: 2, name: "Michael Rodriguez", title: "Corporate Executive", text: "We've hosted multiple business dinners at NAJA, and the experience is consistently exceptional. The ambiance and service make it our go-to." },
    { id: 3, name: "David Chen", title: "Culinary Travel Blogger", text: "Having experienced authentic Mediterranean cuisine on three continents, I can confidently say NAJA's interpretation is both respectful and revolutionary." }
];

const Testimonials: React.FC<TestimonialsProps> = ({ currentSlide, setCurrentSlide, totalSlides }) => {
  return (
    <div className="shadow-lg rounded-lg">
      <div className="relative rounded-lg overflow-hidden isolate transform-gpu outline outline-1 outline-transparent">
        <div 
          className="flex flex-row-reverse transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <Card className="bg-card h-full border-0">
                <CardContent className="p-8 text-center flex flex-col justify-center h-full min-h-[300px] pb-12">
                  <Quote className="h-8 w-8 text-accent mx-auto mb-4" />
                  <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic flex-grow">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="font-bold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary scale-110' : 'bg-muted/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;