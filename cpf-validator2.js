function cpfValidator(cpf) {
    const cleanCpf = Array.from(cpf.replace(/\D+/g, ''));
    const checkedCpf = [...cleanCpf];
    let digit = 0;
    checkedCpf.splice(-2, 2);

    for(let c = 10; c <= 11; c++) {
        digit = 11 - ((checkedCpf.map((value, indice) => Number(value) * (c -indice)).reduce((x, val) => x += val, 0)) % 11);
        digit > 9 ? digit = 0 : digit;
        checkedCpf.push(digit);
    }

    if(checkedCpf.join('') === cleanCpf.join('')) {return 'Cpf válido'} else {return 'Cpf inválido'}; 

}
