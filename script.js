async function iegūtDārglietasNoApi(){

    let datiNoApi=await fetch ("http://fakestoreapi.com/products/category/jewelry");
    let datiJson=datiNoApi.json;
    console.log(datiJson);

}