export type Testimonial = {
  id: number;
  author: string;
  rating: number;
  source: "Google" | "Angi";
  content: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "John Stafford",
    rating: 5,
    source: "Google",
    content:
      "Quick response time, competitive pricing, and an outstanding installation experience. The finished fence looks incredible, and the Flash Fence installation team was professional, efficient, and great to work with throughout the project. I would highly recommend them to anyone looking for a quality fence installation.",
  },
  {
    id: 2,
    author: "Spencer Ollmann",
    rating: 5,
    source: "Google",
    content:
      "Flash Fence did an amazing job with our fence, from the quick turnaround on communication (believe they reached out within a day), to measuring out, building the quote and scheduling the install the process was smooth. During the install any hiccups or issues that could have happened were talked through with us before continuing and was swift! Excellent job and the fence looks great!",
  },
  {
    id: 3,
    author: "Tracy Preston",
    rating: 5,
    source: "Google",
    content:
      "Would have given 10 stars if possible!!! Dylan and his crew were absolutely fantastic. They were all very professional. He responded to all of my questions within the same day and even showed up when he said he would be there!! Don't waste your time with other contractors, hire Flash Fence!! You will not be disappointed!!",
  },
  {
    id: 4,
    author: "Kendra Basten",
    rating: 5,
    source: "Google",
    content:
      "Dylan was a dream to work with! Very responsive and competitive pricing. Got the job done quickly. Was in the loop every step of the way. Will be recommending to everyone I know!!",
  },
  {
    id: 5,
    author: "Kim Layman",
    rating: 5,
    source: "Google",
    content:
      "Recently Flash Fence gave us a quote for a privacy fence. Dylan was prompt on communicating quote, price & keeping us updated with Digger's Hotline status. From start to finish Dylan & Austin did a great job in all aspects in their work! We highly recommend Flash Fence",
  },
];
