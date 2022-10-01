const skills = [
    {id: 125223, skill: 'CSS', done: true},
    {id: 127904, skill: 'Python', done: false},
    {id: 139608, skill: 'C++', done: false}
  ];
  
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, skill) {
  // Find the index based on the id of the skill object
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  // Ensure the id is copied over
  skill.id = parseInt(id);
  skills.splice(idx, 1, skill);
}

function deleteOne(id) {
  // Find the index based on the id of the skill object
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  // New skills wouldn't be done :)
  skill.done = false;
  skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }