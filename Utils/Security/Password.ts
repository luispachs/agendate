import {  createHash } from "node:crypto";
class Password {
    public static hash(text:string) {
        const hash = createHash("hash256");
        hash.update(text+ " " +process.env.SALT);

        return hash.digest('hex');
    }

    public static  validate(text:string,hashedPassword:string):boolean{
        let isValid = false;
        let possibleHash:string = this.hash(text);
        if(possibleHash == hashedPassword){
            return true;
        }

        return isValid
    }
}