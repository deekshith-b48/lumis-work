import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, Eyebrow, Section } from "@/components/ui/container";
import { faqs } from "@/data/faqs";

export function FaqSection() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="font-mono text-[1.35rem] tracking-[-0.04em] sm:text-3xl">
          Straight answers to buying questions.
        </h2>
        <Accordion type="single" collapsible className="mt-5">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`faq-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
