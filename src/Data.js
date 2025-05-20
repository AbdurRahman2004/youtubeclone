export const API_KEY = process.env.API_KEY;

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
