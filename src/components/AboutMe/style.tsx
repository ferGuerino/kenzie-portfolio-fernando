import { styled } from "@/styles/stitches.config";

export const AboutSection = styled("section", {
  background: "$grey1",
  
  padding: "$section 0",
  "@mobile": {
    padding: "$sectionMobile 0",
  },
});

export const AboutSectionContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  "@mobile": {
    flexDirection: "column"
  },
});

export const AboutSectionText = styled("aside", {
  color: "$grey2",
  display: "grid",
  gridGap: "$2",
  lineHeight: "2.5rem",
  height: "max-content",
  position: "sticky",
  top: "8rem",
  "@mobile": {
    position: "static",
    marginBottom: "$5"
  },
});


