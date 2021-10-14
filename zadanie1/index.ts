//PO OTVORENÍ TREBA ZADAŤ PRÍKAZ cd zadanie1 (nedopátral som sa k permanentnému nastaveniu)

import {question} from 'readline-sync';  //importovanie určitého adresára z určitej lokácie

calculator(); //vyvolanie funkcie calculator
function calculator(): void {  //definovanie a pomenovanie funkcie; void pretože input zadá až používateľ
    let firstInput: any = question('Enter first number:\n');  //vyžiadanie si prvého čísla pomocou otázky, type: any
    const operator: string = question ('Enter operator:\n');  //vyžiadanie si operátora potrebného na realizáciu výpočtu pomocou otázky; type: string
    let secondInput: any = question('Enter second number:\n');  //vyžiadanie si druhého čísla pomocou otázky, type: any   
    
    
    let firstNumber: number = parseInt(firstInput);  //zmena typu prvej premennej, any->number      
    let secondNumber: number = parseInt(secondInput);  //zmena typu druhej premennej, any->number
    const result = calculate(firstNumber, operator as Operator, secondNumber);  //zadefinovanie konštanty result pomocou funkcie calculate obsahujúcej premenné
    console.log('Result of your problem is:\n',result);  //vypísanie vety a v novom riadku aj výsledku
    
    control1(firstInput); // kontrola prvého inputu
    control2(secondInput); // kontrola prvého inputu
}


type Operator = '+' | '-' | '*' | '/' //vytvorenie a definovanie vlastného typu hodnôt

function calculate(firstNumber: number, operator: Operator, secondNumber: number) {  //definovanie funkcie calculate; zahrnutie premenných a ich typov
    switch(operator) {  //"funkcia", ktorá na základe určitých vstupov/hodnôt vykoná určitý výstup/akciu s vybranou premennou
        case '+':  //prípad/možnosť 1
            return firstNumber + secondNumber;  //akcia 1. prípadu; sčítaj prvé číslo s druhým
        case '-':  //prípad/možnosť 2
            return firstNumber - secondNumber;  //akcia 2. prípadu; odčítaj druhé číslo od druhého
        case '*':  //prípad/možnosť 3
            return firstNumber * secondNumber;  //akcia 3. prípadu; vynásob prvé číslo druhým
        case '/':  //prípad/možnosť 4
            return firstNumber / secondNumber;  //akcia 4. prípadu; vydeľ prvé číslo druhým
    }
}

function control1(firstInput: any) {  //definovanie funkcie; zahrnutie premenej a jej typu
    if (!isNaN(firstInput)){  //zadanie podmienky; premenná, ktorá sa má vyhodnotiť (Je premenná firstInput číslo?)
        return  //ak je premenná firstInput číslo- nestane sa nič
    } else {  //čo sa stane ak vyjde podmienka false?
        console.log('Oh no! It looks like your first input is not numeric!')  //vypíš daný text
    }
}

function control2(secondInput: any) {  //definovanie funkcie; zahrnutie premennej a jej typu
    if (!isNaN(secondInput)){  //zadanie podmienky; premenná, ktorá sa má vyhodnotiť (Je premenná secondInput číslo?)
        return  //ak je premenná secondInput číslo- nestane sa nič
    } else {  //čo sa stane ak vyjde podmienka false?
        console.log('Oh no! It looks like your second input is not numeric!')  //vypíš daný text
    }
}