class Customer {
    HEADER_LINE = 'Rental Record for ';
    TOTAL_CHARGE_LINE = 'Amount owed is ';
    NEW_LINE = '\n';
    TAB = '\t';

    constructor(name) {
        this.name = name;
        this.rentals = [];
    }

    statement() {
        let result = `${this.HEADER_LINE}${this.name}${this.NEW_LINE}`;
        this.rentals.forEach((rental) => {
            result += `${this.TAB}${rental.getMovie().getTitle()}${this.TAB}${rental.getCharge()}${this.NEW_LINE}`
        });
        result += `${this.TOTAL_CHARGE_LINE}${this.getTotalCharge()}${this.NEW_LINE}`;
        result += `You earned ${this.#getTotalFrequentRenterPoints()} frequent renter points`;

        return result;
    }

    addRental(rental) {
        this.rentals.push(rental);
    }

    getTotalCharge() {
        return this.rentals.reduce((sum, rental) => sum + rental.getCharge(), 0);
    }

    #getTotalFrequentRenterPoints() {
        return this.rentals.reduce((sum, rental) => sum + rental.getFrequentRenterPoints(), 0);
    }
}

export default Customer;
