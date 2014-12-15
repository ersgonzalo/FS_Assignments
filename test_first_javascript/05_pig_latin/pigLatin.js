function translate (words){
	
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	this.phrase = words.split(" ");
	this.nPhrase = [];
	var arrLen = phrase.length;

	//console.log(words.length);
	 
	for (i = 0;i < arrLen;i++){
		
		var arrLen2 = phrase[i].length;
		
		for(i2 = 0;i2 < arrLen2;i2++){
			
			if(vowels.indexOf(this.phrase[i][i2]) > -1){
				if(i2 > 0){
					if(this.phrase[i][i2-1] == "q"){
						var result = phrase[i].substr(i2+1) + phrase[i].substr(0, i2+1);
						pigMaker(result);
						break;
					}
					else{
						var result = phrase[i].substr(i2) + phrase[i].substr(0, i2);
						pigMaker(result);
						break;
					}
				}
				else{
					pigMaker(phrase[i]);
					break;				
				}
			}
			
		}
			
	}
	//console.log(nPhrase); //Test the array of thangs!
	return nPhrase.join(" ");
}

function pigMaker(word){

	word = word + "ay";
	this.nPhrase.push(word);

}
/*check string 
apple
banana
cherry
eat pie
school
quiet
square
the quick brown 

reminder to self, check function calls T.T
*/
