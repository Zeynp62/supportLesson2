const park = {
  price: 12,
  staff: ['John', 'Mohamed', 'Ahmed'],
  guest: ['Dr.Zahra'],
}


park.area = 'playground'//adding area 
park.price = 5 //update
console.log(park)

park.discount = function () {
  park.price = park.price -2
}

park.discount()
console.log('Staff at index 1',park.staff[1]);

park.staff.forEach((member) => {
  console.log(member)
})

park.guest.forEach(member => {
  console.log(member);
})