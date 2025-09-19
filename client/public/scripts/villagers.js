const renderVillagers = async() => {

    try {
        const res = await fetch('/villagers');
        const data = await res.json();

        const mainContent = document.getElementById('main-content');
    }  catch(error) {

    }
}


