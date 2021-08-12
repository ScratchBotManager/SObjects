//Converts SObject Files Into JSON
var SObject = '("test" {"Hello", World})'
function ReadObject(object, Success) {
  
  var error = 'An Error Has Occured';
  var result = object.replace("("|")", "{"|"}");
  return Success;
}

ReadObject(SObject, alert(result))
