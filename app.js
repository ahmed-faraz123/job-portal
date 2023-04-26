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
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png",
            timeago: "2 days ago",
            fptime: "Full Time",
            applicants: "500 Applicants",
            salary: "$500k",
        },
        {
            companyName: "YouTube",
            jobTitle: "Data Engineer",
            location: "Pune",
            image: "https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/social-media/youtube-logo.png",
            timeago: "4 days ago",
            fptime: "Part Time",
            applicants: "500 Applicants",
            salary: "$350k",
        },
        {
            companyName: "Twitter",
            jobTitle: "CEO",
            location: "New York",
            image: "https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg",
            timeago: "3 days ago",
            fptime: "Part Time",
            applicants: "500 Applicants",
            salary: "$400k",
        },
        {
            companyName: "Facebook",
            jobTitle: "Product Manager",
            location: "California",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",
            timeago: "9 days ago",
            fptime: "Full Time",
            applicants: "500 Applicants",
            salary: "$150k",
        },
        {
            companyName: "Amazon",
            jobTitle: "Manager",
            location: "Las Vegas",
            image: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
            timeago: "7 days ago",
            fptime: "Full Time",
            applicants: "500 Applicants",
            salary: "$50k",
        },
        {
            companyName: "Netflix",
            jobTitle: "Tech Lead",
            location: "Canada",
            image: "https://www.underconsideration.com/brandnew/archives/netflix_app_icon.jpg",
            fptime: "Part Time",
            applicants: "500 Applicants",
            salary: "$500k",
        },
        {
            companyName: "Zepto",
            jobTitle: "Associate Consultant",
            location: "China",
            image: "https://static.toiimg.com/thumb/msid-87464967,width-400,resizemode-4/87464967.jpg",
            timeago: "6 days ago",
            fptime: "Full Time",
            applicants: "500 Applicants",
            salary: "$800k",
        },
    ],
};


for (let i of products.data) {
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.classList.add("hide");
    const to_add = i.fptime.replace(/ /g,'');
    wrapper.classList.add(to_add);

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
    cardd.classList.add("card-detail", "job-title");
    cardCenter.appendChild(cardd);

    let cardloc = document.createElement("p");
    cardloc.innerText = i.location;
    cardloc.classList.add("card-loc", "location");
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




//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".wrapper");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value.replace(/ /g,''))) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".job-title");
    let cards = document.querySelectorAll(".wrapper");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});


document.getElementById("search-2").addEventListener("click", () => {
    //initializations
    let searchInput2 = document.getElementById("search-input-2").value;
    let elements2 = document.querySelectorAll(".location");
    let cards2 = document.querySelectorAll(".wrapper");

    //loop through all elements
    elements2.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.toUpperCase().includes(searchInput2.toUpperCase())) {
            //display matching card
            cards2[index].classList.remove("hide");
        } else {
            //hide others
            cards2[index].classList.add("hide");
        }
    });
});
//Initially display all products
window.onload = () => {
    filterProduct("all");
};

function getCountry() {
    var state = document.getElementById("state-input").value;
    $.ajax({
        url: "https://api.countrystatecity.in/v1/states/" + state,
        headers: {
            "X-CSCAPI-KEY": "YOUR_API_KEY_HERE"
        },
        success: function(response) {
            var country = response.country;
            document.getElementById("country").innerHTML = "Country: " + country;
        },
        error: function(xhr) {
            document.getElementById("country").innerHTML = "Error: " + xhr.responseText;
        }
    });
}
