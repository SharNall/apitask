async function getPosts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const phones = data.products;

    let result = '';

    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        
        result += `
            <div class="post">
                <h2>${phone.title}</h2>
                <img src="${phone.thumbnail}" alt="${phone.title}"></img>
            </div>
        `;
    }

    document.querySelector("div").innerHTML = result;
}

getPosts(); 
