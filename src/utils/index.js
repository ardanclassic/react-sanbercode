
export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const tryConvert = (satuan, jarak, convert) => {
    const input = parseFloat(jarak);
    if (Number.isNaN(input)) return '';
    const output = convert(satuan, input);
    return output.toString();
}

export const weightConvert = (weightScale, weight, convert) => {
    const input = parseFloat(weight);
    if (Number.isNaN(input)) return '';
    const output = convert(weightScale, input);
    return output.toString();
}

export const toFeet = (satuan, n) => {
    switch (satuan) {
        case 'm':
            return n * 3.281;
        case 'km':
            return n * 3281;
        case 'mile':
            return n * 5280;
        default:
            break;
    }
}

export const toMeter = (satuan, n) => {
    switch (satuan) {
        case 'feet':
            return n / 3.281;
        case 'km':
            return n * 1000;
        case 'mile':
            return n * 1609;
        default:
            break;
    }
}

export const toKilometer = (satuan, n) => {
    switch (satuan) {
        case 'feet':
            return n / 3281;
        case 'm':
            return n / 1000;
        case 'mile':
            return n * 1.609;
        default:
            break;
    }
}

export const toMil = (satuan, n) => {
    switch (satuan) {
        case 'feet':
            return n / 5280;
        case 'm':
            return n / 1609;
        case 'km':
            return n / 1.609;
        default:
            break;
    }
}





export const toGram = (satuan, n) => {
    switch (satuan) {
        case 'pound':
            return n * 454;
        case 'kg':
            return n * 1000;
        case 'ton':
            return n * 1000000;
        default:
            break;
    }
}

export const toKilogram = (satuan, n) => {
    switch (satuan) {
        case 'pound':
            return n / 2.205;
        case 'g':
            return n / 1000;
        case 'ton':
            return n * 1000;
        default:
            break;
    }
}

export const toPound = (satuan, n) => {
    switch (satuan) {
        case 'g':
            return n / 454;
        case 'kg':
            return n * 2.205;
        case 'ton':
            return n * 2205;
        default:
            break;
    }
}

export const toTon = (satuan, n) => {
    switch (satuan) {
        case 'pound':
            return n / 2205;
        case 'g':
            return n / 1000000;
        case 'kg':
            return n / 1000;
        default:
            break;
    }
}