const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dino1;
  beforeEach(function () {
    park = new Park("Fun Park", 25);
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('aardonyx', 'omnivore', 45);
    dino3 = new Dinosaur('raptor', 'herbivore', 76);
    dino4 = new Dinosaur('raptor', 'herbivore', 65);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Fun Park");
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dino1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino1]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDino(dino1);
    park.addDino(dino2);
    park.removeDino(dino2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino1]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    const actual = park.mostAttractiveDino();
    assert.deepStrictEqual(actual, dino3);
  });


  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    const actual = park.findBySpecies("raptor");
    assert.deepStrictEqual(actual, [dino3, dino4])
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    park.removeBySpecies("raptor");
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2])
  });

});
