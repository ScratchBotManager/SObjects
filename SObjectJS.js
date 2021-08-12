//Converts SObject Files Into JSON
var SObject = '("test" {"Hello", World})'
function ReadObject(object, Success) {
  
  var error = 'An Error Has Occured';
         var str = "I have a Lenovo Laptop, a Honor Phone, and a Samsung Tab.";
          var Obj = {
            Lenovo: "Dell",
            Honor: "OnePlus",
            Samsung: "Lenovo"
        };
  
        function GFG_Fun() {
            down.innerHTML = str.replace(/Lenovo|Honor|Samsung/gi, function(matched){
                return alert(Obj[matched]);
            });
        }
}

ReadObject(SObject, alert(result))
