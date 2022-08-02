const chart = document.getElementById('chart').getContext('2d');

    // Creating a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        
        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 33974, 49631, 59095, 57828, 36684],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 64000, 32698, 5000, 3000, 18656, 18656, 24832, 25345],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
}) 

    // Showing and Hidding Sidebar
const menuBtn = document.getElementById('menu_btn');
const closeBtn = document.getElementById('close_btn');
const sideBar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sideBar.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideBar.style.display = 'none';
});

    // Changing Themes
const themeBtn = document.querySelector('.theme_btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark_theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
});