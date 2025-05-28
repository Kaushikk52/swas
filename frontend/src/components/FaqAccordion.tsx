import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-medium text-slate-800 cursor-pointer">
          A Deep Commitment to Sustainability
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-slate-500">
          At Dharma Bums, sustainability isn't just a feature—it's our
          foundation. We prioritize eco-friendly practices throughout our entire
          process, from design to packaging, ensuring every product supports
          both your wellness and the planet's health.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-medium text-slate-800 cursor-pointer">
          Ethical Manufacturing in Our DNA
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-slate-500">
          We believe in fashion that feels good and does good. Our ethical
          manufacturing practices ensure that every person behind our products
          works under fair, safe, and respectful conditions. Our factories are
          certified by BSCI, WRAP or SEDEX. It's not just what we make; it's how
          we make it that defines us.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-medium text-slate-800 cursor-pointer">
          Activewear Fabric from Recycled Water Bottles
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-slate-500">
          Transforming waste into want, our activewear is crafted using
          high-quality fabric made from recycled P.E.T. water bottles. This
          innovative approach not only reduces plastic waste but also creates
          durable, comfortable, and stylish clothing for your active lifestyle.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-medium text-slate-800 cursor-pointer">
          Unwavering Excellence in Every Stitch
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-slate-500">
          Quality is at the core of every piece we create. Our attention to
          detail ensures that each stitch is a standard of excellence. Dharma
          Bums athleisure is designed to endure, supporting every move you make
          with superior quality and the finest fabrics.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-medium text-slate-800 cursor-pointer">
          100% Compostable Packaging
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-slate-500">
          Our commitment to the environment extends to our packaging. 100%
          compostable and made from bio-based materials, our packaging breaks
          down naturally, leaving no trace behind. Shop with the peace of mind
          that your purchase is as planet-friendly as it is powerful.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
