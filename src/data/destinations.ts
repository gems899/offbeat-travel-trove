export interface Activity {
  id: string;
  name: string;
  icon: string;
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  description: string;
  image: string;
  activities: string[];
  galleryImages?: string[]; // Optional array of additional image URLs
}

export const activities: Activity[] = [
  { id: "hiking", name: "Hiking", icon: "map" },
  { id: "camping", name: "Camping", icon: "tent" },
  { id: "photography", name: "Photography", icon: "camera" },
  { id: "wildlife", name: "Wildlife Watching", icon: "bird" },
  { id: "kayaking", name: "Kayaking", icon: "droplets" },
  { id: "stargazing", name: "Stargazing", icon: "star" },
  { id: "history", name: "Historical Sites", icon: "landmark" },
  { id: "cycling", name: "Cycling", icon: "bike" },
  { id: "food", name: "Local Cuisine", icon: "utensils" },
  { id: "festivals", name: "Local Festivals", icon: "party-popper" },
  { id: "cave", name: "Cave Exploration", icon: "mountain-snow" },
  { id: "hotspring", name: "Hot Springs", icon: "flame" },
  { id: "trekking", name: "Trekking", icon: "footprints" },
  { id: "boating", name: "Boating", icon: "ship" },
  { id: "architecture", name: "Architecture", icon: "building" },
  { id: "waterfall", name: "Waterfall", icon: "waves" },
];

export const destinations: Destination[] = [
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    state: "Uttarakhand",
    description: "A UNESCO World Heritage site nestled in the Western Himalayas, known for its meadows of endemic alpine flowers and diverse flora.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "photography", "wildlife"],
    galleryImages: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "majuli",
    name: "Majuli Island",
    state: "Assam",
    description: "The world's largest river island, home to unique Assamese culture, neo-Vaishnavite monasteries, and stunning landscapes.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["kayaking", "festivals", "history"],
    galleryImages: [
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "spiti-valley",
    name: "Spiti Valley",
    state: "Himachal Pradesh",
    description: "A cold desert mountain valley with breathtaking landscapes, ancient monasteries, and starry night skies.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["stargazing", "photography", "camping"],
    galleryImages: [
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "dholavira",
    name: "Dholavira",
    state: "Gujarat",
    description: "An archaeological site from the Indus Valley Civilization with remarkable water conservation systems and ancient urban planning.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["history", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "khonoma",
    name: "Khonoma",
    state: "Nagaland",
    description: "India's first green village known for sustainable living, terraced agriculture, and rich Angami Naga cultural heritage.",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "food", "history"],
    galleryImages: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "sandakphu",
    name: "Sandakphu",
    state: "West Bengal",
    description: "The highest peak in West Bengal offering stunning views of four of the five highest peaks in the world including Everest and Kanchenjunga.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "camping", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "gandikota",
    name: "Gandikota",
    state: "Andhra Pradesh",
    description: "Often called the 'Grand Canyon of India', featuring a spectacular gorge of the Pennar river, ancient fort, and temples.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["kayaking", "history", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "mechuka",
    name: "Mechuka",
    state: "Arunachal Pradesh",
    description: "A secluded valley near the China border with pristine landscapes, Buddhist monasteries, and tribal culture.",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["cycling", "camping", "festivals"],
    galleryImages: [
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "chopta",
    name: "Chopta",
    state: "Uttarakhand",
    description: "Known as the 'Mini Switzerland of India', Chopta is a picturesque hamlet with spectacular views of the Himalayas and meadows.",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["trekking", "camping", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "munsiyari",
    name: "Munsiyari",
    state: "Uttarakhand",
    description: "A small town situated at the base of the Himalayas offering spectacular views of Panchachuli peaks and gorgeous landscapes.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["trekking", "wildlife", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "haflong",
    name: "Haflong",
    state: "Assam",
    description: "The only hill station in Assam offering breathtaking views of blue mountains and a tranquil ambiance.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "photography", "boating"],
    galleryImages: [
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "mayong",
    name: "Mayong",
    state: "Assam",
    description: "Known as the land of black magic with its rich cultural heritage, archaeological sites, and beautiful landscapes.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["history", "wildlife", "festivals"],
    galleryImages: [
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "chitkul",
    name: "Chitkul",
    state: "Himachal Pradesh",
    description: "The last inhabited village near the Indo-China border, offering pristine views and untouched beauty.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "photography", "camping"],
    galleryImages: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "malana",
    name: "Malana",
    state: "Himachal Pradesh",
    description: "An ancient village with unique customs and traditions, believed to be one of the oldest democracies in the world.",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["trekking", "history", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "saputara",
    name: "Saputara",
    state: "Gujarat",
    description: "The only hill station in Gujarat nestled in the Sahyadri range, offering scenic beauty and pleasant weather.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["boating", "trekking", "wildlife"],
    galleryImages: [
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "pirotan-island",
    name: "Pirotan Island",
    state: "Gujarat",
    description: "A marine national park with rich coral reefs, marine life, and migratory birds.",
    image: "https://images.unsplash.com/photo-1501285353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["wildlife", "boating", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "dzukou-valley",
    name: "Dzükou Valley",
    state: "Nagaland",
    description: "Known for its vibrant flowers and lush green hills, often called the 'Valley of Flowers of the Northeast'.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["trekking", "camping", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "longwa",
    name: "Longwa Village",
    state: "Nagaland",
    description: "A unique village where the Indo-Myanmar border passes through the village chief's house.",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["history", "food", "festivals"],
    galleryImages: [
      "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "darjeeling",
    name: "Darjeeling",
    state: "West Bengal",
    description: "A picturesque hill station famous for its tea plantations, stunning Himalayan views, and the historic toy train.",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["hiking", "photography", "food"],
    galleryImages: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "jaldapara",
    name: "Jaldapara National Park",
    state: "West Bengal",
    description: "Known for its significant population of the one-horned rhinoceros and diverse wildlife.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["wildlife", "photography", "camping"],
    galleryImages: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "araku-valley",
    name: "Araku Valley",
    state: "Andhra Pradesh",
    description: "A hill station known for its coffee plantations, tribal culture, and pleasant climate.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["food", "trekking", "cave"],
    galleryImages: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501285353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "belum-caves",
    name: "Belum Caves",
    state: "Andhra Pradesh",
    description: "The second-largest cave system in the Indian subcontinent with long passages, spacious chambers, and freshwater galleries.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["cave", "history", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "tawang",
    name: "Tawang",
    state: "Arunachal Pradesh",
    description: "Home to the 400-year-old Tawang Monastery, beautiful lakes, and stunning mountain vistas.",
    image: "https://images.unsplash.com/photo-1501285353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["history", "trekking", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "ziro-valley",
    name: "Ziro Valley",
    state: "Arunachal Pradesh",
    description: "Famous for its rice fields, unique tribal culture, and the annual Ziro Music Festival.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    activities: ["festivals", "food", "photography"],
    galleryImages: [
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501285353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    ]
  }
];

export const states = Array.from(new Set(destinations.map(dest => dest.state))).sort();

export const getActivityById = (id: string): Activity | undefined => {
  return activities.find(activity => activity.id === id);
};

export const getDestinationsByState = (state: string): Destination[] => {
  return destinations.filter(destination => destination.state === state);
};

export const getAllDestinations = (): Destination[] => {
  return destinations;
};
