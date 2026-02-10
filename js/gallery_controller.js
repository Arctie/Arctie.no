//populate as you add more to the Pictures folder! alt is alt text

const threeImages = [
    {src: 'Assets/Pictures/three/ModelShowcase1.png', alt: 'model', title: 'model'}, 
    {src: 'Assets/Pictures/three/ORB1.png', alt: 'model', title: 'model'}, 
    {src: "Assets/Pictures/three/Render 1.png", alt: "Render 1", title: "Render 1" },
    {src: "Assets/Pictures/three/Render 2.png", alt: "Render 2", title: "Render 2" },
    {src: 'Assets/Pictures/three/ORB2.png', alt: 'orb', title: 'orb'}, 
    {src: "Assets/Pictures/three/Tiles Render 1.png", alt: "Tiles Render 1", title: "Tiles Render 1" },
    {src: "Assets/Pictures/three/Tiles Render 4.png", alt: "Tiles Render 4", title: "Tiles Render 4" },
    {src: 'Assets/Pictures/three/ORB3.png', alt: 'orb', title: 'orb'}, 
    {src: 'Assets/Pictures/three/ORB4.png', alt: 'orb', title: 'orb'}, 
    {src: 'Assets/Pictures/three/ORB5.png', alt: 'orb', title: 'orb'},
    {src: 'Assets/Pictures/three/Bag.png', alt: 'Bag', title: 'orb'},
    {src: 'Assets/Pictures/three/Heart.png', alt: 'Heart', title: 'orb'},
    {src: 'Assets/Pictures/three/Hermes.png', alt: 'Hermes', title: 'orb'},
    {src: 'Assets/Pictures/three/Lava Charm.png', alt: 'Lava Charm', title: 'orb'},
    {src: 'Assets/Pictures/three/Mirror.png', alt: 'Magic Mirror', title: 'orb'},
    {src: 'Assets/Pictures/three/Tinkerers.png', alt: 'Tinkerers Table', title: 'orb'}
]
const twoImages = [
    {src: 'Assets/Pictures/two/Dergonpanceek.png', alt: 'model', title: 'model'},
    {src: 'Assets/Pictures/two/KeyniFinal.png', alt: 'model', title: 'model'},
    {src: 'Assets/Pictures/two/kipp chickenrun child.png', alt: 'model', title: 'model'},
    {src: 'Assets/Pictures/two/Kipp Kunstrulett.png', alt: 'model', title: 'model'},
    {src: 'Assets/Pictures/two/Pepe Sunset.png', alt: 'model', title: 'model'}
];



function populateThree() {
    const threeContainer = document.getElementById('three-Container');

    threeImages.forEach(i => {
        const threeWrapper = document.createElement('div'); //add div
        threeWrapper.classList.add('portfolioItem') // styling
        const img = document.createElement('img');
        img.src = i.src;
        img.alt = i.alt;

        threeWrapper.appendChild(img);
        threeContainer.appendChild(threeWrapper);
        
    });
}
function populateTwo() {
    const twoContainer = document.getElementById('two-Container');

    twoImages.forEach(i => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('portfolioItem');

        const img = document.createElement('img');
        img.src = i.src;
        img.alt = i.alt;

        wrapper.appendChild(img);
        twoContainer.appendChild(wrapper);
    });
}

populateTwo();
populateThree();