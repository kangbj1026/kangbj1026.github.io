import {articleDivFirst,articleFirst} from "../js/articleDivFirst.js";
import {articleDivSecond,articleSecond} from "../js/articleDivSecond.js";
import {appEndChild} from "./function.js";

export function articleDiv() {
    const article = document.createElement("article");
    const articleChildren = [[articleDivFirst()]];
    appEndChild(article,articleChildren,1);
    return article;
}
export function sequence() {
    return articleFirst();
}