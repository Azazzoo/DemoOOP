class employe{

    constructor(nom, prenom, age, dateNaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.dateNaissance = dateNaissance;
    }

    toString(){
        return this.prenom + "\n" + this.nom + "\n" + this.dateNaissance + "\n" + this.age;
    }
}
function creerEmploye(){
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;
    let dateNaissance = document.getElementById("date").value;
    const a = new employe(nom,prenom,age,dateNaissance);

    let newP = document.createElement("p");
    newP.innerText= a;
    document.getElementById("employe").append(newP);
}