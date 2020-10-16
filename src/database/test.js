const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  // inserir dados na tabela
  await saveOrphanage(db, {
      lat: "-15.7750836",
      lng: "-48.0972927",
      name: "Lar ds meninas",
      about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
      whatsapp: "04321987",
      images: [
        "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  
        "https://images.unsplash.com/photo-1583526362016-c3137c71cc3a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
      ].toString(),
      instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
      opening_hours: "Horários de visitas Das 18h até 8h",
      open_on_weekends: "1"
  })
  // consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

//   // consultar somente 1 orfanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
  console.log(orphanage)

//   // apagar um dado
//   console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
//   console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
// })
})
// db.run(`
//     INSERT INTO orphanages (
//       lat,
//       lng,
//       name,
//       about,
//       whatsapp,
//       images,
//       instructions,
//       opening_hours,
//       open_on_weekends

//     ) VALUES (
//       "-15.7750836",
//       "-48.0772927",
//       "Lar das meninas",
//       "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
//       "98765432",
//       "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
//       "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
//       "Horários de visitas Das 18h até 8h",
//       "1"
//     );
//   `)