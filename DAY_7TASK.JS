//Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).
var link=new XMLHttpRequest();
link.open("Get","https://restcountries.com/v3.1/all");
link.responseType="json";
link.send();
link.onload=function(){
    var response=link.response;
    console.log(response);
    //Get all the countries from the Asia continent /region using the Filter function
   var result=response.filter(function name(item){
    return item.continents=="Asia";
   });
    var res=result.map(function(item){
        return item.name.common;
    })
    for(var i=0;i<res.length;i++){
        console.log(res[i])
    }
    //Get all the countries with a population of less than 2 lakhs using Filter function
  var pop=response.filter(function(item){
    return item.population<200000
;  })
 var population=pop.map(function(item){
    return item.name.common;
 })
 for(var i=0;i<population.length;i++){
 console.log(population[i]);
 }
 //Print the total population of countries using reduce function
 var total=response.reduce(function(a,b){
    return a+b.population
})
 console.log(total);
 //Print the following details name, capital, flag using forEach function
 response.forEach(function(item){
    console.log(item.flag);
 });
  //Print the country which uses US Dollars as currency.
 var cur=response.filter(function(item){
    return item.currencies="USD";
 })
 var currency=cur.map(function(item){
    return item.name.common;
    
 })
 console.log(currency)
 for(var i=0;i<currency.length;i++){
    console.log(currency[i])
 }

}