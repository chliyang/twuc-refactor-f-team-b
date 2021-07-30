class Movie {
    constructor(title) {
        this.title = title;
    }

    getCharge(daysRented) {
        return daysRented;
    }

    getFrequentRenterPoints(daysRented) {
        return daysRented;
    }

    getTitle() {
        return this.title;
    }
}

export default Movie;