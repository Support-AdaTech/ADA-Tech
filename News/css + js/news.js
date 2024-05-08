const apiKey = "pub_35495bbdd8da1f238b076e657ecf02be6b354";
const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=fr&category=technology`;
const localJsonUrl = "./json/news.json";

// Fetch data from the API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    if (data.status === "success") {
      renderNewsFromJson(data.results);
    } else {
      console.error("Error fetching data from the API");
      fetch(localJsonUrl)
        .then((response) => response.json())
        .then((localData) => {
          renderNewsFromLocal(localData);
        })
        .catch((localError) => {
          console.error("Error fetching local data:", localError);
        });
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    fetch(localJsonUrl)
      .then((response) => response.json())
      .then((localData) => {
        renderNewsFromLocal(localData);
      })
      .catch((localError) => {
        console.error("Error fetching local data:", localError);
      });
  });

function renderNewsFromJson(articles) {
  const newsContainer = document.getElementById("newsContainer");
  newsContainer.innerHTML = "";
  const categoryTags = ["populaire", "tech", "internet"];

  articles.forEach((article) => {
    const articleDiv = document.createElement("div");
    const keywords = article.keywords || [];
    const randomCategoryTag =
      keywords.length > 0
        ? keywords[Math.floor(Math.random() * keywords.length)].toLowerCase()
        : categoryTags[Math.floor(Math.random() * categoryTags.length)];

    function getRandomCategoryClass() {
      const randomIndex = Math.floor(Math.random() * categoryTags.length);
      return categoryTags[randomIndex];
    }

    articleDiv.className = "card";

    articleDiv.innerHTML = `
      <a href="${article.link}" target="_blank">
        <div class="card-banner">
          <p class="category-tag ${getRandomCategoryClass()}">${randomCategoryTag}</p>
          <img class="banner-img" src="${
            article.image_url
              ? article.image_url
              : `https://source.unsplash.com/random/?technology${getRandomQueryParameter()}`
          }" alt="">
        </div>
        <div class="card-body">
          <h2 class="blog-title">${article.title}</h2>
          <p class="description">${article.description}</p>
          <div class="card-profile">
            <img class="profile-img" src="${
              article.image_url
                ? article.image_url
                : `https://source.unsplash.com/random/?profile${getRandomQueryParameter()}`
            }" alt="">
            <div class="card-profile-info">
              <h3 class="profile-name">${article.source_id}</h3>
              <p class="date">${article.pubDate}</p>
            </div>
          </div>
        </div>
      </a>
    `;

    newsContainer.appendChild(articleDiv);
  });
}

function renderNewsFromLocal(data) {
  const newsContainer = document.getElementById("newsContainer");
  newsContainer.innerHTML = "";
  data.forEach((item) => {
    const cardHTML = `
      <a href="${item.link}" target="_blank">
        <div class="card">
          <div class="card-banner">
            <p class="category-tag ${item.category.toLowerCase()}">${
      item.category
    }</p>
            <img class="banner-img" src="${item.bannerImageUrl}" alt="">
          </div>
          <div class="card-body">
            <p class="blog-hashtag">${item.hashtags.join(" ")}</p>
            <h2 class="blog-title">${item.title}</h2>
            <p class="blog-description">${item.description}</p>
  
            <div class="card-profile">
              <img class="profile-img" src="${item.profileImageUrl}" alt="">
              <div class="card-profile-info">
                <h3 class="profile-name">${item.profileName}</h3>
                <p class="date">${item.date}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    `;
    newsContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function getRandomQueryParameter() {
  return `&random=${Math.random().toString(36).substring(7)}`;
}
