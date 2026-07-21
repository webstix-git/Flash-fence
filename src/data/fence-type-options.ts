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
        name: "Tan",
        image: "/gallery/fencing/vinyl-tan.png",
        swatch: "#D2B48C",
      },
      {
        name: "Clay",
        image: "/gallery/fencing/vinyl-clay.png",
        swatch: "#B8956C",
      },
      {
        name: "Gray",
        image: "/gallery/fencing/vinyl-gray.png",
        swatch: "#8A8A8A",
      },
    ],
  },
  {
    id: "wood",
    label: "Wood Fencing",
    summary:
      "Custom cedar and pressure-treated wood fences built on site to follow your yard grade. Stain and board spacing are laid out with you before install.",
    image: "/gallery/fencing/wood-privacy.png",
    finishes: ["Western Red Cedar", "Pressure Treated Pine", "Post & Rail"],
  },
  {
    id: "chainlink",
    label: "Chain Link & Ornamental",
    summary:
      "Secure perimeter fencing in galvanized or black or green vinyl-coated chain link, plus ornamental steel pickets for estate and commercial layouts.",
    image: "/gallery/fencing/chain-link-black.png",
    finishes: ["Galvanized Chain Link", "Black or green vinyl-coated", "Ornamental Steel"],
  },
];
