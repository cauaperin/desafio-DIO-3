class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        const formasAtaque = {
            "guerreiro": "atacou usando uma espada",
            "mago": "atacou usando magia",
            "ninja": "atacou usando shuriken",
            "monge": "atacou usando artes marciais"
        }

        const mensagem = formasAtaque[this.tipo] || `atacou....quem é esse ${this.tipo}`
        console.log(`O ${this.tipo} ${mensagem}`)
    }
}

const herois = [
    new Hero("Caua", "18", "guerreiro"),
    new Hero("Harry", "22", "mago"),
    new Hero("Lucas", "43", "monge"),
    new Hero("Ugo", "12", "agiota")
]

herois.forEach(heroi => heroi.atacar())
