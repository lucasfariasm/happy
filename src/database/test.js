const Database = require('./db');

Database.then(async db=>{
  // inserir dados na tabela
  await db.run(`
    INSERT INTO orphanages (
      lat,
      lng,
      name,
      about,
      whatsapp,
      images,
      instructions,
      opening_hours,
      open_on_weekends

    ) VALUES (
      "-15.7750836",
      "-48.0772927",
      "Lar das meninas",
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
      "98765432",
      "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
      "Horários de visitas Das 18h até 8h",
      "1"
    );
  `)
  // consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  // consultar somente 1 orfanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
  console.log(orphanage)

})