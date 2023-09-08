//array of HTML strings with each string containing the HTML code of one card
let cardData = [
    {
        image :'https://img2.wallspic.com/crops/4/7/7/4/6/164774/164774-tanjiro_kamado-demon_slayer_kimetsu_no_yaiba-anime-purple-art-3840x2160.jpg',
        title :'Tanjiro Kamado',
        Anime :'Demon Slayer',
        Price :'$ 20.00',

    }
    ,
    {
        image : 'https://img3.wallspic.com/crops/7/1/2/3/7/173217/173217-eren_yeager-mikasa_ackerman-attack_on_titan-historia_reiss-poster-3840x2160.jpg',
        title :'Eren Yeager',
        Anime :'Attack on Titan',
        Price :'$ 20.00',

    }
    ,
    {
        image :'https://img1.wallspic.com/crops/6/2/1/2/7/172126/172126-anime-yuji_itadori-ryomen_sukuna-jujutsu_kaisen-cartoon-3840x2160.jpg',
        title :'Ryomen Sukuna',
        Anime :'Jujutsu Kaisen',
        Price :'$ 20.00',

    }
    ,
    {
        image :'https://img2.wallspic.com/crops/7/3/0/4/7/174037/174037-luffy_zoro-roronoa_zoro-sanji-nami-war-3840x2160.jpg',
        title :'Luffy Zoro',
        Anime :'One Piece',
        Price :'$ 20.00',

    }
    ,
    {
        image :'https://img1.wallspic.com/crops/4/0/4/4/7/174404/174404-megumin-konosuba-anime_art-anime-cartoon-3840x2160.jpg',
        title :'Megumin',
        Anime :'KonoSuba',
        Price :'$ 20.00',

    }
    ,
    {
        image :'https://img3.wallspic.com/crops/2/1/1/0/7/170112/170112-anime-gojo_satoru-satoru_gojo-jujutsu_kaisen-anime_art-3840x2160.jpg',
        title :'Satoru Gojo',
        Anime :'Jujutsu Kaisen',
        Price :'$ 20.00',
    }
    ,
    {
        image :'https://img2.wallspic.com/crops/4/3/0/4/7/174034/174034-zamasu-goku-vegeta-cartoon-purple-3840x2160.jpg',
        title :'Goku Ultra Instinct',
        Anime :'Dragon Ball Super',
        Price :'$ 20.00',

    }
    ,
    {
        image :'https://img3.wallspic.com/crops/5/7/4/2/7/172475/172475-secre_swallowtail-black_clover-noelle_silva-anime_art-art-3840x2160.jpg',
        title :'Secre Swallowtail',
        Anime :'Black Clover',
        Price :'$ 20.00',

    }
    ,
    {
        image :'https://img1.wallspic.com/crops/7/8/5/1/7/171587/171587-nh_one_punch_man_genos-genos-saitama-one_punch_man-anime-3840x2160.png',
        title :'Genos',
        Anime :'One Punch Man',
        Price :'$ 20.00',

    }
    ,
    {
        image :'https://img1.wallspic.com/crops/6/6/0/6/2/126066/126066-animation-cartoon-character-creative_arts-fictional_character-3840x2160.jpg',
        title :'Saitama',
        Anime :'One Punch Man',
        Price :'$ 20.00',

    }
    ,
    {
        image :'https://img1.wallspic.com/crops/8/8/7/8/5/158788/158788-demon_slayer-tanjiro_kamado-demon_slayer_kimetsu_no_yaiba-anime-shnen_manga-3840x2160.jpg',
        title :'Tanjiro & Nezuko',
        Anime :'Demon Slayer',
        Price :'$ 20.00',

    }
    ,
    {
        image :'https://img3.wallspic.com/crops/6/7/3/6/2/126376/126376-byakuya_kuchiki-mouth-anime-bleach-renji_abarai-3840x2160.jpg',
        title :'Toshiro Hitsugaya',
        Anime :'Bleach',
        Price :'$ 20.00',

    }
    ,
    {
        image :'https://img2.wallspic.com/crops/0/6/0/9/1/119060/119060-illustration-cold_weapon-mikasa_ackerman-anime-long_hair-3840x2160.jpg',
        title :'Levi Ackerman',
        Anime :'Attack on Titan',
        Price :'$ 20.00',

    }
    ,
    {
        image :'https://img3.wallspic.com/crops/6/3/0/2/4/142036/142036-illustration-ninja-anime-kakashi_hatake-fictional_character-3840x2160.jpg',
        title :'kakashi Hatake',
        Anime :'Naruto',
        Price :'$ 20.00',

    }
    ,
    {
        image :"https://img3.wallspic.com/crops/9/8/0/6/2/126089/126089-clan_uchiha-kakashi_hatake-sharingan-illustration-animation-3840x2160.jpg",
        title :'Itachi',
        Anime :'Naruto',  
        Price :'$ 10.00',
    }
    ,
    {
        image :"https://img3.wallspic.com/crops/7/4/8/8/6/168847/168847-anime-anime_girl-anime_art-cartoon-anime_friends_brazil-3840x2160.jpg",
        title :'Suzume Iwato',
        Anime :'Suzume',  
        Price :'$ 10.00',
    }
    ,
    {
        image :"https://img1.wallspic.com/crops/6/5/2/9/1/119256/119256-woman_in_green_shirt_holding_green_textile-3840x2160.jpg",
        title :'Erin Yager',
        Anime :'Attack on titan',  
        Price :'$ 10.00',
    }
    ,

]

