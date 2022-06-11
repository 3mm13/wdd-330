
function populateList() {

    const links = [
        {
            label: "Week 1: Notes",
            url: "week1/index.html"
        },
        {
            label: "Week 2: Notes",
            url: "week2/index.html"
        },
        {
            label: "Week 3: Notes",
            url: "week3/index.html"
        },
        {
            label: "Week 4: Notes",
            url: "week4/index.html"
        },
        {
            label: "Week 5: Notes",
            url: "week5/index.html"
        },
        {
            label: "ToDo Application",
            url: "week6/index.html"
        },
        {
            label: "Week 7: Notes",
            url: "week7/index.html"
        },
        {
            label: "Week 8: Notes",
            url: "week8/index.html"
        }
    ]

    for(let i = 0; i < links.length; i++){
        var li = document.createElement("li");
        li.innerHTML = `<a href="${links[i]["url"]}">Week0${i+1}</a>`
        document.querySelector("#list").appendChild(li);
        
    }

}

