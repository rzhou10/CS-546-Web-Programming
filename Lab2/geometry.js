const checkIsProperNumber = function checkIsProperNumber(val) {
    if (typeof val != 'number') {
      throw val + " is not a number";
    }
}

function volumeOfRectangularPrism(length, width, height){
    checkIsProperNumber(length);
    checkIsProperNumber(width);
    checkIsProperNumber(height);

    return length * width * height;
}

function surfaceAreaOfRectangularPrism(length, width, height){
    checkIsProperNumber(length);
    checkIsProperNumber(width);
    checkIsProperNumber(height);

    return (2 * (length * width)) + (2 * (length * height)) + (2 * (width * height));
}

function volumeOfSphere(radius){
    checkIsProperNumber(radius);
    return (4 / 3) * Math.PI * (radius * radius * radius);
}

function surfaceAreaOfSphere(radius){
    checkIsProperNumber(radius);
    return 4* Math.PI * (radius * radius);
}

module.exports = {
    description: "This calculates the surface area and volume of a rect. prism and sphere",
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
}