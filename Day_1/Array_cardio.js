


const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];



const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem',
                'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 
                'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 
                'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 
                'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken' ,'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 
                'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, A William'];


//1
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







//2
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




//3
//Array.prototype.sort()
//Sort inventors by birthdate, oldest to youngest

const ordered = inventors.sort(function(oldest,youngest){
    return oldest > youngest ? 1 : -1;
    //              or
    // if(oldest.year > youngest.year){
    //     return 1;
    // }else{
    //     return -1
    // }
})
console.table(ordered)


// OUTPUT-

// │ (index) │ first      │ last         │ year │ passed │
// ├─────────┼────────────┼──────────────┼──────┼────────┤
// │ 0       │ 'Nicolaus' │ 'Copernicus' │ 1473 │ 1543   │
// │ 1       │ 'Galileo'  │ 'Galilei'    │ 1564 │ 1642   │
// │ 2       │ 'Johannes' │ 'Kepler'     │ 1571 │ 1630   │
// │ 3       │ 'Isaac'    │ 'Newton'     │ 1643 │ 1727   │
// │ 4       │ 'Max'      │ 'Planck'     │ 1858 │ 1947   │
// │ 5       │ 'Marie'    │ 'Curie'      │ 1867 │ 1934   │
// │ 6       │ 'Albert'   │ 'Einstein'   │ 1879 │ 1955   │
// └─────────┴────────────┴──────────────┴──────┴────────┘





//4
//Array.prototype.reduce
//How many years did all the investors live?

const totalYears = inventors.reduce((total,inventor)=>{
    return total + (inventor.passed - inventor.year)
},0);
console.log(totalYears);

// OUTPUT:
// 523






//5
//Short invetors by years lived
const oldest = inventors.sort(function(a, b) {
    return a.passed - a.year > b.passed - b.year ? -1 : 1;
});
console.table(oldest);

//OUTPUT
// ┌─────────┬────────────┬──────────────┬──────┬────────┐
// │ (index) │ first      │ last         │ year │ passed │
// ├─────────┼────────────┼──────────────┼──────┼────────┤
// │ 0       │ 'Max'      │ 'Planck'     │ 1858 │ 1947   │
// │ 1       │ 'Isaac'    │ 'Newton'     │ 1643 │ 1727   │
// │ 2       │ 'Galileo'  │ 'Galilei'    │ 1564 │ 1642   │
// │ 3       │ 'Albert'   │ 'Einstein'   │ 1879 │ 1955   │
// │ 4       │ 'Nicolaus' │ 'Copernicus' │ 1473 │ 1543   │
// │ 5       │ 'Marie'    │ 'Curie'      │ 1867 │ 1934   │
// │ 6       │ 'Johannes' │ 'Kepler'     │ 1571 │ 1630   │
// └─────────┴────────────┴──────────────┴──────┴────────┘




//6
//Sort exercise
//sort the people alphabatecally by the last name


const alpha= people.sort((lastone,nextone) => {
    const[aLast,aFirst]=lastone.split(', ')
    const[bLast,bFirst]=nextone.split(', ')
    return aLast > bLast ? 1 : -1  
})
console.log(alpha)

//output
// //[
//     'Beck, Glenn',         'Becker, Carl',
//     'Beckett, Samuel',     'Beddoes, Mick',
//     'Beecher, Henry',      'Beethoven, Ludwig',
//     'Begin, Menachem',     'Belloc, Hilaire',
//     'Bellow, Saul',        'Ben-Gurion, David',
//     'Benchley, Robert',    'Benenson, Peter',
//     'Benjamin, Walter',    'Benn, Tony',
//     'Bennington, Chester', 'Benson, Leana',
//     'Bent, Silas',         'Bentsen, Lloyd',
//     'Berger, Ric',         'Bergman, Ingmar',
//     'Berio, Luciano',      'Berle, Milton',
//     'Berlin, Irving',      'Berne, Eric',
//     'Bernhard, Sandra',    'Berra, Yogi',
//     'Berry, Wendell',      'Berry, Halle',
//     'Bethea, Erin',        'Bevan, Aneurin',
//     'Bevel, Ken',          'Biden, Joseph',
//     'Bierce, Ambrose',     'Biko, Steve',
//     'Billings, Josh',      'Biondo, Frank',
//     'Birrell, Augustine',  'Black Elk',
//     'Blair, Tony',         'Blair, Robert',
//     'Blake, A William'
//   ]




//7
//reduce the exercise
//sum of the instance of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 
            'car', 'van', 'car', 'truck', 'pogostick'];
const transportation= data.reduce((obj,item)=>{
    if(!obj[item]) {
        obj[item]=0;
    }
    obj[item]++;
    return obj;
},{})
console.log(transportation)

//output
//{ car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1 } 


