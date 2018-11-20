const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.addDino = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDino = function (dinosaur) {
  const index = this.dinosaurs.indexOf(dinosaur);
  if (index >= 0) this.dinosaurs.splice(index, 1);
};

Park.prototype.mostAttractiveDino = function () {
  let mostAttractiveDino = this.dinosaurs[0];

  for (const dino of this.dinosaurs){
    if (dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay){
        mostAttractiveDino = dino;
    }
  }
  return mostAttractiveDino;
};

Park.prototype.findBySpecies = function (species_name) {
  const dinoBySpecies = [];
  for (const dino of this.dinosaurs){
    if (dino.species === species_name){
      dinoBySpecies.push(dino);
    }
  }
  return dinoBySpecies;
};

Park.prototype.removeBySpecies = function (species_name) {
  let newDinosaurs = [];
  for (const dino of this.dinosaurs){
    if (dino.species !== species_name){
      newDinosaurs.push(dino);
    }
  }
  this.dinosaurs = newDinosaurs;
};

Park.prototype.totalVisitorsPerDay = function () {
  let totalDailyVisitors = 0;
  for (const dino of this.dinosaurs){
    totalDailyVisitors += dino.guestsAttractedPerDay;
  }
  return totalDailyVisitors
};

Park.prototype.totalYearlyVisitors = function () {
  const dailyVisitors = this.totalVisitorsPerDay();
  return dailyVisitors * 365;
};

Park.prototype.yearlyTicketSales = function () {
  const totalYearlyVisits = this.totalYearlyVisitors();
  return totalYearlyVisits * this.ticketPrice;
};

Park.prototype.dietCount = function () {
  const DietCount = {'carnivore': 0, 'herbivore': 0, 'omnivore': 0};
  for (const dino of this.dinosaurs){
    if (dino.diet === 'carnivore'){
      DietCount['carnivore']++;
    } else if (dino.diet === 'herbivore') {
      DietCount['herbivore']++;
    } else {
      DietCount['omnivore']++;
    }
  }
  return DietCount;
};

module.exports = Park;
