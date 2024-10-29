fetch ("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
    .then( res => res.json())
    .then ( res => card(res))
        
    let featurdBook = document.querySelector(".featurd-book");
    let popularBook = document.querySelector(".popular-book");

    function card (res){
    for (let index = 42; index < res.length; index++) {
        

        featurdBook.innerHTML +=`
        
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div class="bh-bg-card-img border d-flex justify-content-center align-items-center mx-auto position-relative">
                <img src="${res[index].simple_thumb}" class="bh-card-img" alt="${res[index].title}">
                <button class="bh-button-cart w-100 bg-black text-white position-absolute bottom-0 border-0 py-3 d-none">ADD TO CART</button>
            </div>
            <div class="card-body mb-4">
                <p class="bh-title-card text-center pt-4 prata-font fs-4">${res[index].title}</p>
                <p class="bh-text-grey-color text-center p-0 m-0">${res[index].author}</p>
            </div>
        </div>
        `
    }

    for (let index = 0; index < 8; index++) {
        

        popularBook.innerHTML +=`
        
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div class="bh-bg-card-img border d-flex justify-content-center align-items-center mx-auto position-relative">
                <img src="${res[index].simple_thumb}" class="bh-card-img" alt="${res[index].title}">
                <button class="bh-button-cart w-100 bg-black text-white position-absolute bottom-0 border-0 py-3 d-none">ADD TO CART</button>
            </div>
            <div class="card-body mb-4">
                <p class="bh-title-card text-center pt-4 prata-font fs-4">${res[index].title}</p>
                <p class="bh-text-grey-color text-center p-0 m-0">${res[index].author}</p>
            </div>
        </div>
        `
    }








};

fetch ("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
    .then( best => best.json())
    .then( best => bestSelling (best))

    
    let bestSellingBookCover = document.querySelector(".best-selling-book-cover");
    let bestSellingBookText =  document.querySelector(".best-selling-book-text");

    function bestSelling(best){


        console.log(best)

        bestSellingBookCover.innerHTML += `
        <img src="${best.simple_thumb}" w-75" alt="Studnia I Wahadlo"/>
        `
        bestSellingBookText.innerHTML += `
        
        <h2 class="prata-font fw-bold  mt-5">Best Selling <span class="d-block">Book</span></h2>
        <div class="border bh-sell-line mb-5"></div>

        <p class= "bh-text-grey-color ">by ${best.authors[0].name}</p>

        <h3 class=" py-5 ">${best.title}</h3>

        ${best.fragment_data.html}

        <a href="#" class="container text-black d-flex align-items-center justify-content-start text-decoration-none p-0 pt-4 pb-5">
            <span class="fw-bold">View all products</span>
            <i class="fa-solid fa-arrow-right-long ms-2 "></i>
        </a>
        
        
        `
    }