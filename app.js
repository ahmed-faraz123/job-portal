/*

$(".card"). on("click", function() {
    $(".detail").addClass("active");
});

$(".close-detail").on("click", function() {
    $(".detial").removeClass("active");
});

$(".menu-bar").on("click", function() {
    $(".sidebar").addClass("active");
})

$(".logo").on("click", function() {
    $(".sidebar").addClass("active");
})

*/


// Starts

let products = {
    data: [
        {
            companyName: "Google",
            jobTitle: "Data Science",
            location: "New Delhi",
            image: "white-tshirt.jpg",
            timeago: "2 days ago",
            fptime: "Full Time",
            applicants: "500 Applicants",
            salary: "$500k/year",
        },
        {
            companyName: "YouTube",
            jobTitle: "Data Engineer",
            location: "Pune",
            image: "white-tshirt.jpg",
            timeago: "4 days ago",
            fptime: "Part Time",
            applicants: "500 Applicants",
            salary: "$350k/year",
        },
        {
            companyName: "Twitter",
            jobTitle: "CEO",
            location: "New York",
            image: "white-tshirt.jpg",
            timeago: "3 days ago",
            fptime: "Part Time",
            applicants: "500 Applicants",
            salary: "$400k/year",
        },
        {
            companyName: "Facebook",
            jobTitle: "Product Manager",
            location: "California",
            image: "white-tshirt.jpg",
            timeago: "9 days ago",
            fptime: "Full Time",
            applicants: "500 Applicants",
            salary: "$150k/year",
        },
        {
            companyName: "Amazon",
            jobTitle: "Manager",
            location: "Las Vegas",
            image: "white-tshirt.jpg",
            timeago: "7 days ago",
            fptime: "Full Time",
            applicants: "500 Applicants",
            salary: "$50k/year",
        },
        {
            companyName: "Netflix",
            jobTitle: "Tech Lead",
            location: "Canada",
            image: "white-tshirt.jpg",
            timeago: "4 days ago",
            fptime: "Part Time",
            applicants: "500 Applicants",
            salary: "$500k/year",
        },
        {
            companyName: "Zepto",
            jobTitle: "Associate Consultant",
            location: "China",
            image: "white-tshirt.jpg",
            timeago: "6 days ago",
            fptime: "Full Time",
            applicants: "500 Applicants",
            salary: "$800k/year",
        },
    ],
};


for (let i of products.data) {
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper", "hide", i.jobTitle);

    let card = document.createElement("div");
    card.classList.add("card");
    wrapper.appendChild(card);

    let cardl = document.createElement("div");
    cardl.classList.add("card-left");
    card.appendChild(cardl);

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    cardl.appendChild(image);

    let cardCenter = document.createElement("div");
    cardCenter.classList.add("card-center");
    card.appendChild(cardCenter);

    let name = document.createElement("h3");
    name.innerText = i.companyName;
    cardCenter.appendChild(name);

    let cardd = document.createElement("p");
    cardd.innerText = i.jobTitle;
    cardd.classList.add("card-detail");
    cardCenter.appendChild(cardd);

    let cardloc = document.createElement("p");
    cardloc.innerText = i.location;
    cardloc.classList.add("card-loc");
    cardCenter.appendChild(cardloc);

    let cardsub = document.createElement("div");
    cardsub.classList.add("card-sub");
    cardCenter.appendChild(cardsub);

    let ptime = document.createElement("p");
    ptime.innerText = i.timeago;
    cardsub.appendChild(ptime);

    let fpTime = document.createElement("p");
    fpTime.innerText = i.fptime;
    cardsub.appendChild(fpTime);

    let applicants = document.createElement("p");
    applicants.innerText = i.applicants;
    cardsub.appendChild(applicants);

    let cardright = document.createElement("div");
    cardright.classList.add("card-right");
    card.appendChild(cardright);

    let cardtag = document.createElement("div");
    cardtag.classList.add("card-tag");
    cardright.appendChild(cardtag);

    let division = document.createElement("h5");
    division.innerText = "Verified ✅";
    cardtag.appendChild(division);

    let cardsal = document.createElement("div");
    cardsal.classList.add("card-salary");
    cardright.appendChild(cardsal);

    let sal = document.createElement("p");
    sal.innerText = i.salary;
    cardsal.appendChild(sal);




    document.getElementById("products").appendChild(wrapper);

}

