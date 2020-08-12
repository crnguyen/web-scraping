const request = require("request"); //alternative to axios
const cheerio = require("cheerio"); //import cheerio
const URL = "https://visitseattle.org/partners/?frm=partners&ptype=visitors-guide&s=&neighborhood=Capitol+Hill"

request(URL, (error, response, body)=>{
    let $ = cheerio.load(body)
    // let result = $(".search-result-preview").find("a").attr("title")
//____________________________________
    //show all of the titles of the business on the page
    let results = $(".search-result-preview") 
    // results.each((index, element)=>{
    //     console.log($(element).find("a").attr("title"))
    // })
//______________________________________________
    //iterating through the cheerio array
    let resultsTitles = results.map((index,element)=>{
        //return $(element).find("a").attr("title") - you can do it this way or the next way
        return {
            index: index,
            title: $(element).find("a").attr("title"),
            img: [ $(element).find("div").css("background-image") ] //grab the background image
        }
    })
    console.log(resultsTitles.get()); //the .get turns the cheerio object into an array

})