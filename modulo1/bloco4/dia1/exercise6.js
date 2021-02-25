let pecaXadrez="peão";

switch (pecaXadrez) {
    case "peão":
        console.log ("vertical");
        break;

        case "torre":
            console.log ("vertical e horizontal");
            break;

            case "cavalo":
                console.log("em L");
                break;
                
                case "bispo":
                    console.log("diagonal");
                    break;

                    case "rainha":
                        console.log("qualquer direção");
                        break;

                        case "rei":
                            console.log("qualquer direção");
                            break;

                            default:
                                console.log("Peça inexistente");
}