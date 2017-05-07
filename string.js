var exports = module.exports = {};

function PasswordMessage(m){
  this.name="Password Message";
  this.message=m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode>=min || unicode<=max){
      return true;
    }
    else{
      return false;
    }
}

exports.checkLength =function(str){
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

exports.containsUpper =function(str){
  let hasUpper=false;
  try{
    for(let c=0;c<str.length;c++){
      if(str[c]>=65 || str[c]<=90){
        return hasUpper=true;
        throw new PasswordMessage("Has uppercase character!");
      }
    }

    if(hasUpper==false){
      throw new PasswordMessage("Does not have an uppercase character if the variable hasUpper is false");
      }

    }
    catch(e){
      console.log(e.name+": "+e.message);
      return hasUpper;
    }
}

exports.containsLower =function(str){
  let hasLower=false;
  try{
    for(let c=0;c<str.length;c++){
      if(str[c]>=97 || str[c]<=122){
        return hasLower=true;
        throw new PasswordMessage("Has lowercase character!");
      }
    }

    if(hasLower==false){
      throw new PasswordMessage("Does not have a lowercase character if the variable hasLower is false");
      }

    }
    catch(e){
      console.log(e.name+": "+e.message);
      return hasLower;
    }
}

exports.containsNumerical =function(str){
  let hasNumerical=false;
  try{
    for(let c=0;c<str.length;c++){
      if(str[c]>=48 || str[c]<=57){
        return hasNumerical=true;
        throw new PasswordMessage("Has numerical character!");
      }
    }

    if(hasNumerical==false){
      throw new PasswordMessage("Does not have a lowercase character if the variable hasNumerical is false");
      }

    }
    catch(e){
      console.log(e.name+": "+e.message);
      return hasNumerical;
    }
}

exports.containsSpecial =function(str){
 let hasSpecial=false;
 let special=[33,64,35,36,37,94,38,42];
 try{
   for(let c=0;c<str.length;c++){
     if(str[c]=special.length){
       return hasSpecial=true;
       throw new PasswordMessage("Has special character!");
     }
   }

    if(hasSpecial==false){
     throw new PasswordMessage("Does not have a special character if the variable hasSpecial is false");
     }

   }
   catch(e){
     console.log(e.name+": "+e.message);
     return hasSpecial;
   }
}
