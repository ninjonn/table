/**
 * 
 * @param {'th'|'td'} element 
 * @param {string} inner 
 * @param {HTMLElement} parent
 * @returns {HTMLTableCellElement} létrehozott html element a függvény első paramétere az element alapján
 */

function Createtablecell(element,inner,parent){
    const elem = document.createElement(element)
     elem.innerHTML = inner
     parent.appendChild(elem)
     return elem
 }

 function Createhtmlelement(tag,id,parent){
    const htmlelement = document.createElement(tag)
    htmlelement.id = id
    parent.appendChild(htmlelement) 
 }

 function Createhtmlid(tag,id,parentid){
    const parentelementid = document.getElementById(parentid)
    if(parentsid != undefined)
    {
        Createhtmlelement(tag,id,parentelementid)
    }
 }

