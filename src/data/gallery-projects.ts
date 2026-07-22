export type GalleryProject = {
  id: number;
  title: string;
  category: "fencing" | "excavation";
  image: string;
  details: string;
};

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 1,
    title: "Vinyl Materials Staged On Site",
    category: "fencing",
    image: "/gallery/gallery-01.png",
    details: "White vinyl panels and posts staged for a residential installation.",
  },
  {
    id: 2,
    title: "Premium Vinyl Privacy Fence",
    category: "fencing",
    image: "/gallery/gallery-02.png",
    details: "Clean white vinyl privacy fence along a Chippewa Valley backyard.",
  },
  {
    id: 3,
    title: "Wood Privacy Fence",
    category: "fencing",
    image: "/gallery/gallery-03.png",
    details: "Wood privacy fence with metal posts, mulch bed, and hostas along the fence line.",
  },
  {
    id: 5,
    title: "White Vinyl Lattice Privacy",
    category: "fencing",
    image: "/gallery/gallery-05.png",
    details: "White vinyl privacy fence with decorative lattice top along a residential porch.",
  },
  {
    id: 6,
    title: "Black Chain Link Fence",
    category: "fencing",
    image: "/gallery/gallery-06.png",
    details: "Black vinyl-coated chain link fence with gate for a residential yard enclosure.",
  },
  {
    id: 7,
    title: "Land Clearing & Brush Burn",
    category: "excavation",
    image: "/gallery/gallery-07.png",
    details: "Controlled brush clearing and debris management on site.",
  },
  {
    id: 8,
    title: "Site Grading",
    category: "excavation",
    image: "/gallery/gallery-08.png",
    details: "Soil leveling and grading for sub-base preparation.",
  },
  {
    id: 10,
    title: "Utility Trench Excavation",
    category: "excavation",
    image: "/gallery/gallery-10.png",
    details: "Deep trench excavation with drainage pipe placement.",
  },
  {
    id: 11,
    title: "Sub-Grade Pipe Layout",
    category: "excavation",
    image: "/gallery/gallery-11.png",
    details: "Aerial view of conduit and pipe routing in excavated trench.",
  },
  {
    id: 12,
    title: "Frost-Line Trenching",
    category: "excavation",
    image: "/gallery/gallery-12.png",
    details: "Deep trench work with conduit set below grade.",
  },
  {
    id: 13,
    title: "Precision Trench Work",
    category: "excavation",
    image: "/gallery/gallery-13.png",
    details: "Narrow utility trench with conduit and grading equipment on site.",
  },
  {
    id: 14,
    title: "White Vinyl Privacy Fence",
    category: "fencing",
    image: "/gallery/gallery-18.png",
    details: "White vinyl privacy fence along a residential backyard with Flash Fence branding on the post.",
  },
  {
    id: 15,
    title: "White Vinyl Yard Enclosure",
    category: "fencing",
    image: "/gallery/gallery-15.png",
    details: "Full white vinyl privacy fence run with matching gate on a residential backyard.",
  },
  {
    id: 19,
    title: "Full Backyard Vinyl Enclosure",
    category: "fencing",
    image: "/gallery/gallery-19.png",
    details: "Wide white vinyl privacy fence enclosing a residential backyard.",
  },
  {
    id: 20,
    title: "Side Yard Vinyl Fence",
    category: "fencing",
    image: "/gallery/gallery-20.png",
    details: "White vinyl privacy fence run along a residential side yard.",
  },
  {
    id: 22,
    title: "Patio Privacy Vinyl Screen",
    category: "fencing",
    image: "/gallery/gallery-22.png",
    details: "White vinyl privacy panel screening a patio and hot tub area.",
  },
];
