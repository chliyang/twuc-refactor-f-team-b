import Movie from "./Movie";

class NewReleaseMovie extends Movie {
    constructor(title) {
        super(title);
    }

    getCharge(daysRented) {
        return daysRented * 3;
    }

    getFrequentRenterPoints(daysRented) {
        return daysRented > 1 ? 2 : 1;
    }
}

export default NewReleaseMovie;
