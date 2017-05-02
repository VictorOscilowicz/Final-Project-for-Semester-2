var exports = module.exports = {};

function PasswordMessage(m){

}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);

}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}

exports.containsUpper=function(str){
    let hasUpper="false";
    try{
      for(let c=0;c>=65||c<=90;c++){
      }
        if(c=){
          return "true";
        }
        else{
          throw new PasswordMessage("Does not have uppercase character if the variable hasUpper is false");
        }
    }
    catch(e){
      console.log(e.message);
      return hasUpper;
    }
}

exports.containsLower =function(str){

}


exports.containsNumerical =function(str){

}


exports.containsSpecial =function(str){

}
