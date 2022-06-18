let gridData = [
    {
        brand : "THOM BROWNE",
        name : "Off-White Wool Turtleneck",
        desc1 : "Knit virgin wool and mohair-blend sweater. Jacquard graphic pattern throughou",
        desc2: "90% virgin wool, 6% mohair, 3% polyamide, 1% wool. Made in Italy.",
        img1: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222381F099003_1/thom-browne-off-white-wool-turtleneck.jpg",
        img2: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222381F099003_2/thom-browne-off-white-wool-turtleneck.jpg",
        img3: "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222381F099003_3/thom-browne-off-white-wool-turtleneck.jpg",
        price: "940",
        color: "white"
    },
    {
        brand :"THOM BROWNE",
        name :"Navy Cotton T-Shirt",
        desc1 : "Cotton jersey T-shirt.",
        desc2 :"100% cotton. Made in Japan.",
        img1 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222381F110000_1/thom-browne-navy-cotton-t-shirt.jpg",
        img2 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222381F110000_2/thom-browne-navy-cotton-t-shirt.jpg",
        img3 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222381F110000_3/thom-browne-navy-cotton-t-shirt.jpg",
        price :"260",
        color :"Navy",
    },
    {
        brand :"ACNE STUDIOS",
        name :"Pink Organic Cotton T-Shirt",
        desc1 :"Organic cotton jersey T-shirt.",
        desc2 :"100% organic cotton. Made in Portugal.",
        img1 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222129F110003_1/acne-studios-pink-organic-cotton-t-shirt.jpg",
        img2 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222129F110003_2/acne-studios-pink-organic-cotton-t-shirt.jpg",
        img3 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222129F110003_3/acne-studios-pink-organic-cotton-t-shirt.jpg",
        price : "115",
        color : "Powder pink",
    },
    {
        brand :"ACNE STUDIOS",
        name :"Blue Wool Beanie",
        desc1 :"Supplier color: Turquoise blue",
        desc2 :"100% wool. Imported",
        img1 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222129F014007_1/acne-studios-blue-wool-beanie.jpg",
        img2 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222129F014007_2/acne-studios-blue-wool-beanie.jpg",
        img3 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222129F014007_3/acne-studios-blue-wool-beanie.jpg",
        price :"140",
        color :"Turquoise blue",
    },
    {
        brand :"AND WANDER",
        name :"Off-White Trek 2way Trousers",
        desc1 :"Stretch nylon jersey trousers. Jacquard logo throughout.",
        desc2 :"88% nylon, 12% polyurethane. Made in Japan.",
        img1 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221817F087001_1/and-wander-off-white-trek-2way-trousers.jpg",
        img2 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221817F087001_2/and-wander-off-white-trek-2way-trousers.jpg",
        img3 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221817F087001_4/and-wander-off-white-trek-2way-trousers.jpg",
        price :"405",
        color :"Off white",
    },
    {
        brand :"AND WANDER",
        name :"Black Trek 2way Trousers",
        desc1 :"Stretch nylon jersey trousers. Jacquard logo throughout.",
        desc2 :"88% nylon, 12% polyurethane. Made in Japan.",
        img1 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221817F087000_1/and-wander-black-trek-2way-trousers.jpg",
        img2 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221817F087000_1/and-wander-black-trek-2way-trousers.jpg",
        img3 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221817F087000_4/and-wander-black-trek-2way-trousers.jpg",
        price :"406",
        color :"Black",
    },
    {
        brand :"WARDROBE.NYC",
        name :"Green Cotton Sweatshirt",
        desc1 :"French terry sweatshirt.",
        desc2 :"100% cotton. Made in Portugal.",
        img1 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222277F052007_1/wardrobenyc-green-cotton-sweatshirt.jpg",
        img2 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222277F052007_2/wardrobenyc-green-cotton-sweatshirt.jpg",
        img3 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222277F052007_3/wardrobenyc-green-cotton-sweatshirt.jpg",
        price :"495",
        color :"Green",
    },
    {
        brand :"WARDROBE.NYC",
        name :"Black Cotton T-Shirt",
        desc1 :"Cotton jersey T-shirt.",
        desc2 :"100% cotton. Made in Portugal.",
        img1 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222277F110006_1/wardrobenyc-black-cotton-t-shirt.jpg",
        img2 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222277F110006_2/wardrobenyc-black-cotton-t-shirt.jpg",
        img3 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222277F110006_3/wardrobenyc-black-cotton-t-shirt.jpg",
        price :"200",
        color :"Black",
    },
    {
        brand :"WARDROBE.NYC",
        name :"Black Bike Shorts",
        desc1 :"Stretch nylon jersey shorts. High-rise.",
        desc2 :"73% polyamide, 27% elastane. Made in Portugal.",
        img1 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222277F088000_1/wardrobenyc-black-bike-shorts.jpg",
        img2 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222277F088000_2/wardrobenyc-black-bike-shorts.jpg",
        img3 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222277F088000_4/wardrobenyc-black-bike-shorts.jpg",
        price :"150",
        color :"Black",
    },
    {
        brand :"AMBUSH",
        name :"Green Nylon Sports Bra",
        desc1 :"Stretch nylon jersey sports bra. Logo pattern printed throughout.",
        desc2 :"61% polyamide, 39% elastane. Made in Italy.",
        img1 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221820F073002_1/ambush-green-nylon-sports-bra.jpg",
        img2 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221820F073002_2/ambush-green-nylon-sports-bra.jpg",
        img3 :"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221820F073002_3/ambush-green-nylon-sports-bra.jpg",
        price :"250",
        color :"Green",
    }

]

