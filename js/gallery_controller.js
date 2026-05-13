//populate as you add more to the Pictures folder! alt is alt text

const Images = [
  // MODELS
  {
    src: "./Assets/Pictures/three/ModelShowcase1.png",
    alt: "personal model of one of my characters",
    category: "models",
  },
  {
    src: "./Assets/Pictures/three/GOOBMENISTERp2.png",
    alt: "closeup of that model lol",
    category: "models",
  },
  {
    src: "./Assets/Pictures/three/lookdev_render_Secondary.png",
    alt: "one of my exams",
    category: "models",
  },
  // SHADERS AND PROC GEN MATERIALS
  {
    src: "./Assets/Pictures/three/ORB1.png",
    alt: "orb with a procedural brick texture i made in blender using nodes :3",
    category: "shaders",
  },
  {
    src: "./Assets/Pictures/three/Render 1.png",
    alt: "procedural brick texture i made in blender using nodes :3",
    category: "shaders",
  },
  {
    src: "./Assets/Pictures/three/Render 2.png",
    alt: "another render of that proc gen brick tex :3",
    category: "shaders",
  },
  {
    src: "./Assets/Pictures/three/ORB2.png",
    alt: "Proc gen sandstone tiles",
    category: "shaders",
  },
  {
    src: "./Assets/Pictures/three/Tiles Render 1.png",
    alt: "More proc gen sandstone tiles lol",
    category: "shaders",
  },
  {
    src: "./Assets/Pictures/three/Tiles Render 4.png",
    alt: "Even more tiles",
    category: "shaders",
  },

  // RAYMARCHING SHADERS
  {
    src: "./Assets/Pictures/three/ORB3.png",
    alt: "these are raymarched shaders, idk how to explain them, they break my mind but i love working with them, check out Azra Reyes on youtube :3",
    category: "raymarch",
  },
  {
    src: "./Assets/Pictures/three/ORB4.png",
    alt: "these are raymarched shaders, idk how to explain them, they break my mind but i love working with them, check out Azra Reyes on youtube :3",
    category: "raymarch",
  },
  {
    src: "./Assets/Pictures/three/ORB5.png",
    alt: "these are raymarched shaders, idk how to explain them, they break my mind but i love working with them, check out Azra Reyes on youtube :3",
    category: "raymarch",
  },

  // HYTALE MOD ASSETS
  {
    src: "./Assets/Pictures/three/Bag.png",
    alt: "Void bag, holds stuff lol",
    category: "mods",
  },
  {
    src: "./Assets/Pictures/three/Heart.png",
    alt: "Life crystal, was fun to make this in 3d as it looks nothing like the original heart crystal in terraria lol",
    category: "mods",
  },
  {
    src: "./Assets/Pictures/three/Hermes.png",
    alt: "Hermes boots, make you run fast",
    category: "mods",
  },
  {
    src: "./Assets/Pictures/three/Lava Charm.png",
    alt: "Lava Charm",
    category: "mods",
  },
  {
    src: "./Assets/Pictures/three/Mirror.png",
    alt: "Magic Mirror, teleport home (u have no reflection ur a vampire lol)",
    category: "mods",
  },
  {
    src: "./Assets/Pictures/three/Tinkerers.png",
    alt: "Tinkerers Table, was the most complex model i made for this mod, but was fun! im proud of it",
    category: "mods",
  },
  // NOBLE NIGHTS
  // should set up a good way to showcase my assets and shaders made for noble nights! idk how i want to do it though.

  // 2D ARTWORK

  {
    src: "./Assets/Pictures/two/dani garf rulett.png",
    alt: "Gift art for a friend",
    category: "art",
  },
  {
    src: "./Assets/Pictures/two/Painting Example.png",
    alt: "looks cold in the snow ngl, but i think they are chillin",
    category: "art",
  },
  {
    src: "./Assets/Pictures/two/Dergonpanceek.png",
    alt: "OOOLLLLDDDD",
    category: "art",
  },
  {
    src: "./Assets/Pictures/two/KeyniFinal.png",
    alt: "gift arts :3",
    category: "art",
  },
  {
    src: "./Assets/Pictures/two/kipp chickenrun child.png",
    alt: "idk",
    category: "art",
  },
  {
    src: "./Assets/Pictures/two/Kipp Kunstrulett.png",
    alt: "hehe bird painting",
    category: "art",
  },
  {
    src: "./Assets/Pictures/two/Pepe Sunset.png",
    alt: "pepe contemplates life (which is fair ngl)",
    category: "art",
  },
];

function populateCategories() {
  const containers = document.querySelectorAll(".ImagesContainer");

  const tooltip = document.createElement("div");
  tooltip.id = "image-tooltip";
  document.body.appendChild(tooltip);
  containers.forEach((container) => {
    const category = container.dataset.category;
    const itemsContainer = container.querySelector(".portfolioLayout");

    Images.filter((img) => img.category === category).forEach((imgData) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("portfolioItem");

      const img = document.createElement("img");
      img.src = imgData.src;
      img.alt = imgData.alt;
      img.addEventListener("mouseenter", () => {
        tooltip.textContent = imgData.alt;
        tooltip.style.display = "block";
      });

      img.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + 2 + "px";
        tooltip.style.top = e.pageY + 2 + "px";S
      });

      img.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
      });
      wrapper.appendChild(img);
      itemsContainer.appendChild(wrapper);
    });
  });
}

populateCategories();
