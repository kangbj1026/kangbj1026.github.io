import {articleDiv,sequence} from "../js/introduce.js";
const section = document.querySelector("section");
const article = document.createElement("article");
article.appendChild(articleDiv());
section.appendChild(article);

sequence();