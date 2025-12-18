import {compose} from "redux";

const makeLouder = string => string.toUpperCase();
const repeatThreeTimes = string => string.repeat(3);
const embolden = string => string.bold();

// we can do this but compose siginificantly simplifies things
const makeLouderRepeatThreeTimesEmbolden = string => embolden(repeatThreeTimes(makeLouder(string)));

const simple = compose(embolden,makeLouder,repeatThreeTimes);
console.log(makeLouderRepeatThreeTimesEmbolden("hello"));

console.log(simple("hello"));