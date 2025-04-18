 class BodyRequest{

    static get(form:FormData):object{
    let keys =form.keys();
    let result:any = {};
    for(let key of keys){
        result[key]= form.get(key);
    }
       return result; 
    }
}

export {BodyRequest}