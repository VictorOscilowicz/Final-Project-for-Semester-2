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
      for(let c=0;c<str.length;c++){
      }
        if(c>=65 || c<=90){
          hasUpper="true";
        }
        else{
          throw new PasswordMessage("Does not have an uppercase character if the variable hasUpper is false");
        }
    }
    catch(e){
      console.log(e.name+": "+e.message);
      return hasUpper;
    }
}

exports.containsLower =function(str){
  let hasLower="false";
  try{
    for(let c=0;c<str.length;c++){
    }
      if(c>=97 || c<=122){
        hasLower="true";
      }
      else{
        throw new PasswordMessage("Does not have a lowercase character if the variable hasLower is false");
      }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasLower;
  }
}

exports.containsNumerical =function(str){
  let hasNumerical="false";
  try{
    for(let c=0;c<str.length;c++){
    }
      if(c>=48 || c<=57){
        hasNumerical="true";
      }
      else{
        throw new PasswordMessage("Does not have a numerical character if the variable hasNumerical is false");
      }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasNumerical;
  }
}

exports.containsSpecial =function(str){
  let hasSpecial="false";
  try{
    for(let c=0;c<str.length;c++){
    }
      if(c>= || c<=){
        hasSpecial="true";
      }
      else{
        throw new PasswordMessage("Does not have a special character if the variable hasSpecial is false");
      }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasSpecial;
  }
}
