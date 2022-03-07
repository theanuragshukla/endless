const text = "Ipsum autem similique lorem laudantium assumenda Perferendis illum perferendis excepturi explicabo laborum. Vel sequi quisquam perspiciatis voluptatem rerum! Fugit debitis ipsa voluptatibus nisi aliquam vel Impedit veritatis consequatur accusamus voluptates fugiat Nulla doloribus cum neque qui qui, corrupti quis Eos recusandae porro cum quae porro facilis. Obcaecati quis laboriosam eius quasi quas Vitae adipisci quasi perferendis aliquam architecto sit. Enim quo porro alias laudantium fugiat. Tempore laudantium quisquam nihil nam assumenda, voluptatibus eveniet laborum Ipsam illo voluptatibus ipsa commodi magni Id accusamus molestiae reiciendis reprehenderit blanditiis. Cupiditate repellendus libero asperiores fugit magnam! Rem architecto sint esse rerum repellat Nulla modi.";


window.onscroll = function(e) {
	if(atBottom(document.getElementById("end"))){
		document.getElementById("main").innerHTML+=(text+text+text+text+text+text+text+text);
	}
}

function atBottom(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    isVisible = elemTop < (window.innerHeight+3000) && elemBottom >= 0;
    return isVisible;
}
window.onload = function(){
	window.scroll(0,1);
}
