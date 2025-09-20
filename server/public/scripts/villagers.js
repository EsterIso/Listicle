const renderVillagers = async() => {

        const response = await fetch('/villagers');
        const data = await response.json();
        console.log(data);


        const mainContent = document.getElementById('main-content');

        if (data) {
            data.map(villager => {
                const villagerCard = document.createElement('div');
                villagerCard.className = 'villager-card';
                villagerCard.textContent = '------ Passport ------'

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

                villagerCard.appendChild(content);

                mainContent.appendChild(villagerCard);
            })
        } else {

        }

}

renderVillagers();
