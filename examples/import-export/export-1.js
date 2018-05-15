export class Conference {
    constructor(name, attendees, cost, contentRating) {
        this.name = name;
        this.attendees = attendees;
        this.cost = cost;
        this.contentRating = contentRating;
    }

    value() {
        return this.contentRating / this.cost;
    }
}
