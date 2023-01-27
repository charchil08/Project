"use strict"
const menuItems = [
    {
        src: "/images/dashboard-active.svg",
        alt: "",
        text: "Dashboard",
        className: "img_dashboard"
    },
    {
        src: "./images/graph-default.svg",
        alt: "",
        text: "Analysis",
        className: "img_analysis"
    },
    {
        src: "./images/inbox-default.svg",
        alt: "",
        text: "Inbox",
        className: "img_inbox"
    },
    {
        src: "./images/clock-default.svg",
        alt: "",
        text: "Histroy",
        className: "img_histroy"
    },
    {
        src: "./images/user-default.svg",
        alt: "",
        text: "Users",
        className: "img_histroy"
    },
    {
        src: "./images/maintenance-default.svg",
        alt: "",
        text: "Maintenance",
        className: "img_maintenance"
    },
    {
        src: "./images/setting-default.svg",
        alt: "",
        text: "Setting",
        className: "img_setting"
    }
]

const sidebar = document.querySelector('.sidebar');
console.log(sidebar);

for (let i = 0; i < menuItems.length; i++) {
    let div = document.createElement('div');
    div.innerHTML = `<img class=${menuItems[i].className} src=${menuItems[i].src} alt=${menuItems[i].alt} /> <p>${menuItems[i].text}</p>`;
    div.classList.add('sidebar_item', `sidebar_item_${i + 1}`)
    sidebar.append(div);
    console.log(div);
}