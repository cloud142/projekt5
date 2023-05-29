
const farver_arrayList =
    [{ "farve": "rød", "antal": 7 },
    { "farve": "blå", "antal": 5 },
    { "farve": "sort", "antal": 0 },
    { "farve": "gul", "antal": 2 }]

function dropFarveMenu() {
    document.getElementById("farverList").classList.toggle("show");
}


function farveValg(id) {
    farver_arrayList.forEach(element => {

        if (id === element["farve"]) {

            if (element["antal"] > 0) {
                alert("du har valgt " + id + " som farve")
                console.log(id)
            } else {
                alert("der er ikke flere " + id + " taskereme på lager")
            }
        }
    });
}



window.onload = function () {


    const HtmlElementer = document.getElementById("farverList")

   

    for (let index = 0; index < farver_arrayList.length;) {

        let farveElementItem = document.createElement("li")

        
        farveElementItem.classList.add("valg")
        farveElementItem.classList.add("showDropdown")
        farveElementItem.setAttribute("onclick", "farveValg(this.id)")
        farveElementItem.setAttribute("id", farver_arrayList[index]["farve"])

        farveElementItem.innerHTML = farver_arrayList[index]["farve"]

       
        HtmlElementer.appendChild(farveElementItem)

       
        index++

    } 

}

