export type ContentItemType = {
  title: string;
  text: string;
};

export function getRandomTextPlaceholder(): ContentItemType {
  const content = [
    {
      title: "Baking Adventures",
      text: "I went to the store today. They had fresh apples on sale. I bought a dozen for a pie. Can't wait to bake it!",
    },
    {
      title: "Game Night Thrills",
      text: "Did you see the game last night? Our team played really well. They scored in the last minute. It was so exciting!",
    },
    {
      title: "Mystery Unfolds",
      text: "I started reading a new book. It's a mystery novel. The plot is really intriguing. I can't put it down!",
    },
    {
      title: "Cat Antics",
      text: "My cat was acting funny this morning. She chased her tail for hours. Then she took a long nap. She's so cute!",
    },
    {
      title: "Cooking Experiment",
      text: "I tried cooking Thai food today. It was my first time making it. The curry turned out spicy. Everyone loved it!",
    },
    {
      title: "Hiking Plans",
      text: "The weather is great for a hike. The trails near the lake are beautiful. I'm planning to go tomorrow. Want to join?",
    },
    {
      title: "Space Wonders",
      text: "I watched a documentary on space. It talked about black holes. The universe is so vast and mysterious. It blew my mind!",
    },
    {
      title: "Musical Neighbor",
      text: "My neighbor is learning to play guitar. He practices every evening. He's getting really good. I enjoy listening.",
    },
    {
      title: "Gardening Goals",
      text: "I'm thinking of starting a garden. I want to grow vegetables and herbs. It'll be a fun project. I'm excited about it!",
    },
    {
      title: "Dreaming of Travel",
      text: "I had a dream about traveling last night. I visited so many countries. It felt so real and amazing. I wish I could travel more.",
    },
  ];

  const randomIndex = Math.floor(Math.random() * content.length);
  return content[randomIndex];
}
