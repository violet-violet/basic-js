function createDreamTeam(members) { 
  if (Array.isArray(members) === false) {
    return false;
  } else {
    let result = members.reduce((acc, current) => {
      if ((typeof current) === 'string') {
        
        let i = 0;
        while (current[i] === ' ') {
          i++
        }

        acc.push(current[i].toUpperCase());
        return acc;        
      } else {
        return acc;
      }
    }, []);

    result = result.sort().join('');
    return result;
  }  
};

const arr = [
  'Amelia',
  null,
  undefined,
  'Ruby',
  'Lily',
  11,
  'Grace',
  22,
  'Millie',
  'Daisy',
  true,
  'Freya',
  false,
  'Erin',
  new Set([1,2,3,4,5]),
  'Megan',
  {
    'John': 'Smith'
  },
  'Jasmine',
  1,
  2,
  3,
  4,
  5,
  'Brooke',
];

const arr2 = [
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
];

// console.log(`Мы получили: `, createDreamTeam(arr), 'А должны были: ABDEFGJLMMR' );
console.log(`Мы получили: `, createDreamTeam(arr2), 'А должны были: BDETV' );
// console.log(`Мы получили: `, createDreamTeam(['Eric', 'Donald', 'Justin', 'Katherine', 'Ethan', 'Charles', 'Frances', 'Kimberly', 'Noah', 'Paul']), 'А должны были: CDEEFJKKNP' );
// console.log(`Мы получили: `, createDreamTeam(['Ann', 'Nancy', 'Nicholas', 'Alexander', 'Charles', 'Johnny', 'Philip', 'Jeffrey', 'Kenneth', 'Raymond']), 'А должны были: AACJJKNNPR' );


// arr.forEach((item) => {
//   console.log(typeof item);
// });

