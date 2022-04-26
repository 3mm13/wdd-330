
function populateList() {
    document.querySelector("#list")

    const links = [
        {
            label: "Week 1: Notes",
            url: "week1/index.html"
        }
    ]

    for(let i = 0; i < links.length; i++){
        var li = document.createElement("li");
        li.setAttribute("a", i.url);
    }

}