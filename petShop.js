function petShop(input){

    let dog = Number(input[0]);
    let cat = Number(input[1]);

    let dogPrice = dog * 2.50;
    let catPrice = cat * 4;

    let result = dogPrice + catPrice;

    console.log(`${result} lv.`);


}
petShop(["5 ",
"4 "])