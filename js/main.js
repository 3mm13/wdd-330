
function populateList() {

    const links = [
        {
            label: "Week 1: Notes",
            url: "week1/index.html"
        }
    ]

    for(let i = 0; i < links.length; i++){
        var li = document.createElement("li");
        li.setAttribute("a", i.url);
        li.innerText = `Week${i + 1}`;
        document.querySelector("#list").appendChild(li);
        
    }

}

const links = [
    {
        label: "Week 1: Notes",
        url: "week1/index.html"
    }
]

for(let i = 0; i < links.length; i++){
    var li = document.createElement("li");
    li.innerHTML = `<a href="${links[i]["url"]}">Week0${i+1}</a>`
    document.querySelector("#list").appendChild(li);
    
}