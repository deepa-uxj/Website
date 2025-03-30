const css = {
    menu: "nav-menu",
    menuVisible: "menu-visible"
}

let els;
bind();


function bindElements () {
    return {
        menus: document.querySelector(`.${css.menu}`)
    }
    
}

function bindMenus () {
    console.log(els);
    els.menus.addEventListener("click", (event) => {
        
        const el = event.srcElement.nextElementSibling;
        // el.classList.add(css.menuVisible);
        // const menu = el.querySelector(".menu");
        if (el.classList.contains(css.menuVisible)) {
            el.classList.remove(css.menuVisible);
        } else {
            el.classList.add(css.menuVisible);
        }
    });

    // els.menus.addEventListener("mouseout", (event) => {
        
    //     const el = event.srcElement.nextElementSibling;
    //     // el.classList.remove(css.menuVisible);
    //     // const menu = el.querySelector(".menu");
    //     // console.log(el.classList);
    //     // if (el.classList.contains(css.menuVisible)) {
    //     //     el.classList.remove(css.menuVisible);
    //     // } else {
    //     //     el.classList.add(css.menuVisible);
    //     // }
    // });
}

function bind() {
    els = bindElements();
    bindMenus();
}