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
  let mostAttractiveDino;
  for (const dino of this.dinosaurs){
    if (dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay)
      mostAttractiveDino = dino;
  }
  return mostAttractiveDino;
};

module.exports = Park;
