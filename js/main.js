
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
        },
        {
            label: "Week 9: Notes",
            url: "week9/index.html"
        },
        {
            label: "Week 11: Notes",
            url: "week11/index.html"
        },
        {
            label: "Final Project",
            url: "finalProject/index.html"
        }
    ]

    for(let i = 0; i < links.length; i++){
        var li = document.createElement("li");
        if(i == (links.length -1)) {
            li.innerHTML = `<a href="${links[i]["url"]}">Finale Project</a>`
        }
        else {
            li.innerHTML = `<a href="${links[i]["url"]}">Week ${i+1}</a>`
        }
        
        document.querySelector("#list").appendChild(li);
        
    }

}

