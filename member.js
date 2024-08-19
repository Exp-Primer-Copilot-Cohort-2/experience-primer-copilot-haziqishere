function skillsMember() {
      var member = document.getElementById("member").value;
  var skills = document.getElementById("skills").value;
  var memberSkills = document.getElementById("memberSkills");
  memberSkills.innerHTML = member + " has the following skills: " + skills;
}