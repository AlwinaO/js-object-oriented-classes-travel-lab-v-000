class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(year) {
        const startYear = this.startDate.getFullYear();
        return year - startYear;
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = { beginningLocation };
        this.endingLocation = { endingLocation };
    }

    blocksTravelled() {
        let eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
        ];
        if (eastWest < eastWest) {
            return this.endingLocation[endingLocation] - this.beginningLocation[beginningLocation];
        } else if (eastWest > eastWest) {
            return this.beginningLocation - this.endingLocation;
        } else {
            return this.beginningLocation + this.endingLocation;
        }
    }
}