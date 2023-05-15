function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); //returns value from 0-2

    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2: 
            return "scissors";
            break;
        default:
            return "error picking choice"
            break;
    }
}