export type SectionRefs = {
    home: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    features: React.RefObject<HTMLDivElement>;
    tokenomics: React.RefObject<HTMLDivElement>;
    roadmap: React.RefObject<HTMLDivElement>;
  };
  
  export interface LayoutProps {
    sectionRefs: SectionRefs;
    children: React.ReactNode;
  }
  