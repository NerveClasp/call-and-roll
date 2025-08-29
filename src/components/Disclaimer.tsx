import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Disclaimer = () => {
  return (
    <Accordion className="max-w-2xl" type="single" collapsible>
      <AccordionItem value="disclaimer">
        <AccordionTrigger>
          <span>
            ⚠️ <b>Disclaimer:</b>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <div className=" border border-amber-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-amber-800 text-sm">
              This is a fan-created helper app designed to allow a remote player
              to participate in a physical board game session. This app is not
              affiliated with, endorsed by, or associated with Hasbro, Parker
              Brothers, or any of their subsidiaries or affiliates. All
              copyrighted game elements (including the name Monopoly Junior, the
              design of the board, and the specific character art) are the
              property of their respective owners and are not reproduced here.
              Users must own a physical copy of the game to use this app
              effectively.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Disclaimer;
