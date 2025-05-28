const map1 = {
  'Kien Phan': 'Cohart intern',
  'Thinh': 'Senior intern',
  'Quoc': 'Another Senior intern',
  'Nguyen Van B': 'Random intern',
}

const map2 = new Map()
map2.set('Nguyen Van A', 'Fresher intern')
map2.set('Phan Thi B', 'Junior intern')

console.log(map1)
/* 
{
  'Kien Phan': 'Cohart intern',
  Thinh: 'Senior intern',
  Quoc: 'Another Senior intern'
}
*/

console.log(map2)
/*
Map(2) {
  'Nguyen Van A' => 'Fresher intern',
  'Phan Thi B' => 'Junior intern'
}
*/

// insert
map1['Phan Huy Thang'] = 'Intern leader';
map2.set('Son Tran', 'CTO');
console.log(map1)
/*
{
  'Kien Phan': 'Cohart intern',
  Thinh: 'Senior intern',
  Quoc: 'Another Senior intern',
  'Phan Huy Thang': 'Intern leader'
}
*/
console.log(map2);
/*
Map(3) {
  'Nguyen Van A' => 'Fresher intern',
  'Phan Thi B' => 'Junior intern',
  'Son Tran' => 'CTO'
}
*/

// delete
delete map1['Nguyen Van B']
map2.delete['Phan Van Thi']

console.log(map1);
/*
{
  'Kien Phan': 'Cohart intern',
  Thinh: 'Senior intern',
  Quoc: 'Another Senior intern',
  'Phan Huy Thang': 'Intern leader'
}

*/
console.log(map2);
/*
Map(3) {
  'Nguyen Van A' => 'Fresher intern',
  'Phan Thi B' => 'Junior intern',
  'Son Tran' => 'CTO'
}
*/

// search
// object style
console.log(map1['Kien Phan']); // Cohart intern
// Map class style
console.log(map2.get('Son Tran')); // CTO