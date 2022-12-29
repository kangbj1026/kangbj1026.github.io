import {articleDivFirst,articleFirst} from "../js/introduce.js";
import {articleDivSecond,articleSecond} from "../js/project.js";
const section = document.querySelector("section");
const article = document.createElement("article");
article.appendChild(articleDivFirst());
article.appendChild(articleDivSecond());
section.appendChild(article);

/* articleFirst */
articleFirst();

/* articleSecond */
articleSecond();