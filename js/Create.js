export function CreateDiv(name) {
    const div = document.createElement("div");
    div.classList.add(name);
    return div;
}
export function CreateH1(name,text) {
    const h1 = document.createElement("h1");
    h1.classList.add(name);
    h1.innerText = text;
    return h1;
}
export function CreateUl(name) {
    const ul = document.createElement("ul");
    ul.classList.add(name);
    return ul;
}
export function CreateLi(name,text) {
    const li = document.createElement("li");
    li.classList.add(name);
    li.innerText = text;
    return li;
}
export function CreateALink(name, text, href) {
    const a = document.createElement("a");
    a.classList.add(name);
    a.innerText = text;
    a.href = href;
    return a;
}