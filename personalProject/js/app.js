

class Player {
    constructor() {
        this.name;
        this.class;
        this.attack;
        this.magic;
        this.defense;
        this.maxHealth;
        this.health;
        this.currentLevel;
    }
}


const playerInfo = new Player();

console.log(playerInfo);

function inputName()
{
    let nameInput = document.getElementById("playerName").value;

    playerInfo.name = nameInput;
    console.log(playerInfo);
}

function chooseClass(classPick)
{
    if(classPick === "fighter")
    {
        playerInfo.class = "Fighter";
        playerInfo.attack = 15;
        playerInfo.magic = 0;
        playerInfo.defense = 15;
        playerInfo.maxHealth = 100;
        playerInfo.health = playerInfo.maxHealth;
        playerInfo.currentLevel = 1;
    }
    else if(classPick === "cleric")
    {
        playerInfo.class = "Cleric";
        playerInfo.attack = 10;
        playerInfo.magic = 10;
        playerInfo.defense = 10;
        playerInfo.maxHealth = 90;
        playerInfo.health = playerInfo.maxHealth;
        playerInfo.currentLevel = 1;
    }
    else if(classPick === "wizard")
    {
        playerInfo.class = "Wizard";
        playerInfo.attack = 5;
        playerInfo.magic = 10;
        playerInfo.defense = 5;
        playerInfo.maxHealth = 60;
        playerInfo.health = playerInfo.maxHealth;
        playerInfo.currentLevel = 1;
    }

    console.log(playerInfo);
}