const displayvideos = videos => {
    // step --- 1
    console.log(videos.data);
    notFound(videos)
    // console.log(videos);
    const videoContainer = document.getElementById('videos-container');
    videoContainer.innerHTML = '';

    videos.data.forEach(video => {
        // console.log(video);
        // step-2 create a div 
        const videoCard = document.createElement('div');
        videoCard.classList = `card w-83 bg-black-400 shadow-xl`;
        // step-3 inner html 
        videoCard.innerHTML = `
        <figure><img class="h-[250px]" src="${video.thumbnail}" alt="Shoes" /></figure>
        <div class="flex justify-space-around space-x-11 px-4 pt-4 pb-4">
        <img class="h-11 w-11 rounded-full  " src="${video.authors[0].profile_picture}">
        <div class="">
        <h2 class="card-title font-bold text-3xl">${video.title}</h2>
        <h2 class="card-title2 font-normal text-slate-700 text-2xl">${video.authors[0].profile_name}</h2>
        <h2 class="">${video.authors[0].verified}
        <h2 class="card-title2 text-slate-700 font-normal text-xl">${video.others.views}</h2>
        </div>
        </div>
        `;
        videoContainer.appendChild(videoCard);
    });
};

const handleChatagory = async (id) => {
    console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    displayvideos(data);
};

handleChatagory('1000');

const displaybutton = button => {
    // step --- 1
    const menucontainer = document.getElementById('menu-container');
    button.forEach(menu => {
        // console.log(menu);
        let menuBar = document.createElement('div');
        menuBar.classList = `text-center  flex `;
        menuBar.innerHTML = `
        <div onclick="handleChatagory(${menu.category_id})" class=" lg:pt-3 pt-1 text-center block  h-[35px] lg:h-[55px] md:h[40px] rounded lg:w-[150px] w-14 md:w-16 lg:text-xl text-sm md:text-lg font-semibold text-black  bg-gray-100">${menu.category}</div>
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

const notFound = (data) => {
    const notFoundcontainer = document.getElementById('notFound');
    notFoundcontainer.innerHTML = ''
    const notTrue = !data.status  ? `<div class="flex flex-col mt-44 items-center gap-4">
    <img src="./images/Icon.png" alt="no img found"  class="center">
    <h1 class="font-bold text-4xl text-center">Oops!! Sorry, There is no <br>
     content here</h1>
    </div>` : '';
const div = document.createElement('div');
div.innerHTML=`${notTrue}`
    notFoundcontainer.appendChild(div);
}


// blog button click 
document.getElementById('blog-btn').addEventListener('click', function () {
    console.log('blog-btn clicked');
    
    window.location.href = 'modal.html';

})































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