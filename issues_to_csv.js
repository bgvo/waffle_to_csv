function columnToCsv(col){

	csvContent = "data:text/csv;charset=ISO-8859-1,";

	for (i = 0; i < col.length-1; i++) { 

		var issue_num = col[i].children[0].children[0].textContent
		var title = col[i].children[1].children[0].value
		var size = col[i].children[1].children[1].children[1].children[1].children[0].textContent.replace(/\r?\n/g, "").replace(/\s/g, '')

		var tags = col[i].children[1].children[1].children[0].children
		var tags_str = ""
		for (j = 0; j < tags.length-1; j++) { tags_str = tags_str+tags[j].textContent+";"}

	    csvContent += issue_num+","+size.replace(/\r?\n/g, "").replace(/\s/g, '')+","+title.replace(",",";")+","+tags_str.replace(/\r?\n/g, "").replace(/\s/g, '')+"\n";

	}

	return csvContent;
}

function selectColumn(column){
	var col = $(".columns-ct")[0].children[column]
	return col.children[0].children[1].children
}


inbox = selectColumn(0)
var csvContent = columnToCsv(inbox)
var encodedUri = encodeURI(csvContent);
window.open(encodedUri);
