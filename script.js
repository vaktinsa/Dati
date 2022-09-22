async function iegūtDārglietasNoApi(){

    let datiNoApi=await fetch ("http://fakestoreapi.com/products/category/jewelry");
    let datiJson=datiNoApi.json;
    console.log(datiJson);

}
async function iegūtElekronikuNoApi(){

    let datiNoApi=await fetch ("http://fakestoreapi.com/products/category/electronics");
    let datiJson=datiNoApi.json;
    console.log(datiJson);

}