let product = JSON.parse(localStorage.getItem("productData"));

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

let showProduct = (prodData) => {
    document.getElementById("prodName").innerText = prodData.name;
    document.getElementById("prodDesigner").innerText = prodData.designer;
    document.getElementById("prodCategory").innerText = prodData.category;
    document.getElementById("mainProductImage").src = prodData.image;

    let priceString = [...prodData.price];
    let prodPrice='';
    let cutoffPrice;
    priceString.forEach((ele) => {
        if(ele != '$') {
            prodPrice += ele;
        }
    });
    prodPrice = Number(prodPrice);
    cutoffPrice = prodPrice + randomIntFromInterval(1,500);
    let discount = (((cutoffPrice - prodPrice) / cutoffPrice) * 100).toPrecision(3);

    document.getElementById("price").innerText = prodData.price + " USD";
    document.getElementById("cutoffPrice").innerText = "$" + cutoffPrice + " USD";
    document.getElementById("discount").innerText = discount + "% OFF";
}

showProduct(product);

document.getElementById("addToWishlist").addEventListener("click",() => {
    addToWishlist(product);
});

document.getElementById("addToBag").addEventListener("click",() => {
    addToBag(product);
});

let addToBag = (item) => {
    console.log(item.name + " added to Bag");
}

let addToWishlist = (item) => {
    console.log(item.name + " added to Wishlist");
} 

let gridContainer = document.getElementById("prodGrid");
let appendToProductPage = (data) => {
    gridContainer.innerHTML = null;

    data.forEach((item) => {
        let prod = document.createElement("div");
        prod.style.height = "400px";
        prod.style.border = "1px solid red";
        prod.style.display = "flex";
        prod.style.flexDirection = "column";

        let img = document.createElement("img");
        img.src = item.img1;
        img.style.height = "80%";
        img.style.margin = "auto";

        let title = document.createElement("p");
        title.innerText = item.name;
        title.style.marginLeft = "10px";

        let price = document.createElement("p");
        price.innerText = "$" + item.price + " USD";
        price.style.marginLeft = "10px";

        prod.append(img,title,price);
        gridContainer.append(prod);
    });
}

appendToProductPage(gridData);
