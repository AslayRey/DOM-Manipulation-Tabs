// Get <ul> with list of tab links
const tabsList = document.querySelector('.tabs_list');


// Add click listener to whole link list
tabsList.addEventListener('click', event => {
    // Event delegation
    if(event.target.matches('.tabs_item a')) {
        event.preventDefault();
        // Get clicked tab list item
        const tabsItem = event.target.parentNode; //seleziono genitore
        // Get corresponding panel's ID via hash
        const targetId = event.target.hash.slice(1);
        // Get correct panel by ID
        const targetPanel = document.getElementById(targetId);


        //TABS
        // Activate correct tabs menu item
        const allTabsItem = document.querySelectorAll('.tabs_item');
        
        // Remove active class from all items
        allTabsItem.forEach(item => {
            item.classList.remove('is-active');
        });
        // Add active class to clicked item
        tabsItem.classList.add('is-active');


        //PANEL
        // Activate correct tabs panels
        const allActivePanels = document.querySelectorAll('.tabs_panel');
        
        // Remove active class from all panels
        allActivePanels.forEach(panel => {
            panel.classList.remove('is-active');
        });
        // Add active class to correct panel
        targetPanel.classList.add('is-active');
    }
});

/* How NOT to do it:
const tabsItems = document.querySelectorAll('.tabs_item a');

tabsItems.forEach(el => {
    el.addEventListener('click', event => {
        event.preventDefault();
        console.log('Click!', event.target);
    })
});

tabsList.innerHTML += '<li class="tabs_item"><a href="#logout"></a></li>';*/



// ACCORDION
const accordion = document.querySelector('.accordion');
accordion.addEventListener('click', event => {
    if(event.target.matches('.accordion_header a, .accordion_header a img')) {
        event.preventDefault();
        console.dir(event.target);
        const targetHeader = event.target.tagName.toLowerCase() == 'a' ? event.target.parentNode :  event.target.parentNode.parentNode; //event.target.tagName nome del genitore
        
        const targetPanel = targetHeader.nextElementSibling; //nextElementSibling prende rispetto a nodo html il prossimo figlio del suo contenitore

        //PANELS
        const allPanels = document.querySelectorAll('.accordion_panel');
        /*allPanels.forEach(panel => {
            panel.classList.remove('is-active');
        });

        targetPanel.classList.add('is-active');*/
        targetPanel.classList.toggle('is-active');


        // HEADERS
        const allHeaders = document.querySelectorAll('.accordion_header');
        /*allHeaders.forEach(header => {
            header.classList.remove('is-active');
        });

        targetHeader.classList.add('is-active');*/
        targetHeader.classList.toggle('is-active');
    }
});


const button = document.querySelector('button');
button.addEventListener('click', event => {
    document.querySelector('html').classList.add('is-loading', 'prevent-scroll');
});

function activateLoader() {
    document.querySelector('html').classList.add('is-loading','prevent-scroll');
}

function deactivateLoader() {
    document.querySelector('html').classList.remove('is-loading','prevent-scroll');
}

//activateLoader();

setTimeout(() => {
    deactivateLoader();
}, 1000);


// MODAL

const modal = document.querySelector('.modal');
const html = document.querySelector('html');
// Open Modal
function openModal() {
    const modalBox = modal.querySelector('.modal_box');
    modalBox.classList.remove('is-leaving');
    modal.classList.add('is-active');
    html.classList.add('prevent-scroll');
}


// Close Modal
function closeModal() {
    const modalBox = modal.querySelector('.modal_box');
    modalBox.classList.add('is-leaving');
    setTimeout(() => {
        modal.classList.remove('is-active');
        html.classList.remove('prevent-scroll');
        modalBox.classList.remove('is-leaving');
    }, 350)   
}

document.addEventListener('keydown', event => {
    if(event.key === "Escape") {
        closeModal();
        deactivateLoader();
    }
});


modal.addEventListener('click', closeModal);

modal.querySelector('.modal_box').addEventListener('click', event => {
    event.stopPropagation();
});