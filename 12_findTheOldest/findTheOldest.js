const findTheOldest = function(people) {

let currentYear = (new Date).getFullYear();

for (const person of people) {
    if(person.yearOfDeath === undefined)
        person.yearOfDeath = currentYear;
}

const personwithMaxAge = people.reduce((maxAge,nextPersonAge) => {
    return ((maxAge.yearOfDeath - maxAge.yearOfBirth) > (nextPersonAge.yearOfDeath - nextPersonAge.yearOfBirth)
            ? maxAge
            : nextPersonAge);
    });

return personwithMaxAge;
}

// Do not edit below this line
module.exports = findTheOldest;
