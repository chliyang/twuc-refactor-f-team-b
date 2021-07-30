import Movie from "./Movie";

class ChildrenMovie extends Movie{
    constructor(title) {
        super(title);
    }

    getCharge(daysRented) {
        let result = 1.5;
        if(daysRented > 3) {
            result += (daysRented - 3) * 1.5;
        }

        return result;
    }

    getFrequentRenterPoints(daysRented) {
        return 1;
    }
}

export default ChildrenMovie;
