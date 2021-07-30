import Movie from "./Movie";

class RegularMovie extends Movie {
    constructor(props) {
        super(props);
    }

    getCharge(daysRented) {
        let result = 2;
        if (daysRented > 2) {
            result += (daysRented - 2) * 1.5;
        }

        return result;
    }

    getFrequentRenterPoints(daysRented) {
        return 1;
    }
}

export default RegularMovie;
