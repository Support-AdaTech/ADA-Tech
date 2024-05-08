document.addEventListener("DOMContentLoaded", function () {
  const iconLinks = {
    Processor: "https://img.icons8.com/tiny-color/16/processor.png",
    Fan: "https://img.icons8.com/tiny-color/16/fan.png",
    Motherboard: "https://img.icons8.com/tiny-color/16/motherboard.png",
    RAM: "https://img.icons8.com/tiny-color/16/memory-slot.png",
    SSD: "https://img.icons8.com/tiny-color/16/ssd.png",
    "Video Card": "https://img.icons8.com/tiny-color/16/video-card.png",
    Case: "https://img.icons8.com/tiny-color/16/server.png",
    PSU: "https://img.icons8.com/tiny-color/16/hdd.png",
    Paste: "https://img.icons8.com/tiny-color/16/cream-tube.png",
    Monitor: "https://img.icons8.com/tiny-color/16/monitor.png",
    Keyboard: "https://img.icons8.com/tiny-color/16/keyboard.png",
    Mouse: "https://img.icons8.com/tiny-color/16/mouse.png",
  };

  const grid = document.querySelector(".grid.g_three.config");

  fetch("./json/configs-pc.json")
    .then((response) => response.json())
    .then((jsonData) => {
      jsonData.forEach((config) => {
        const post = document.createElement("div");
        post.className = "post";

        const h3 = document.createElement("h3");
        h3.textContent = config.name;

        const date = document.createElement("div");
        date.className = "date";
        date.textContent = config.date;

        const p = document.createElement("p");
        p.textContent = config.description;

        const ul = document.createElement("ul");
        config.parts.forEach((part) => {
          const li = document.createElement("li");

          const img = document.createElement("img");
          img.className = "pc-icon";
          img.src = iconLinks[part.type] || "";
          img.alt = part.name;

          const a = document.createElement("a");
          a.target = "_blank";
          a.href = part.link;
          a.textContent = part.name;

          const icon = document.createElement("i");
          icon.className = "fa-solid fa-arrow-up-right-from-square fa-2xs";

          a.appendChild(icon);
          li.appendChild(img);
          li.appendChild(a);
          ul.appendChild(li);
        });

        const tags = document.createElement("div");
        tags.className = "tags";
        config.tags.forEach((tag) => {
          const a = document.createElement("a");
          a.href = "#";
          a.textContent = tag;
          tags.appendChild(a);
        });

        // Set the custom CSS property to control the ::before pseudo-element
        tags.style.setProperty("--tags-before-display", "block");

        const cart = document.createElement("a");
        cart.href = config.panier;
        cart.target = "_blank";
        cart.textContent = "Acheter";
        cart.className = "panier-button";

        post.appendChild(h3);
        post.appendChild(date);
        post.appendChild(p);
        post.appendChild(ul);
        post.appendChild(tags);
        post.appendChild(cart);

        grid.appendChild(post);
      });
    });
});
