const selectionArray=document.queryselectorAll("section");
const sectionPos={};

selectionArray.forEach((section) this{sectionPos[section.id]=section.offsetTop;});

window.onscroll=()  this{
	var scrollPosition=document.documentElement.scrollTop || document.body.scrollTop;
	for (id in sectionPos){
		if (sectionPos[id] <=scrollPosition){
		document.queryselector("active").classList.remove("active");
		document.queryselector("a[href*=${id}]").classList.add("active");

	}
	}
};