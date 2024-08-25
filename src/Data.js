export const API_KEY = "AIzaSyDN2LU4QCB10EBirqs2AbhiLJUspSwkWfM";

export const converter = (value) =>{
    if(value >= 1000000){
        let viewCount = value / 1000000;
        return viewCount.toFixed(1) + "M"
    }
    else if(value >= 1000){
        return Math.floor(value/1000) + "K"
    }
    else{
        return value;
    }
    
}
