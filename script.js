let birthDate = prompt('What is your date of birth?');

let city = prompt('Where are you from?');
switch (city){
    case 'Kyiv':
        var country = 'Ukraine';
        break;
    case 'Washington':
        var country = 'USA';
        break;
    case 'London':
        var country = 'England';
        break;
    default:
        alert('I dont have your city in my list')
};

let sport = prompt('What is your favorite sport?');
switch (sport){
    case 'Esport':
        alert(`        So your birth date is ${birthDate}
        You live in ${city} and your country is ${country}
        Cool, so you wanna be like S1mple`);
        break;
    case 'Football':
        alert(`        So your birth date is ${birthDate}
        You live in ${city} and your country is ${country}
        Cool, so you wanna be like Federico Dimarco`);
        break;
    case 'Tennis':
        alert(`        So your birth date is ${birthDate}
        You live in ${city} and your country is ${country}
        Cool, so you wanna be like Holger Rune`);
        break;
    default:
        alert('I dont have your sport in my list');
};