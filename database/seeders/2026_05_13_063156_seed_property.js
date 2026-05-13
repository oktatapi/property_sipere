import db from '../../app/models/modrels.js';

async function up({ context: QueryInterface }) {
  if (db.Property) {
    await db.Property.bulkCreate([
      { id: 1, address: "Szeged, Nyár utca 8.", price: 185000, area_sqm: 150, property_type: "ház", is_available: true },
      { id: 2, address: "Szeged, Fal utca 15.", price: 122000, area_sqm: 85, property_type: "ház", is_available: true },
      { id: 3, address: "Budapest, Váci út 12.", price: 450000, area_sqm: 55, property_type: "lakás", is_available: true },
      { id: 4, address: "Debrecen, Piac utca 45.", price: 210000, area_sqm: 120, property_type: "ház", is_available: false },
      { id: 5, address: "Pécs, Király utca 10.", price: 175000, area_sqm: 42, property_type: "lakás", is_available: true },
      { id: 6, address: "Győr, Baross út 3.", price: 320000, area_sqm: 200, property_type: "iroda", is_available: true },
      { id: 7, address: "Sopron, Várkerület 56.", price: 195000, area_sqm: 78, property_type: "lakás", is_available: true },
      { id: 8, address: "Siófok, Petőfi sétány 1.", price: 550000, area_sqm: 95, property_type: "nyaraló", is_available: true },
      { id: 9, address: "Eger, Dobó tér 4.", price: 140000, area_sqm: 60, property_type: "lakás", is_available: false },
      { id: 10, address: "Kecskemét, Nagykőrösi utca 22.", price: 165000, area_sqm: 110, property_type: "ház", is_available: true },
      { id: 11, address: "Miskolc, Széchenyi út 15.", price: 115000, area_sqm: 52, property_type: "lakás", is_available: true },
      { id: 12, address: "Veszprém, Óváros tér 2.", price: 280000, area_sqm: 140, property_type: "ház", is_available: true }
    ]);
  } else {
    await QueryInterface.bulkInsert('properties', [

    ]);
  }

}

async function down({ context: QueryInterface }) {
  await QueryInterface.bulkDelete('properties');
}

export { up, down }
