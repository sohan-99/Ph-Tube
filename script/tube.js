const displayvideos = videos => {
    // step --- 1

    const videoContainer = document.getElementById('videos-container');


    videos.forEach(video => {
        console.log(video);
        // step-2 create a div 
        const videoCard = document.createElement('div');
        videoCard.classList = `card w-96 bg-black-400 shadow-xl`;
        // step-3 inner html 
        videoCard.innerHTML = `
    
        <figure><img class="" src="${video.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
        <div class="grid grid-cols-2">
        <img src="${video.authors.profile_picture}" alt="Shoes" />
            <h2 class="card-title">${video.title}</h2>
          
        </div>
        <h2 class="card-title2">${video.authors.profile_name}</h2>
        
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        
        `;
        // step-4 appendchile 

        videoContainer.appendChild(videoCard);

    });
};

const handleChatagory = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/category/1000");
    const data = await res.json();
    const videos = data.data;

    displayvideos(videos);
};

handleChatagory();





































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