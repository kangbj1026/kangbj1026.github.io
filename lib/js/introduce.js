import {articleDivFirst,articleFirst} from "../js/articleDivFirst.js";
import {articleDivSecond,articleSecond} from "../js/articleDivSecond.js";
import {appEndChild} from "./function.js";

export function articleDiv() {
    const article = document.createElement("article");
    const articleChildren = [[articleDivFirst()],[articleDivSecond()]];
    appEndChild(article,articleChildren,2);
    return article;
}
export function sequence() {
    return articleFirst(),articleSecond();
}