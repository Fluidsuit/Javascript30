const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];




const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', ' Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem',
                'Belloc, Hilaire', ' Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', ' Benjamin, Walter', 
                'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 
                'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 
                'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken' ,'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 
                'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, A William'];



//Array.prototype.filter()
//Filter the list of investor fot those who where born in 1500's



// const fifteen = inventors.filter(function(investor){
//     if(investor.year >= 1500 && investor.year <= 1600)
//         {
//             return true; // keep it
//         }
// });
// console.table(fifteen)

//                  OR

const fifteen = inventors.filter(investor => (investor.year >= 1500 && investor.year <= 1600))
console.table(fifteen)



// OUTPUT
// ┌─────────┬────────────┬───────────┬──────┬────────┐
// │ (index) │ first      │ last      │ year │ passed │
// ├─────────┼────────────┼───────────┼──────┼────────┤
// │ 0       │ 'Galileo'  │ 'Galilei' │ 1564 │ 1642   │
// │ 1       │ 'Johannes' │ 'Kepler'  │ 1571 │ 1630   │
// └─────────┴────────────┴───────────┴──────┴────────┘








// Array.prototype.map()
// Gives an array of inventory first and last name

const fullNames= inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// OUTPUT:=
// [
//     'Albert Einstein',
//     'Isaac Newton',
//     'Galileo Galilei',
//     'Marie Curie',
//     'Johannes Kepler',
//     'Nicolaus Copernicus',
//     'Max Planck'
//   ]





