csvContent = "data:text/csv;charset=ISO-8859-1,";


var col1 = $(".columns-ct")[0].children[0]
var col2 = $(".columns-ct")[0].children[2]

inbox_cards = col1.children[0].children[1].children
backlog_someday_cards = col2.children[0].children[1].children

function columnToCsv(){
for (i = 0; i < backlog_someday_cards.length-1; i++) { 
	var issue_num = backlog_someday_cards[i].children[0].children[0].textContent
	var title = backlog_someday_cards[i].children[1].children[0].value
	var size = backlog_someday_cards[i].children[1].children[1].children[1].children[1].children[0].textContent.replace(/\r?\n/g, "").replace(/\s/g, '')
	var tags = backlog_someday_cards[i].children[1].children[1].children[0].children
	var tags_str = ""

	for (j = 0; j < tags.length-1; j++) { 
		// console.log(tags[i].textContent)
		tags_str = tags_str+tags[j].textContent+";"
	}


    csvContent += issue_num+","+size.replace(/\r?\n/g, "").replace(/\s/g, '')+","+title.replace(",",";")+","+tags_str.replace(/\r?\n/g, "").replace(/\s/g, '')+"\n";

}
}



var encodedUri = encodeURI(csvContent);
window.open(encodedUri);
