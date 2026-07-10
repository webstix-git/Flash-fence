export type FenceColorOption = {
  name: string;
  image: string;
  swatch: string;
};

export type FenceTypeOption = {
  id: string;
  label: string;
  summary: string;
  image: string;
  finishes?: string[];
  colors?: FenceColorOption[];
};

export const FENCE_TYPE_OPTIONS: FenceTypeOption[] = [
  {
    id: "vinyl",
    label: "Vinyl Privacy",
    summary:
      "Low-maintenance privacy fencing built for Wisconsin weather. Select a color below to preview how it looks on a finished install.",
    image: "/gallery/fencing/vinyl-white.png",
    colors: [
      {
        name: "White",
        image: "/gallery/fencing/vinyl-white.png",
        swatch: "#FFFFFF",
      },
      {
        name: "Almond",
        image: "/gallery/fencing/vinyl-almond.png",
        swatch: "#E8DCC8",
      },
      {
        name: "Slate Grey",
        image: "/gallery/fencing/vinyl-slate-grey.png",
        swatch: "#5C5C5C",
      },
    ],
  },
  {
    id: "wood",
    label: "Wood Fencing",
    summary:
      "Custom cedar and pressure-treated wood fences built on site to follow your yard grade. Stain and board spacing are laid out with you before install.",
    image: "/gallery/gallery-03.png",
    finishes: ["Cedar Privacy", "Pressure-Treated Picket", "Post & Rail"],
  },
  {
    id: "chainlink",
    label: "Chain Link & Ornamental",
    summary:
      "Secure perimeter fencing in galvanized or black vinyl-coated chain link, plus ornamental steel pickets for estate and commercial layouts.",
    image: "/gallery/gallery-04.png",
    finishes: ["Galvanized Chain Link", "Black Vinyl-Coated", "Ornamental Steel"],
  },
];
