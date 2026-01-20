export const logo ="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const body_img="https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg";

export const avatar_img="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg";

export const API_OPTION={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer "+ import.meta.env.VITE_TMDB_KEY,
  }
};

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [{identifier:"eng",name:"English"},{identifier:"tel",name:"తెలుగు"},{identifier:"hin",name:"हिंदी"},{identifier:"ger",name:"Deutsch"},];

export const Movie_Tags = {
  dark: [
    "Se7en",
    "Shutter Island",
    "The Dark Knight",
    "Gone Girl",
    "The Silence of the Lambs",
    "Nightcrawler"
  ],

  thriller: [
    "Inception",
    "Se7en",
    "Shutter Island",
    "Prisoners",
    "The Prestige",
    "Zodiac",
    "The Girl with the Dragon Tattoo"
  ],

  action: [
    "The Dark Knight",
    "John Wick",
    "Mad Max: Fury Road",
    "Gladiator",
    "The Matrix",
    "Die Hard",
    "Mission Impossible"
  ],

  emotional: [
    "Interstellar",
    "Forrest Gump",
    "The Green Mile",
    "Titanic",
    "A Beautiful Mind",
    "The Pursuit of Happyness"
  ],

  romantic: [
    "The Notebook",
    "Titanic",
    "La La Land",
    "Before Sunrise",
    "Pride and Prejudice",
    "A Walk to Remember"
  ],

  comedy: [
    "The Hangover",
    "Superbad",
    "21 Jump Street",
    "The Grand Budapest Hotel",
    "Home Alone",
    "Deadpool"
  ],

  horror: [
    "The Conjuring",
    "Hereditary",
    "It",
    "A Quiet Place",
    "Get Out",
    "The Exorcist"
  ],

  sciFi: [
    "Interstellar",
    "Inception",
    "The Matrix",
    "Arrival",
    "Blade Runner 2049",
    "Dune"
  ],

  adventure: [
    "The Lord of the Rings",
    "Jurassic Park",
    "Pirates of the Caribbean",
    "Avatar",
    "Indiana Jones"
  ],

  fantasy: [
    "Harry Potter",
    "The Hobbit",
    "The Lord of the Rings",
    "Pan's Labyrinth",
    "The Chronicles of Narnia"
  ],

  animation: [
    "Toy Story",
    "Up",
    "Finding Nemo",
    "Inside Out",
    "Coco",
    "Spirited Away"
  ],
   teluguFunny: [
    "Jathi Ratnalu",
    "F2 Fun and Frustration",
    "F3 Fun and Frustration",
    "DJ Tillu",
    "Adhurs",
    "Ready",
    "Kick",
    "Sudheer Babu Sammohanam"
  ],

  teluguAction: [
    "Baahubali The Beginning",
    "Baahubali The Conclusion",
    "RRR",
    "Magadheera",
    "Pokiri",
    "Athadu",
    "Vikramarkudu",
    "Sye",
    "Pushpa The Rise"
  ],

  teluguRomantic: [
    "Geetha Govindam",
    "Arjun Reddy",
    "Ye Maaya Chesave",
    "Bommarillu",
    "Sammohanam",
    "Darling",
    "Manam",
    "Majili",
    "Oopiri"
  ],

  teluguHorror: [
    "Arundhati",
    "Raju Gari Gadhi",
    "Raju Gari Gadhi 2",
    "Awe",
    "Masooda",
    "Bhaagamathie",
    "Gruham",
    "Kanchana",
    "Kanchana 2"
  ],
   hindiFunny: [
    "Hera Pheri",
    "Phir Hera Pheri",
    "3 Idiots",
    "Munna Bhai M.B.B.S.",
    "Golmaal",
    "Welcome",
    "Dhamaal",
    "Chup Chup Ke"
  ],

  hindiAction: [
    "Dhoom",
    "Dhoom 2",
    "War",
    "Pathaan",
    "Gadar",
    "Singham",
    "Tiger Zinda Hai",
    "Don"
  ],

  hindiRomantic: [
    "Dilwale Dulhania Le Jayenge",
    "Kabir Singh",
    "Yeh Jawaani Hai Deewani",
    "Veer Zaara",
    "Aashiqui 2",
    "Tamasha",
    "Jab We Met"
  ],

  hindiHorror: [
    "Stree",
    "Bhool Bhulaiyaa",
    "Raaz",
    "Tumbbad",
    "Bhoot",
    "Pari",
    "1920"
  ],

  
  tamilFunny: [
    "Doctor",
    "Kolamaavu Kokila",
    "Soodhu Kavvum",
    "Comali",
    "Boss Engira Baskaran",
    "Panchathanthiram",
    "Kalakalappu"
  ],

  tamilAction: [
    "Vikram",
    "Master",
    "Kaithi",
    "Enthiran",
    "Kabali",
    "Ghajini",
    "Theri",
    "Mersal"
  ],

  tamilRomantic: [
    "96",
    "Vinnaithaandi Varuvaayaa",
    "Alaipayuthey",
    "Remo",
    "OK Kanmani",
    "Raja Rani",
    "Kadhal"
  ],

  tamilHorror: [
    "Pizza",
    "Yaavarum Nalam",
    "Demonte Colony",
    "Eeram",
    "Maya",
    "Kanchana",
    "Aranmanai"
  ],

  
  malayalamFunny: [
    "Kalyanaraman",
    "Punjabi House",
    "Kilukkam",
    "Meesha Madhavan",
    "Godfather",
    "Ramji Rao Speaking",
    "In Harihar Nagar"
  ],

  malayalamAction: [
    "Lucifer",
    "Bheeshma Parvam",
    "Mumbai Police",
    "Iyobinte Pusthakam",
    "Kurup",
    "Take Off",
    "Drishyam"
  ],

  malayalamRomantic: [
    "Premam",
    "Bangalore Days",
    "Hridayam",
    "Ustad Hotel",
    "Ohm Shanthi Oshaana",
    "Charlie",
    "Mayaanadhi"
  ],

  malayalamHorror: [
    "Bhoothakaalam",
    "Ezra",
    "Anjaam Pathiraa",
    "9",
    "Winter",
    "Pretham",
    "Manichitrathazhu"
  ],

  hindiOld: [
    "Sholay",
    "Mughal-e-Azam",
    "Pakeezah",
    "Guide",
    "Mother India",
    "Anand",
    "Amar Akbar Anthony",
    "Chupke Chupke"
  ],


  teluguOld: [
    "Mayabazar",
    "Gundamma Katha",
    "Missamma",
    "Sankarabharanam",
    "Sagara Sangamam",
    "Maya Bazar 1957",
    "Daana Veera Soora Karna",
    "Bhakta Prahlada"
  ],


  tamilOld: [
    "Thillana Mohanambal",
    "Server Sundaram",
    "Parasakthi",
    "Moondram Pirai",
    "Aval Appadithan",
    "Mullum Malarum",
    "16 Vayathinile",
    "Apoorva Raagangal"
  ],

 
  malayalamOld: [
    "Manichitrathazhu",
    "Chemmeen",
    "Oru Vadakkan Veeragatha",
    "Thaniyavarthanam",
    "Kireedam",
    "Bharatham",
    "Nadodikkattu",
    "Ponmuttayidunna Tharavu"
  ]
};
