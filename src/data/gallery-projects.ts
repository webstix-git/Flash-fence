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
    id: 9,
    title: "Fence Line Site Prep",
    category: "excavation",
    image: "/gallery/gallery-09.png",
    details: "Side yard cleared and prepped along an existing fence line.",
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
    title: "White Vinyl Lattice Privacy",
    category: "fencing",
    image: "/gallery/gallery-14.png",
    details: "White vinyl privacy fence with decorative lattice top along a residential porch.",
  },
  {
    id: 15,
    title: "White Vinyl Privacy Fence",
    category: "fencing",
    image: "/gallery/gallery-15.png",
    details: "Full white vinyl privacy fence run with matching gate on a residential backyard.",
  },
  {
    id: 16,
    title: "Wood Privacy Fence",
    category: "fencing",
    image: "/gallery/gallery-16.png",
    details: "Wood privacy fence with metal posts and horizontal rail framing.",
  },
  {
    id: 17,
    title: "Black Chain Link Fence",
    category: "fencing",
    image: "/gallery/gallery-17.png",
    details: "Black vinyl-coated chain link fence with gate for a residential yard enclosure.",
  },
];