const postconatiner = document.querySelector('.container');

const postmethods = () => {
  
    if(localStorage.getItem("newcardData")==null){
        localStorage.setItem('newcardData',JSON.stringify(cardData));
    }
    else{
        cardData=JSON.parse(localStorage.getItem('newcardData'));
    }
    cardData.map((postData) => {
        const postElement = document.createElement('div'); 
        postElement.classList.add('new-card');
        postElement.innerHTML = `
        
            <img src="${postData.image}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title text-white">${postData.title}</h5>
                <p class="card-text text-white">${postData.Anime}</p>
                <p class="card-text text-white">${postData.Price}</p>
                <a href="#" class="btn btn-primary mt-auto">Add to Cart</a>
            </div>
        
        `
        postconatiner.appendChild(postElement);

        
    })
}
postmethods();


//search bar
function searchCards(query) {
    const postconatiner = document.querySelector('.container');
    postconatiner.innerHTML = '';

    const filteredCards = cardData.filter((card) =>
        card.title.toLowerCase().includes(query.toLowerCase())||card.Anime.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredCards.length === 0) {
        alert("No match found.");
        return; 
    }

    filteredCards.forEach((postData) => {
        const postElement = document.createElement('div');
        postElement.classList.add('new-card');
        postElement.innerHTML = `
        
            <img src="${postData.image}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title text-white">${postData.title}</h5>
                <p class="card-text text-white">${postData.Anime}</p>
                <p class="card-text text-white">${postData.Price}</p>
                <a href="#" class="btn btn-primary mt-auto">Add to Cart</a>
            </div>
        
        `
        postconatiner.appendChild(postElement);
    });

    document. getElementById("deals"). scrollIntoView();
}





function addPoster() {
    const imageURL = document.getElementById('imageURL').value;
    const title = document.getElementById('title').value;
    const animeName = document.getElementById('animeName').value;
    const price = document.getElementById('price').value;

    const newPoster = {
        image: imageURL,
        title: title,
        Anime: animeName,
        Price: `$ ${price}.00`,
    };

   
    cardData.push(newPoster);
    localStorage.setItem('newcardData', JSON.stringify(cardData));
    postmethods();

 
    document.getElementById('imageURL').value = '';
    document.getElementById('title').value = '';
    document.getElementById('animeName').value = '';
    document.getElementById('price').value = '';
}
