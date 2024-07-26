document.addEventListener('DOMContentLoaded', function() {
    const cardsData = [
    {
            id: 1,
            icon: 'fa-hand-holding-heart',
            title: 'Həyat Sığortası',
            description: 'Həyat Sığortası online almaq artıq sizin üçün çox rahatdır'
        },
        {
            id: 2,
            icon: 'fa-house-chimney',
            title: 'Daşınmaz əmlakın icbari sığortası',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quae?'
        },
        {
            id: 3,
            icon: 'fa-car',
            title: 'İcbari Nəqliyyat sığortası',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laborum'
        },
        {
            id: 4,
            icon: 'fa-map',
            title: 'Səyahət Sığortası',
            description: 'Səyahət Sığortası online almaq artıq sizin üçün çox rahatdır'
        },
        {
            id: 5,
            icon: 'fa-briefcase-medical',
            title: 'Könüllü Tibbi Sığorta',
            description: 'Könüllü Tibbi Sığorta haqqında məlumat'
        },
        {
            id: 6,
            icon: 'fa-car',
            title: 'KASKO Sığorta',
            description: 'KASKO Sığorta haqqında məlumat'
        },
        {
            id: 7,
            icon: 'fa-truck',
            title: 'Yük sığortası',
            description: 'Yük sığortası haqqında məlumat'
        },
        {
            id: 8,
            icon: 'fa-id-card',
            title: 'Yaşıl Kart Sistemi',
            description: 'Yaşıl Kart Sistemi haqqında məlumat'
        },
        {
            id: 9,
            icon: 'fa-home',
            title: 'Daşınmaz Əmlakın Könüllü Sığortası',
            description: 'Daşınmaz Əmlakın Könüllü Sığortası haqqında məlumat'
        }
    ];

    const cardsContainer = document.getElementById('cards-container');

    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'flip-card shadow-lg rounded-lg';
        cardElement.innerHTML = `
            <div class="flip-card-inner">
                        <div id="card-${card.id}" class="flip-card-front bg-[rgb(2,1,142)] dark:bg-gray-800 text-white dark:text-gray-100 p-6 flex flex-col items-center justify-center rounded-lg">
                            <i class="fa-solid ${card.icon} text-[3rem] mb-5"></i>
                            <p class="text-2xl font-bold">${card.title}</p>
                        </div>
                        <div class="flip-card-back bg-[rgb(2,1,142)] dark:bg-gray-800 text-white dark:text-gray-100 p-6 flex flex-col items-center justify-center rounded-lg">
                            <p class="text-2xl font-bold">${card.title}</p>
                            <p class="py-4">${card.description}</p>
                            <button class="mt-4 py-2 px-4 bg-[rgb(2,1,142)] dark:bg-gray-800 text-white dark:text-gray-100 border-2 border-white dark:border-gray-600 rounded">Daha ətraflı</button>
                        </div>
                    </div>
        `;
        cardsContainer.appendChild(cardElement);
    });

    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const inner = card.querySelector('.flip-card-inner');
            inner.style.transform = 'rotateY(180deg)';
        });
        card.addEventListener('mouseleave', () => {
            const inner = card.querySelector('.flip-card-inner');
            inner.style.transform = 'rotateY(0deg)';
        });
    });
});
