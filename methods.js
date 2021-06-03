// We hebben een array met e-mailaddressen van medewerkers in ons systeem.

const emailadresses = ['n.eeken@novi.nl', 'n.stuivenberg@novi.nl', 'm.vandergeest@novi-education.nl', 'a.wiersma@novi.nl'];

/* Opdracht 1 */
// 1a. Onze nieuwe medewerker Melissa moet worden toegevoegd aan de lijst met emailadressen. Haar email is: m.westerbroek@novi.nl.
console.log('-----------1a------------');
emailadresses.push('m.westerbroek@novi.nl');
console.log(emailadresses);

// 1b. Er zullen ongetwijfeld vaker emailadressen toegevoegd moeten worden. Binnen het bedrijf zijn er echter lijsten voor medewerkers,
// maar ook voor studenten. Schrijf een herbruikbare functie die een email-lijst en nieuw-emailadres verwacht en deze vervolgens toevoegt aan die lijst.
console.log('-----------1b------------');

function addEmails(obj) {
    if (typeof obj === 'object' && obj.length > 0) {
        obj.forEach(email => {
            emailadresses.push(email);
        });
    } else {
        emailadresses.push(obj);
    }
    console.log(emailadresses);
}

addEmails(['ra@ra.nl', 'a.a@a.nl']);
addEmails('balbalbal@blablabla.nl');

/* Opdracht 2 */
// 2a. Jouw collega wil weten of het emailadres van Nick Stuivenberg in de lijst staat. Zoek dit voor hem uit! Zijn emailadres is n.stuivenberg@novi.nl
console.log('-----------2a------------');
console.log(emailadresses.find(email => email === "n.stuivenberg@novi.nl"));
// 2b. Schrijf een herbruikbare functie die een email-lijst en achternaam verwacht. Wanneer er een emailadres met die achternaam voorkomt, wordt het emailadres teruggegeven.
// Als er niets wordt gevonden, returnt de functie null.
console.log('-----------2b------------');
/** LONG BAD WAY 
function findEmailBySurname(emails, surname) {
    for (let i = 0; i < emails.length; i++) {
        const element = emails[i];
        const locatedAtSign = emails[i].search('@');
        const foundSurname = emails[i].slice(2, locatedAtSign);
        if (surname === foundSurname) {
            return emails[i];
        }
    }
}
*/
function findEmailBySurname(emails, surname) {
    for (let i = 0; i < emails.length; i++) {
        if (emails[i].includes(surname)) {
            return emails[i];
        }
    }
}
console.log(findEmailBySurname(emailadresses, 'stuivenberg'));
/* Opdracht 3 */
// 3a. Collega's staan in de emaillijst op volgorde waarin ze bij Novi zjin komen werken. Nu blijkt echter dat een andere nieuwe collega, Tess,
// bij Novi is komen werken vóór Melissa. Haar e-mailadres (t.mellink@novi.nl) moet dus worden toegevoegd op de één na laatste plek.
// Let op: je weet niet hoe lang de lijst is!
console.log('-----------3a------------');
emailadresses.splice(emailadresses.length -1, 0, "t.mellink@novi.nl");
console.log(emailadresses);


// 3b. Bij de vorige vraag wisten we gelukkig waar Melissa stond in de lijst. Maar soms weten we dat niet! Schrijf een functie die emailadres Y bijvoegt in de lijst vóór emailadres Z.
console.log('-----------3b------------');
function addStringInArrayBeforeValue(emailadresses, beforeEmail, newEmail){
    const emailPos = emailadresses.indexOf(beforeEmail);
    emailadresses.splice(emailPos, 0, newEmail);

}
addStringInArrayBeforeValue(emailadresses, "t.mellink@novi.nl", "qwerty@qwerty.nl");

console.log(emailadresses);

/* Opdracht 4 */
// Er staat een foutje in de lijst. Het email adres van Mitchel moet worden aangepast naar m.vandergeest@novi.nl, maar je weet niet
// op welke plek in de lijst dit emailadres staat. Dit gebeurt helaas wel vaker. Schrijf een functie die drie parameters verwacht:
// een array met emailadressen, het oude emailadres dat vervangen moet worden, en het nieuwe emailadres.
// TIP: schrijf 'm eerst zoals je hem zou toepassen op bovenstaande array en schrijf die code dan om naar een functie
console.log('-----------4------------');
function updateEmailAdress(emailadresses, oldEmail, newEmail){
    const emailPos = emailadresses.indexOf(oldEmail);
    emailadresses[emailPos] = newEmail;

}
updateEmailAdress(emailadresses, "m.vandergeest@novi-education.nl", "m.vandergeest@novi.nl");

console.log(emailadresses);