//populate as you add more to the Pictures folder! alt is alt text

const Images = [
  // MODELS
  {
    src: "/Assets/Pictures/three/ModelShowcase1.png",
    alt: "model",
    category: "models",
  },
  {
    src: "/Assets/Pictures/three/GOOBMENISTERp2.png",
    alt: "model closeup",
    category: "models",
  },
  // SHADERS
  {
    src: "/Assets/Pictures/three/ORB1.png",
    alt: "orb",
    category: "shaders",
  },
  {
    src: "/Assets/Pictures/three/Render 1.png",
    alt: "Render 1",
    category: "shaders",
  },
  {
    src: "/Assets/Pictures/three/Render 2.png",
    alt: "Render 2",
    category: "shaders",
  },
  {
    src: "/Assets/Pictures/three/ORB2.png",
    alt: "orb",
    category: "shaders",
  },
  {
    src: "/Assets/Pictures/three/Tiles Render 1.png",
    alt: "Tiles Render 1",
    category: "shaders",
  },
  {
    src: "/Assets/Pictures/three/Tiles Render 4.png",
    alt: "Tiles Render 4",
    category: "shaders",
  },

  // RAYMARCH
  {
    src: "./Assets/Pictures/three/ORB3.png",
    alt: "orb",
    category: "raymarch",
  },
  {
    src: "./Assets/Pictures/three/ORB4.png",
    alt: "orb",
    category: "raymarch",
  },
  {
    src: "./Assets/Pictures/three/ORB5.png",
    alt: "orb",
    category: "raymarch",
  },

  // MODS
  {
    src: "./Assets/Pictures/three/Bag.png",
    alt: "Bag",
    category: "mods",
  },
  {
    src: "./Assets/Pictures/three/Heart.png",
    alt: "Heart",
    category: "mods",
  },
  {
    src: "./Assets/Pictures/three/Hermes.png",
    alt: "Hermes",
    category: "mods",
  },
  {
    src: "./Assets/Pictures/three/Lava Charm.png",
    alt: "Lava Charm",
    category: "mods",
  },
  {
    src: "./Assets/Pictures/three/Mirror.png",
    alt: "Magic Mirror",
    category: "mods",
  },
  {
    src: "./Assets/Pictures/three/Tinkerers.png",
    alt: "Tinkerers Table",
    category: "mods",
  },

  // ART
  {
    src: "./Assets/Pictures/two/Dergonpanceek.png",
    alt: "art",
    category: "art",
  },
  {
    src: "./Assets/Pictures/two/KeyniFinal.png",
    alt: "art",
    category: "art",
  },
  {
    src: "./Assets/Pictures/two/kipp chickenrun child.png",
    alt: "art",
    category: "art",
  },
  {
    src: "./Assets/Pictures/two/Kipp Kunstrulett.png",
    alt: "art",
    category: "art",
  },
  {
    src: "./Assets/Pictures/two/Pepe Sunset.png",
    alt: "art",
    category: "art",
  },
];



function populateCategories() {
  const containers = document.querySelectorAll(".ImagesContainer");

  containers.forEach((container) => {
    const category = container.dataset.category;
    const itemsContainer = container.querySelector(".portfolioLayout");

    Images.filter((img) => img.category === category).forEach((imgData) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("portfolioItem");

      const img = document.createElement("img");
      img.src = imgData.src;
      img.alt = imgData.alt;

      wrapper.appendChild(img);
      itemsContainer.appendChild(wrapper);
    });
  });
}

populateCategories();
