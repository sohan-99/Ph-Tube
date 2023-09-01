const displayvideos = videos => {
    // step --- 1
    const videoContainer = document.getElementById('videos-container');
    videoContainer.innerHTML='';

    videos.forEach(video => {
        console.log(video);
        // step-2 create a div 
        const videoCard = document.createElement('div');
        videoCard.classList = `card w-83 bg-black-400 shadow-xl`;
        // step-3 inner html 
        videoCard.innerHTML = `
        <figure><img class="h-[250px]" src="${video.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
        <div class="grid grid-cols-2">
        <img class="h-11 w-11 rounded-full " src="${video.authors[0].profile_picture}" alt="Shoes" />
            <h2 class="card-title">${video.title}</h2>
        </div>
        <h2 class="card-title2">${video.others.views}</h2>
        <img src="" alt="" />
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
        </div>`;
        videoContainer.appendChild(videoCard);
    });
};

const handleChatagory  = async (id) => {
    console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const videos = data.data;
    
    displayvideos(videos);
};

handleChatagory('1000');

const displaybutton = button => {
    // step --- 1
    const menucontainer = document.getElementById('menu-container');
    
    button.forEach(menu => {
        let menuBar = document.createElement('div');
        menuBar.classList = `text-center  flex `;
        menuBar.innerHTML = `
        <div onclick="handleChatagory(${menu.category_id})" class=" block  h-[35px] rounded w-[75px] text-lg font-semibold text-[#FFF]  bg-[#FF1F3D]">${menu.category}</div>
        
        `;

        menucontainer.appendChild(menuBar);
    });

};
const handlemenu = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const button = data.data
    displaybutton(button);

};
handlemenu()


































// const handleChatagory = async () => {
//     const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");

//     const data = await res.json();
//     const videos = data.data;
//     // console.log(videos);
//     displayvideos(videos);


//     const displayvideos = videos =>{
//         videos.forEach(video =>{
//             console.log(video);
//         })
//     }
// }
// handleChatagory();