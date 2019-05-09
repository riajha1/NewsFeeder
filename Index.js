/**
 * NewsFeeder is a base class
 */ 
 
class NewsFeeder {
	giventring = '';
	secModuleOutput = {
		entitites: [],
		link: [],
		twitter: []
	}	
}

/**
 * getString is a prototype of NewsFeeder to get the string and set it to the property;
 */ 

NewsFeeder.prototype.getString = function(str) {
	this.giventring = str;
}

/**
 * extractStringToArrays is a prototype of NewsFeeder to extract the entities, link, and twitter;
 */ 
NewsFeeder.prototype.extractStringToArrays= function(entitites,link,twitter) {
	this.secModuleOutput.entitites=entitites;
	this.secModuleOutput.link=link;
	this.secModuleOutput.twitter=twitter;
	
}

/**
 * result is a prototype of NewsFeeder to get result with formatted text;
 */ 
NewsFeeder.prototype.result = function () {
	var getStringArray = this.giventring.split(" "); 
	var resultArray = getStringArray.map((item) => {
		if(this.secModuleOutput.entitites.indexOf(item) > -1){
			item ='<strong>'+ item + '</strong>'; 
		} else if (this.secModuleOutput.link.indexOf(item)>-1){
			item='<a href="' + item + '">'+ item + '</a>'; 
		} else if (this.secModuleOutput.twitter.indexOf(item)>-1){
			item='@<a href= "http://twitter.com/' + item.slice(1,item.length)+ '">'+  item.slice(1,item.length) + '</a>';
		} 
		return item;
	});
	return resultArray;
}


var feed = new NewsFeeder();

feed.getString("Obama visited Facebook headquarters: http://bit.ly/xyz @elversatile");

feed.extractStringToArrays(["Obama", "Facebook"], ["http://bit.ly/xyz"], ["@elversatile"]);

feed.result();

