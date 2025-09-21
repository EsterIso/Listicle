const renderVillagers = async() => {

        const response = await fetch('/villagers');
        const data = await response.json();
        console.log(data);


        const mainContent = document.getElementById('main-content');

        if (data) {
            data.map(villager => {
                const villagerCard = document.createElement('div');
                villagerCard.className = 'villager-card';
                villagerCard.onclick = () => {
                    window.location.href = `/villagers/${villager.name}`;
                };
                
                const cardHeader = document.createElement('p');
                cardHeader.className = 'card-header';
                cardHeader.textContent = '------ Passport ------';

                const content = document.createElement('div')
                content.className = "card-content";

                const leftContainer = document.createElement('div')
                leftContainer.className = 'left-container';

                const rightContainer = document.createElement('div')
                rightContainer.className = 'right-container';

                const villagerImg = document.createElement('img');
                villagerImg.src = villager.photo;
                leftContainer.appendChild(villagerImg);

                const villagerName = document.createElement('p')
                villagerName.className = 'villager-name';
                villagerName.textContent = villager.name;
                rightContainer.appendChild(villagerName);

                const villagerGender = document.createElement('p');
                villagerGender.className = 'villager-gender';
                villagerGender.textContent = villager.gender;
                rightContainer.appendChild(villagerGender);

                const villagerBday = document.createElement('p');
                villagerBday.className = 'villager-bday';
                villagerBday.textContent = villager.birthday;
                rightContainer.appendChild(villagerBday);
                
                content.appendChild(leftContainer);
                content.appendChild(rightContainer);

                villagerCard.appendChild(cardHeader);
                villagerCard.appendChild(content);

                mainContent.appendChild(villagerCard);
            })
        } else {
            const h2 = document.createElement('h2');
            h2.textContent = 'No Villager Available 😞';
            giftContent.appendChild(h2);
        }

}

const renderVillager = async() => {
    const requestedName = decodeURIComponent(window.location.href.split('/').pop());
    console.log('request name: ' + requestedName);
    const res = await fetch('/villagers');

    if (!res.ok) {
        throw new Error(`Requested failed: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    const cardContent = document.getElementsByClassName('card-content')[0];

    let villager;

    if (data) {
        villager = data.find(villager => villager.name === requestedName);
        if (!villager) {
            window.location.href = '/404.html';
            return;
        }
    }
    console.log(villager);
    if(villager) {
        document.getElementById('image').src = villager.photo;
        document.getElementById('villager-name').textContent = villager.name;
        document.getElementById('villager-gender').textContent = villager.gender;
        document.getElementById('villager-species').textContent = villager.species;
        document.getElementById('villager-personality').textContent = villager.personality;
        document.getElementById('villager-catchphrase').textContent = villager.catchphrase;
        document.getElementById('villager-hobby').textContent = villager.hobby;
        document.getElementById('villager-bday').textContent = villager.birthday;    
        document.title = `Villager - ${villager.name}`;    
    } else {
        const h2 = document.createElement('h2');
        h2.textContent = 'No Villager Available 😞';
        // cardContent.appendChild(h2);
    }
}

const requestedUrl = window.location.pathname.split('/').filter(Boolean).pop();

if (!requestedUrl || requestedUrl === 'villagers') {
    renderVillagers();
} else {
    renderVillager();
}


