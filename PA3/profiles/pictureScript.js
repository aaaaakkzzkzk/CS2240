const amazonMilk = ['../frog pics/Amazon-Milk-Frog2.jpg','../frog pics/amazon-milk-frog3.jpg','../frog pics/amazon-milk-frog4.jpg','../frog pics/Amazon-Milk-Frog5.jpg','../frog pics/Amazon-milk-frog.png'];
const bluePoison = ['../frog pics/blue-arrow-poison-frog.png','../frog pics/Blue-poison-dart-frog-arrow.png','../frog pics/blue-poison.jpg'];
const borneoEared = ['../frog pics/borneo-eared2.jpg','../frog pics/borneo-eared3.jpg','../frog pics/borneo-eared.jpg'];
const bumblebee = ['../frog pics/bumblebee.jpg','../frog pics/bumblebee2.jpg','../frog pics/Bumblebee-dart-frog.jpg'];
const chaco = ['../frog pics/chaco.jpeg','../frog pics/chaco2.jpg','../frog pics/chaco-horned-frog.jpg'];
const rain = ['../frog pics/rain1.jpg','../frog pics/rain2.jpg','../frog pics/rain3.jpg','../frog pics/rain4.jpg','../frog pics/common-rain-frog.png'];
const harlequin = ['../frog pics/harlequin1.jpg','../frog pics/Harlequin-poison-dart-frog.png',];
const mimic = ['../frog pics/mimic1.jpg','../frog pics/mimic2.jpg','../frog pics/mimic-poison-dart-frog.png'];
const pacman = ['../frog pics/pacman1.jpg','../frog pics/pacman2.jpg','../frog pics/Pacman-Frog.jpg'];
const polkadot = ['../frog pics/polkadot1.jpg','../frog pics/polkadot2.jfif','../frog pics/Polka-dot-tree-frog.png'];
const redEyed = ['../frog pics/red-eyed1.png','../frog pics/red-eyed2.jpg','../frog pics/Red-eyed-tree-frog.png'];
const reed = ['../frog pics/reed1.jpg','../frog pics/reed2.jpg','../frog pics/reed-frog.jpg'];
const tomato = ['../frog pics/tomato1.jpg','../frog pics/tomato2.jpg','../frog pics/Tomato-frog.png',];
const waxyMonkey = ['../frog pics/waxyMonkey1.jpg','../frog pics/waxyMonkey2.png','../frog pics/Waxy-Monkey-Frog.png'];
const whites = ['../frog pics/whites1.jpg','../frog pics/whites2.jpg','../frog pics/whites3.jpg','../frog pics/whites-tree-frog.jpg'];




let index = 0;
let array;
let picID = document.querySelector('.frogProfilePic').id;

switch(picID){
    case "amazonMilk":
        array = amazonMilk;
        index = 0;
        break;
    case "bluePoison":
        array = bluePoison;
        index = 0;
        break;
    case "borneoEared":
        array = borneoEared;
        index = 0;
        break;
    case "bumblebee":
        array = bumblebee;
        index = 0;
        break;
    case "chaco":
        array = chaco;
        index = 0;
        break;
    case "rain":
        array = rain;
        index = 0;
        break;
    case "harlequin":
        array = harlequin;
        index = 0;
        break;
    case "mimic":
        array = mimic;
        index = 0;
        break;  
    case "pacman":
        array = pacman;
        index = 0;
        break;
    case "polkadot":
        array = polkadot;
        index = 0;
        break;
    case "redEyed":
        array = redEyed;
        index = 0;
        break;
    case "reed":
        array = reed;
        index = 0;
        break;
    case "tomato":
        array = tomato;
        index = 0;
        break;
    case "waxyMonkey":
        array = waxyMonkey;
        index = 0;
        break;
    case "whites":
        array = whites;
        index = 0;
        break;
}


$('.frogProfilePic').click(function() {
        $(this).find('img').attr('src', array[index]);
        index = (index + 1) % array.length;
    });