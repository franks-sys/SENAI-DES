class Animal{
    //Atributos
    int id = 0;
    String nome='';
    String especie='';
    String raca='';
    double peso = 0.0;
    //Métodos
    Animal(this.id, this.nome, this.especie, this.raca, this.peso);
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";

    }
}

void main(){
    // instancia
    Animal boi = new Animal(1, "Bandido", "Bovino", "Nelori", 499.9);
    Animal rato = new Animal(2, "legal", "ratatuille", "mouse", 9.9);
    Animal leao = new Animal(4, "feiao", "lion", "reidaselva", 188.9);
    Animal baleia = new Animal(3, "chato", "bigpeixe", "wale", 159.9);
    Animal lontra = new Animal(5, "roberval", "peixeanimal", "lontre", 18.9);
    Animal gato = new Animal(6, "jefferson", "felino", "cat", 7.9);
    Animal cachorro = new Animal(7, "cleber", "viralata", "dog", 45.9);
    Animal peixe = new Animal(8, "rony", "peixonalta", "fish", 4.9);
    Animal passaro = new Animal(9, "fexon", "voador", "bird", 0.9);
    Animal aguaviva = new Animal(10, "shiny", "agua", "lifeH20", 0.5);
    // Objeto
    print(boi.tudoJunto());
    print(rato.tudoJunto());
    print(baleia.tudoJunto());
    print(leao.tudoJunto());
    print(lontra.tudoJunto());
    print(gato.tudoJunto());
    print(cachorro.tudoJunto());
    print(peixe.tudoJunto());
    print(passaro.tudoJunto());
    print(aguaviva.tudoJunto());
}