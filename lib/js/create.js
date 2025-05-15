export function CreateTag(name,tagType,text,href,src) {
    const tag = document.createElement(tagType);
    if (name) tag.classList.add(name);
    if (text) tag.innerText = text;
    if (href) tag.href = href;
    if (src) tag.src = src;
    return tag;
}
export function CreateI(name1,name2) {
    const i = document.createElement("i");
    i.classList.add(name1,name2);
    return i;
}