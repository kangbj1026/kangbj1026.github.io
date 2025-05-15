import {CreateTag} from "./create.js";
let footer = document.getElementById("ft");
const today = new Date();
const year = today.getFullYear();
const month = ('0' + (today.getMonth()+1)).slice(-2);
const day = ('0' + (today.getDate())).slice(-2);
const date = year + "-" + month + "-" + day;

let footerContents = CreateTag('footer_p','p');
footerContents.innerHTML = "© " + year + " KBunny Portfolio Server. All rights reserved.";
footer.appendChild(footerContents);