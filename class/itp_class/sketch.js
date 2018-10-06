function setup() {
    const Tom = new ITPer("Tom Igoe", "Prof", "1997", "pcomp, network", true);
    Tom.tellMeYourName();
    Tom.tellMeRole();
    Tom.tellMeYourSkill();

    const Mithru = new ITPer("Mithru", "Resident", "2018", "pcomp, prototyping", true);
    const Hayley = new ITPer("Hayley", "Resident", "2018", "pcomp, design", false);
    Hayley.tellMeYourName();
    Mithru.tellMeRole();
}