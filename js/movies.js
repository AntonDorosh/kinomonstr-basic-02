const tabs_titles = document.querySelectorAll('.tabs-titles>li');
const tabs = document.querySelectorAll('.tabs>div');
let active_tab = 0;

const resetTabs = () => {
    tabs_titles.forEach((tab_t, index) => {
        tabs[index].style.display = 'none';
        tab_t.removeAttribute('class');
    });
};

resetTabs();
tabs[active_tab].style.display = 'block';
tabs_titles[active_tab].className = 'active';


tabs_titles.forEach((tab_t, index) => {
    tab_t.addEventListener('click', () => {
        active_tab = index;
        resetTabs();
        tabs[index].style.display = 'block';
        tab_t.className = 'active';
    });
});