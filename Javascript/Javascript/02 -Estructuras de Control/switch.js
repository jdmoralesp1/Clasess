let v = "o", print='';

switch (v) {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
        print = `La letra ${v} es vocal`;
        break;
    default: print = `${v} No es vocal`;
}

console.log(print);