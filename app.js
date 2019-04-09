
let liczba = 345096
console.log("/////////////////////////////////Sprawdzanie dla "+liczba+"/////////////////////////////////")
let h = Math.round(liczba/2);
while (liczby(liczba, h, true) > 2){ 
    h--;
    if(h <= 0) break;
}
liczby(liczba, h, true);



function liczby (liczba, z, m){
    console.log("z == "+z)
    let k = true;
    let j = z;
    let ile = 0;
    while (k == true && j > 0 && liczba > 0) {
    
    if (Math.pow(j, 2) == liczba){
        if (m) console.log(j);
        k = false;
        ile++;
    }
    else if (Math.pow(j, 2) < liczba){
        if (m) console.log(j);
        ile++;
        liczba -= Math.pow(j, 2);
        j = Math.round(liczba/2);
    }
    else if (Math.pow(j, 2) > liczba){
        j--;
    }
    if (liczba < 0 || j < 0) k = false;
}
console.log("///////////////////////////////");
return ile;

}