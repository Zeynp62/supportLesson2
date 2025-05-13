// copy and paste into your script.js

const jurassicPark = {
  expenseSpared: 0,
  staff: {
    founder: 'John Hammond',
    programmer: 'Dennis Nedry',
    engineer: 'John Arnold',
    security: 'Robert Muldoon',
    scientist: 'Dr. Henry Wu'
  },
  guests: [
    'Dr. Alan Grant',
    'Dr. Ellie Sattler',
    'Dr. Ian Malcolm',
    'Donald Gennaro'
  ],
  systems: [
    {
      area: 'Perimeter Fence',
      volts: 10000,
      online: true
    },
    {
      area: 'T-Rex Paddock',
      volts: 10000,
      online: true
    },
    {
      area: 'Velociraptor Pen',
      volts: 10000,
      online: true
    }
  ]
}
jurassicPark.systems.push({
  area: 'Tour Vehicles',
  lockingMechanisms: false,
  online: true
})

jurassicPark.systems[0].online = false
jurassicPark.systems[1].online = false

delete jurassicPark.staff.programmer
jurassicPark.guests.splice(3, 1)
jurassicPark.systems[3].online = false
delete jurassicPark.staff.security
delete jurassicPark.staff.engineer

jurassicPark.systems.forEach((system) => {
  system.online = true
})

console.log(jurassicPark)
