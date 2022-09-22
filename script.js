async function iegūtDārglietasNoApi(){

    let datiNoApi=await fetch ("http://fakestoreapi.com/products")
    let datiJson=datiNoApi.json;
    console.log(datiJson);

}