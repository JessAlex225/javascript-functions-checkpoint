// 1. Inverser une chaîne
function inverserChaine(chaine) {
    return chaine.split("").reverse().join("");
}

console.log(inverserChaine("bonjour"));

// 2. Compter les caractères
function compterCaracteres(chaine) {
    return chaine.length;
}

console.log(compterCaracteres("Bonjour"));

// 3. Mettre la première lettre de chaque mot en majuscule
function majusculeMots(phrase) {
    return phrase
        .split(" ")
        .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
        .join(" ");
}

console.log(majusculeMots("bonjour tout le monde"));

// 4. Trouver le maximum
function trouverMaximum(tableau) {

    let max = tableau[0];

    for (let i = 1; i < tableau.length; i++) {

        if (tableau[i] > max) {
            max = tableau[i];
        }

    }

    return max;
}

console.log(trouverMaximum([5, 10, 3, 8]));

// 5. Trouver le minimum
function trouverMinimum(tableau) {

    let min = tableau[0];

    for (let i = 1; i < tableau.length; i++) {

        if (tableau[i] < min) {
            min = tableau[i];
        }

    }

    return min;
}

console.log(trouverMinimum([5, 10, 3, 8]));

// 6. Somme d'un tableau
function sommeTableau(tableau) {

    let somme = 0;

    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }

    return somme;
}

console.log(sommeTableau([1, 2, 3, 4, 5]));

// 7. Filtrer un tableau
function filtrerTableau(tableau) {

    let resultat = [];

    for (let i = 0; i < tableau.length; i++) {

        if (tableau[i] % 2 === 0) {
            resultat.push(tableau[i]);
        }

    }

    return resultat;
}

console.log(filtrerTableau([1, 2, 3, 4, 5, 6]));

// 8. Factorielle
function factorielle(n) {

    let resultat = 1;

    for (let i = 1; i <= n; i++) {
        resultat *= i;
    }

    return resultat;
}

console.log(factorielle(5));

// 9. Vérifier si un nombre est premier
function estPremier(n) {

    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            return false;
        }

    }

    return true;
}

console.log(estPremier(7));
console.log(estPremier(10));

// 10. Suite de Fibonacci
function fibonacci(nombreTermes) {

    let suite = [0, 1];

    for (let i = 2; i < nombreTermes; i++) {

        suite.push(
            suite[i - 1] + suite[i - 2]
        );

    }

    return suite;
}

console.log(fibonacci(7));