function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName,
    }
}




let favoriteNumer = 42

const instructor = {

firstName: "Colt",
[favoriteNumer] :"this is my favorite!"
}





  const instructors = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + "says bye!"
    }
  }




  function animalObj(species,verb,noise){
    return {
        species,
        [verb](){
            return noise
        } 

    }
  }